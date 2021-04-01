import { Link } from "react-router-dom";

export default function MoodSummary() {
    return (
      <div>
        <h2 className="master-headline">This is Mood Summary</h2>
        <p>This is another test</p>
        <img src="/assets/img/radar_graph_placeholder.jpg" alt='some value'/>
        <br></br>
        <Link to="/summary/MoodSummaryDetail">
          <button>Insight</button>
        </Link>
      </div>
    )
  }