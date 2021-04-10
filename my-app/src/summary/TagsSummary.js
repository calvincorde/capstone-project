import '../Tags.css'

import { Link } from "react-router-dom";

export default function TagsSummary() {

    return (
      <div className="tags-grid">
        <h2 className="master-headline">This is Tags Summary</h2>
        <div className="tag-list-grid">
          <p className="myTags">Tag1</p>
          <p className="myTags">Tag2</p>
          <p className="myTags">Tag3</p>
        </div>
        <Link to="/summary/TagsSummaryDetail">
        <button>Insight</button>
      </Link>
      </div>
    )
}

