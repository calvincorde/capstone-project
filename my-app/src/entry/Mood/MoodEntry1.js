import { Link } from "react-router-dom";

export default function MoodEntry1() {
  return (
    <div>
      <h3>This is Mood Entry 1</h3>
      <div>
        <input type="range" id="mood" name="moodslider" mind="1" max="10"></input>
      </div>
      <Link to="/entry/TagsEntry">
          <button>Continue</button>
        </Link>
    </div>
  )
}