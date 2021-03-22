import { Link } from "react-router-dom";

export default function MoodEntry4() {
  return (
    <div>
      <h2>This is Mood Entry</h2>
      <div>
        <input type="range" id="mood" name="moodslider" mind="1" max="10"></input>
      </div>
      <Link to="/entry/TagsEntry">
        <button>Continue</button>
      </Link>
    </div>
  )
}