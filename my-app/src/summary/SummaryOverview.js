

import MoodSummary from "./MoodSummary"
import TagsSummary from "./TagsSummary"
import JournalSummary from "./JournalSummary"



export default function SummaryOverview() {

  return (
    <div>
      <h1 className="master-headline">This is Main SummaryOverview</h1>
      <MoodSummary />
      <TagsSummary />
      <JournalSummary />
    </div>
  )
}