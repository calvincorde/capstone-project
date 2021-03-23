
import { 
  Route, 
  Switch
} from "react-router-dom";

import MoodEntry from "./MoodEntry"
import TagsEntry from "./TagsEntry"
import JournalEntry from "./JournalEntry"

import MoodEntry1 from "./Mood/MoodEntry1"
import MoodEntry2 from "./Mood/MoodEntry2"
import MoodEntry3 from "./Mood/MoodEntry3"
import MoodEntry4 from "./Mood/MoodEntry4"


export default function MainEntry() {
  return ( 
    <div>
      <h1>This is Main Entry</h1>
      <Switch>
        <Route path="/entry/MainEntry" component={MoodEntry} />
        <Route path="/entry/TagsEntry" component={TagsEntry} />
        <Route path="/entry/JournalEntry" component={JournalEntry} />
        <Route path="/entry/Mood/MoodEntry2" component={MoodEntry2} />
        <Route path="/entry/Mood/MoodEntry3" component={MoodEntry3} />
        <Route path="/entry/Mood/MoodEntry4" component={MoodEntry4} />

      </Switch>
  </div>
    
  )
}


