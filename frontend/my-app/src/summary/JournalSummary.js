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
            sc_vall: {},
            sc_arol: {},
            sc_acll: {},
            sc_acvl: {},
            sc_valp: {},
            sc_arop: {},
            sc_aclp: {},
            sc_acvp: {},
}
    }

    async componentDidMount() {




    var url = "http://" + backend + "/api/summary/" + user_id
    var lt_r
    var sc_r
    var res
        var sorted = (obj) => {
            Object.keys(obj)
          .sort()
          .reduce((accumulator, key) => {
            accumulator[key] = obj[key];
            return accumulator;
          }, {});}

            axios.get(url)
           .then( r => res = r.data)
           .then( r => lt_r = res.long_term_trend)
           .then( r => sc_r = res.short_term_comparison)
           .then( r => this.setState({
                       lt_val: lt_r.valence,
                       lt_aro: lt_r.arousal,
                       lt_acl: lt_r.activity_level,
                       lt_acv: lt_r.activity_valence,
                       sc_vall: sc_r.valence["0"],
                       sc_arol: sc_r.arousal["0"],
                       sc_acll: sc_r.activity_level["0"],
                       sc_acvl: sc_r.activity_valence["0"],
                      sc_valp: sc_r.valence["1"],
                      sc_arop: sc_r.arousal["1"],
                      sc_aclp: sc_r.activity_level["1"],
                      sc_acvp: sc_r.activity_valence["1"],
                                    }
)
         ).
         then(r=> console.log(sorted(this.state.sc_acll)))
           }


    render() {
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
                display: true
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
            labels: Object.keys(this.state.sc_vall),

            datasets: [{
                    label: 'last 7 days',
                    data: Object.values(this.state.sc_vall),
                    borderColor: ['rgba(95, 206, 255)'],
                    borderWidth: "5px",
                    pointRadius: [1],
                    pointBorderWidth: [1.5],
                    pointBorderColor: ['rgba(255, 255, 255, 0'],
                    backgroundColor: ['rgba(255, 255, 255, 0'],
                },
                {
                    label: 'previous 7 days',
                    data: Object.values(this.state.sc_valp),
                    borderColor: ['rgba(90, 255, 153, 1)'],
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
       labels: Object.keys(this.state.lt_val),
       fontColor: 'white',
       datasets: [{
           data: Object.values(this.state.lt_val),
           backgroundColor: 'rgba(87, 156, 247, 2',
                           hoverBackgroundColor: 'rgba(95, 206, 255)',

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
                display: true
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
           labels: Object.keys(this.state.sc_arol),

           datasets: [{
                   label: 'last 7 days',
                   data: Object.values(this.state.sc_arol),
                   borderColor: ['rgba(95, 206, 255)'],
                   borderWidth: "5px",
                   pointRadius: [1],
                   pointBorderWidth: [1.5],
                   pointBorderColor: ['rgba(255, 255, 255, 0'],
                   backgroundColor: ['rgba(255, 255, 255, 0'],
               },
               {
                   label: 'previous 7 days',
                   data: Object.values(this.state.sc_arop),
                   borderColor: ['rgba(90, 255, 153, 1)'],
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
            labels: Object.keys(this.state.lt_aro),
            datasets: [{
                data: Object.values(this.state.lt_aro),
                backgroundColor: 'rgba(212, 112, 74, 1)',
                hoverBackgroundColor: 'rgba(255, 110, 90, 1)',
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
                display: true
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
           labels: Object.keys(this.state.sc_acll),

           datasets: [{
                   label: 'last 7 days',
                   data: Object.values(this.state.sc_acll),
                   borderColor: ['rgba(95, 206, 255)'],
                   borderWidth: "5px",
                   pointRadius: [1],
                   pointBorderWidth: [1.5],
                   pointBorderColor: ['rgba(255, 255, 255, 0'],
                   backgroundColor: ['rgba(255, 255, 255, 0'],
               },
               {
                   label: 'previous 7 days',
                   data: Object.values(this.state.sc_aclp),
                   borderColor: ['rgba(90, 255, 153, 1)'],
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

            labels: Object.keys(this.state.lt_acl),
            datasets: [{
                data: Object.values(this.state.lt_acl),
                backgroundColor: 'rgba(74, 212, 103, 1)',
                hoverBackgroundColor: 'rgba(90, 255, 153, 1)',
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
                display: true
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
           labels: Object.keys(this.state.sc_acvl),

           datasets: [{
                   label: 'last 7 days',
                   data: Object.values(this.state.sc_acvl),
                   borderColor: ['rgba(95, 206, 255)'],
                   borderWidth: "5px",
                   pointRadius: [1],
                   pointBorderWidth: [1.5],
                   pointBorderColor: ['rgba(255, 255, 255, 0'],
                   backgroundColor: ['rgba(255, 255, 255, 0'],
               },
               {
                   label: 'previous 7 days',
                   data: Object.values(this.state.sc_acvp),
                   borderColor: ['rgba(90, 255, 153, 1)'],
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
            labels: Object.keys(this.state.lt_acv),
            datasets: [{
                data: Object.values(this.state.lt_acv),
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
   )}
}