import { Link } from "react-router-dom";
import './JournalSummary.css'
import { Bar, Radar } from "react-chartjs-2";

var raw = "";
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

var page_data_obj;

function summary_page_api() {
  fetch("http://192.168.2.226:8000/api/summary/TobiBall/", requestOptions)
        .then(response => response.json())
           .then(data =>  page_data_obj = data)
           .then(data => {
            window.localStorage.setItem(0, JSON.stringify(page_data_obj))})
                .then(result => console.log(page_data_obj))
        .catch(error =>('error', error))
}

summary_page_api()
var page_data = JSON.parse(window.localStorage.getItem(0, page_data_obj));

var affect_dimensions = ["valence","arousal","activity_level","activity_valence"]
var long_term_affect_data = {}
var two_week_affect_data = {}

var arrayLength = affect_dimensions.length;
for (var aff_dim = 0; aff_dim < arrayLength; aff_dim++) {
var ob = page_data["long_term_trend"][affect_dimensions[aff_dim]]
console.log(ob)

   //var bar_data = (page_data["long_term_trend"]["valence"]).sort()
   page_data["long_term_trend"][affect_dimensions[aff_dim]] = Object.keys(ob).sort().reduce(
     (obj, key) => {
       obj[key] = ob[key];
       return obj;
     },
     {}
   );


};

const JournalSummary = () => {
     return (
<div className = "summary-grid" >
    <
    div className = "header" >
    <
    h1 > How is it going...? < /h1> < /
div >

 <
    div className = "header"
    style = {{marginTop: "30px"}}
    >
    <h3 > Happiness < /h3> < /
div >

<Radar
    options = {
        {
            legend: {
                display: false
            },
            pointRadius: [0],
            scale: {
                ticks: {
                    display: false
                }
            }
        }
    }
    data = {
        {
            labels: Object.keys(page_data["short_term_comparison"]["valence"][0]),

            datasets: [{
                    label: 'Mood',
                    data: Object.values(page_data["short_term_comparison"]["valence"][0]),
                    borderColor: ['rgba(87, 156, 247, 1)'],
                    borderWidth: "5px",
                    pointRadius: [1],
                    pointBorderWidth: [1.5],
                    pointBorderColor: ['rgba(255, 255, 255, 0'],
                    backgroundColor: ['rgba(255, 255, 255, 0'],
                },
                {
                    label: 'Sleep',
                    data: Object.values(page_data["short_term_comparison"]["valence"][1]),
                    borderColor: ['rgba(74, 212, 103, 1)'],
                    borderWidth: "5px",
                    pointRadius: [1],
                    pointBorderWidth: [1.5],
                    pointBorderColor: ['rgba(255, 255, 255, 0'],
                    backgroundColor: ['rgba(255, 255, 255, 0'],
                }
            ]
        }
    }
    />

<Bar
     data={{
       labels: Object.keys(page_data["long_term_trend"]["valence"]),
       fontColor: 'white',
       datasets: [{
           data: Object.values(page_data["long_term_trend"]["valence"]),
           backgroundColor: 'rgba(87, 156, 247, 1',
                           hoverBackgroundColor: 'rgba(137, 206, 255)',

         },],}}
    options = {
        {
            responsive: true
        },
        {
            maintainAspectRatio: false
        },
        {
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Week',
                        fontColor: 'white',
                    },
                    ticks:{
                    display: true,
                                        autoSkip: true,
                                        maxTicksLimit: 1},
                    gridLines: {
                        display: false
                    },
                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 1000,
                        stepSize: 100,
                        suggestedMin: 0,
                        suggestedMax: 1000,
                        callback: function (label, index, labels) {
                            switch (label) {
                            case 100:
                                return 'LOW';
                            case 900:
                                return 'HIGH';

                            }
                        }
                    },
                    gridLines: {
                        display: false
                    }
                }, ],
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }
        }
    }
    />
     <
        div className = "header"
            style = {{marginTop: "30px"}}
        >
        <
        h3 > Arousal < /h3> < /
    div >

<Radar
    options = {
        {
            legend: {
                display: false
            },
            pointRadius: [0],
            scale: {
                ticks: {
                    display: false
                }
            }
        }
    }
    data = {
        {
           labels: Object.keys(page_data["short_term_comparison"]["arousal"][0]),

           datasets: [{
                   label: 'Mood',
                   data: Object.values(page_data["short_term_comparison"]["arousal"][0]),
                   borderColor: ['rgba(87, 156, 247, 1)'],
                   borderWidth: "5px",
                   pointRadius: [1],
                   pointBorderWidth: [1.5],
                   pointBorderColor: ['rgba(255, 255, 255, 0'],
                   backgroundColor: ['rgba(255, 255, 255, 0'],
               },
               {
                   label: 'Sleep',
                   data: Object.values(page_data["short_term_comparison"]["arousal"][1]),
                   borderColor: ['rgba(74, 212, 103, 1)'],
                   borderWidth: "5px",
                   pointRadius: [1],
                   pointBorderWidth: [1.5],
                   pointBorderColor: ['rgba(255, 255, 255, 0'],
                   backgroundColor: ['rgba(255, 255, 255, 0'],
                }
            ]
        }
    }
    />

<Bar
    data = {
        {
            labels: Object.keys(page_data["long_term_trend"]["arousal"]),
            datasets: [{
                data: Object.values(page_data["long_term_trend"]["arousal"]),
                backgroundColor: 'rgba(212, 112, 74, 1)',
                hoverBackgroundColor: 'rgba(255, 110, 124, 1)',
            }, ],
        }
    }
    options = {
        {
            responsive: true
        },
        {
            maintainAspectRatio: false
        },
        {
            scales: {
                 xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Week',
                                        fontColor: 'white',
                                    },
                                    ticks:{
                                    display: true,
                                                        autoSkip: true,
                                                        maxTicksLimit: 1},
                                    gridLines: {
                                        display: false
                                    },
                                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 1000,
                        stepSize: 100,
                        suggestedMin: 0,
                        suggestedMax: 1000,
                        callback: function (label, index, labels) {
                            switch (label) {
                            case 100:
                                return 'LOW';
                            case 900:
                                return 'HIGH';

                            }
                        }
                    },
                    gridLines: {
                        display: false
                    }
                }, ],
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }
        }
    }
    />  <
        div className = "header"
            style = {{marginTop: "30px"}}
     >
        <
         > Activity Level < /> < /
    div >

<Radar
    options = {
        {
            legend: {
                display: false
            },
            pointRadius: [0],
            scale: {
                ticks: {
                    display: false
                }
            }
        }
    }
    data = {
        {
           labels: Object.keys(page_data["short_term_comparison"]["activity_level"][0]),

           datasets: [{
                   label: 'Mood',
                   data: Object.values(page_data["short_term_comparison"]["activity_level"][0]),
                   borderColor: ['rgba(87, 156, 247, 1)'],
                   borderWidth: "5px",
                   pointRadius: [1],
                   pointBorderWidth: [1.5],
                   pointBorderColor: ['rgba(255, 255, 255, 0'],
                   backgroundColor: ['rgba(255, 255, 255, 0'],
               },
               {
                   label: 'Sleep',
                   data: Object.values(page_data["short_term_comparison"]["activity_level"][1]),
                   borderColor: ['rgba(74, 212, 103, 1)'],
                   borderWidth: "5px",
                   pointRadius: [1],
                   pointBorderWidth: [1.5],
                   pointBorderColor: ['rgba(255, 255, 255, 0'],
                   backgroundColor: ['rgba(255, 255, 255, 0'],
                }
            ]
        }
    }


    />

<Bar
    data = {
        {

            labels: Object.keys(page_data["long_term_trend"]["activity_level"]),
            datasets: [{
                data: Object.values(page_data["long_term_trend"]["activity_level"]),
                backgroundColor: 'rgba(74, 212, 103, 1)',
                hoverBackgroundColor: 'rgba(124, 255, 153, 1)',
            }, ],
        }
    }
    options = {

        {
            responsive: true
        },
        {
            maintainAspectRatio: false
        },
        {
            scales: {
                xAxes: [{
                                   scaleLabel: {
                                       display: true,
                                       labelString: 'Week',
                                       fontColor: 'white',
                                   },
                                   ticks:{
                                   display: true,
                                                       autoSkip: true,
                                                       maxTicksLimit: 1},
                                   gridLines: {
                                       display: false
                                   },
                               }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 1000,
                        stepSize: 100,
                        suggestedMin: 0,
                        suggestedMax: 1000,
                        callback: function (label, index, labels) {
                            switch (label) {
                            case 100:
                                return 'LOW';
                            case 900:
                                return 'HIGH';

                            }
                        }
                    },
                    gridLines: {
                        display: false
                    }
                }, ],
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }
        }
    }
    /><
        div className = "header"
            style = {{marginTop: "30px"}}>
        <
         > Activity Enjoyableness < /> < /
    div >

<Radar
    options = {
        {
            legend: {
                display: false
            },
            pointRadius: [0],
            scale: {
                ticks: {
                    display: false
                }
            }
        }
    }
    data = {
        {
           labels: Object.keys(page_data["short_term_comparison"]["activity_valence"][0]),

           datasets: [{
                   label: 'Mood',
                   data: Object.values(page_data["short_term_comparison"]["activity_valence"][0]),
                   borderColor: ['rgba(87, 156, 247, 1)'],
                   borderWidth: "5px",
                   pointRadius: [1],
                   pointBorderWidth: [1.5],
                   pointBorderColor: ['rgba(255, 255, 255, 0'],
                   backgroundColor: ['rgba(255, 255, 255, 0'],
               },
               {
                   label: 'Sleep',
                   data: Object.values(page_data["short_term_comparison"]["activity_valence"][1]),
                   borderColor: ['rgba(74, 212, 103, 1)'],
                   borderWidth: "5px",
                   pointRadius: [1],
                   pointBorderWidth: [1.5],
                   pointBorderColor: ['rgba(255, 255, 255, 0'],
                   backgroundColor: ['rgba(255, 255, 255, 0'],
                }
            ]
        }
    }


    />
<Bar
    data = {
        {
            labels: Object.keys(page_data["long_term_trend"]["activity_valence"]),
            datasets: [{
                data: Object.values(page_data["long_term_trend"]["activity_valence"]),
                backgroundColor: 'rgba(235, 217, 94, 1)',
                hoverBackgroundColor: 'rgba(255, 255, 144, 1)',
            }, ],
        }
    }
    options = {
        {
            responsive: true
        },
        {
            maintainAspectRatio: false
        },
        {
            scales: {
                 xAxes: [{
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Week',
                                        fontColor: 'white',
                                    },
                                    ticks:{
                                    display: true,
                                                        autoSkip: true,
                                                        maxTicksLimit: 1},
                                    gridLines: {
                                        display: false
                                    },
                                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 1000,
                        stepSize: 100,
                        suggestedMin: 0,
                        suggestedMax: 1000,
                        callback: function (label, index, labels) {
                            switch (label) {
                            case 100:
                                return 'LOW';
                            case 900:
                                return 'HIGH';

                            }
                        }
                    },
                    gridLines: {
                        display: false
                    }
                }, ],
            },
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            }
        }
    }
    /> < /
    div >
     )
   }
   export default JournalSummary