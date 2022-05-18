import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";
import './JournalSummary.css'
import { Bar, Radar } from "react-chartjs-2";
import {backend} from "./../Global_vars";
import {user_id} from "./../Global_vars";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lt_val: {},
            lt_aro: {},
            lt_acl: {},
            lt_acv: {},
            sc_val: {},
            sc_aro: {},
            sc_acl: {},
            sc_acv: {},
}
    }

    async componentDidMount() {
    var url = "http://" + backend + "/api/summary/" + user_id
    var lt_r
            axios.get(url)
           .then( r => lt_r = r.data.long_term_trend)
           .then( r => this.setState({
                       lt_val: lt_r.valence,
                       lt_aro: lt_r.arousal,
                       lt_acl: lt_r.activity_level,
                       lt_acv: lt_r.activity_valence,
                       sc_val: lt_r.valence,
                       sc_aro: lt_r.arousal,
                       sc_acl: lt_r.activity_level,
                       sc_acv: lt_r.activity_valence,
}))
           }


    render() {
        return (

        <div>

                    {console.log(this.state.lt_val)}

        </div>

        );
    }
}
