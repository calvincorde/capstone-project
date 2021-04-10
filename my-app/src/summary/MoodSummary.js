import { Link } from "react-router-dom";
import {Radar} from 'react-chartjs-2';
import { useEffect, useState } from "react";
 
const MoodSummary = () => {


  // const [chartData, setChartData] = useState({})
  // const chart = () => {
  //   setChartData({
  //     labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  //     datasets: [
  //       {
  //         label: 'mood of the Day',
  //         data: [32, 45, 65, 23, 54, 43, 56],
  //         backgroundColor: [
  //           'rgba(75, 192, 192, 0.6)'
  //         ],
  //         borderWidth: 4
  //       }
  //     ]
  //   })
  // }

  // useEffect(() => {
  //   chart()
  // }, [])

    return (
      <div>
        <div className="months-change">
          <i className="material-icons" style={{color: "white"}}>chevron_left</i>
          <h3 className="master-topic-headline">APRIL</h3>
          <i className="material-icons" style={{color: "white"}}>chevron_right</i>
        </div>
        <Radar 
          data={{
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],

            datasets: [
              {
                label: 'Mood',
                data: [32, 87, 45, 76, 21, 12, 89],
                backgroundColor: ['rgba(87, 156, 247, 0.6)'],
                pointRadius: [0]
              },
              {
                label: 'Sleep',
                data: [42,  34,  50,  86,  30,  10,  27],
                backgroundColor: ['rgba(74, 212, 103, 0.6)'],
                pointRadius: [0]
              },
              {
                label: 'Arise',
                data: [92,  90,  38,  2,  54,  91,  10],
                backgroundColor: ['rgba(235, 217, 94, 0.6)'],
                pointRadius: [0]
              },
              {
                label: 'Excitement',
                data: [33,  9,  86,  63,  45,  50,  39],
                backgroundColor: ['rgba(212, 112, 74, 0.6)'],
                pointRadius: [0]
              }

            ]
          }}
        />

        
        <Link to="/summary/MoodSummaryDetail">
          <button>Insight</button>
        </Link>
      </div>
    )
  }

  export default MoodSummary