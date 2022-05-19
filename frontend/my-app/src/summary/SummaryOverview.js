import { lazy , Suspense } from "react";
import './SummaryOverview.css'

import MoodSummary from "./MoodSummary"
import TagsSummary from "./TagsSummary"
import JournalSummary from "./JournalSummary";




export default function SummaryOverview() {

  return (
<Suspense fallback={<div>Loading... </div>}>
    <div className="overview-grid">

      

            <div className="overview-content">
              <JournalSummary className="overview-content" />
            </div>


    </div>
</Suspense>

  )
}

/*
              <div className="overview-content">
                <MoodSummary />
              </div>
      <div className="overview-content">
        <TagsSummary className="overview-content"/>
      </div>

    */