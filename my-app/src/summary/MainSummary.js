import { 
  Route, 
  Switch
} from "react-router-dom";

import SummaryOverview from "./SummaryOverview"

import MoodSummaryDetail from "./MoodSummaryDetail"
import JournalSummaryDetail from "./JournalSummaryDetail"
import TagsSummaryDetail from "./TagsSummaryDetail"


export default function MainSummary() {
  return (
    <div>
      <h1 className="master-headline">This is Main Summary</h1>
      <Switch>
          <Route path="/summary/MainSummary" component={SummaryOverview} />
          <Route path="/summary/MoodSummaryDetail" component={MoodSummaryDetail} />
          <Route path="/summary/TagsSummaryDetail" component={TagsSummaryDetail} />
          <Route path="/summary/JournalSummaryDetail" component={JournalSummaryDetail} />
        </Switch>
    </div>
  )
}