use anyhow::Result;
use chrono::{Datelike, Duration, NaiveDate, Utc, Weekday};
// use chrono::format::DelayedFormat;
// use chrono::format::StrftimeItems;
use diesel::pg::PgConnection;
use diesel::prelude::*;
use std::collections::HashMap;
use std::ops::{Index, IndexMut};

use crate::analysis::summary_page::notes::uid;
use crate::diesel_schema::notes;
use crate::diesel_schema::notes::timestamp;
use crate::models::notes::Note;

const AFFECT_DIMENSIONS: [&str; 4] = ["valence", "arousal", "activity_level", "activity_valence"];


impl Index<&'_ str> for Note {
    type Output = i16;
    fn index(&self, s: &str) -> &i16 {
        match s {
            "valence" => &self.valence,
            "arousal" => &self.arousal,
            "activity_level" => &self.activity_level,
            "activity_valence" => &self.activity_valence,
            _ => panic!("unknown field: {}", s),
        }
    }
}

impl IndexMut<&'_ str> for Note {
    fn index_mut(&mut self, s: &str) -> &mut i16 {
        match s {
            "valence" => &mut self.valence,
            "arousal" => &mut self.arousal,
            "activity_level" => &mut self.activity_level,
            "activity_valence" => &mut self.activity_valence,
            _ => panic!("unknown field: {}", s),
        }
    }
}

#[derive(Serialize)]
pub struct Elo {
    a: HashMap<String, HashMap<NaiveDate, i16>>,
    b: HashMap<String, HashMap<i8, HashMap<Weekday, i16>>>,
}

pub fn long_term_trend(db: &PgConnection, obj_id: String) -> HashMap<String, HashMap<NaiveDate, i16>> {
    //sql query
    let results = notes::table
        .order(timestamp)
        .filter(uid.eq(obj_id))
        .load::<Note>(db)
        .expect("Error loading posts");
    let mut affect_data: HashMap<String, HashMap<NaiveDate, i16>> = HashMap::new();

    for affect_dimension in AFFECT_DIMENSIONS {
        let mut week: NaiveDate;
        let mut dimension_data: HashMap<NaiveDate, i16> = HashMap::new();
        let mut week_counter: HashMap<NaiveDate, i16> = HashMap::new();
        //aggregate all results and sum
        for note in &results {
            week = NaiveDate::from_isoywd(note.timestamp.year(),
                                          note.timestamp.iso_week().week(),
                                          Weekday::Mon);
            if !dimension_data.contains_key(&week) {
                dimension_data.insert(
                    week,
                    note[&affect_dimension],
                );
                week_counter.insert(week, 1);
            } else {
                *dimension_data.get_mut(&week).unwrap() += note[&affect_dimension];
                *week_counter.get_mut(&week).unwrap() += 1;
            }
        }
        for (key, value) in week_counter {
            *dimension_data.get_mut(&key).unwrap() /= value;
            // println!(" {}: {}", key, value);
        }
        affect_data.insert(
            affect_dimension.to_string(),
            dimension_data,
        );
    }
    affect_data
}


pub fn short_term_comparison(db: &PgConnection, obj_id: String) -> HashMap<String, HashMap<i8, HashMap<Weekday, i16>>> {
    //sql query
    let this_weeks_values = notes::table
        .order(timestamp)
        .filter(timestamp.ge(Utc::now().naive_utc() - Duration::days(6)))
        .filter(uid.eq((*obj_id).to_string()))
        .load::<Note>(db)
        .expect("Error loading posts");

    let last_weeks_values = notes::table
        .order(timestamp)
        .filter(timestamp.le(Utc::now().naive_utc() - Duration::days(7)))
        .filter(timestamp.ge(Utc::now().naive_utc() - Duration::days(14)))
        .filter(uid.eq(obj_id))
        .load::<Note>(db)
        .expect("Error loading posts");

    let mut affect_data: HashMap<String, HashMap<i8, HashMap<Weekday, i16>>> = HashMap::new();


    for affect_dimension in AFFECT_DIMENSIONS {
        let mut short_term_dimension_data: HashMap<i8, HashMap<Weekday, i16>> = HashMap::new();
        let mut day: Weekday;
        let mut count = 0;
        for i in [&this_weeks_values, &last_weeks_values] {
            let mut dimension_data: HashMap<Weekday, i16> = HashMap::new();
            for note in i {
                day = note.timestamp.weekday();
                let affect = note[&affect_dimension];
                dimension_data.insert(
                    day,
                    affect);
            }
            short_term_dimension_data.insert(
                count,
                dimension_data);
            count += 1;
        }
        affect_data.insert(
            affect_dimension.to_string(),
            short_term_dimension_data);
    }
    affect_data
}

pub fn summary_page_fun(db: &PgConnection, obj_id: String)
                        -> Result<Elo> {
    let elo = Elo {
        a: long_term_trend(&db, (*obj_id).to_string()),
        b: short_term_comparison(&db, obj_id),
    };

    Ok(elo)
}