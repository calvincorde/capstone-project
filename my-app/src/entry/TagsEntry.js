import { Link } from "react-router-dom";
import React from "react";
import './TagsEntry.css'



export default function TagsEntry() {

  const [tags, setTags] = React.useState(["Tag1", "Tag2"]);
  const removeTag =indextoRemove => {
    setTags(tags.filter((_, index) => index !== indextoRemove));
  };
  const addTags = event => {
    if (event.target.value !== "") {
      setTags([... tags, event.target.value])
      event.target.value = "";
    }
  };

  return (
    <div>
      <div className="tags-input">
        <ul>
          {tags.map((tag, index) => (
              <li key={index} className="tag tags">
              <span className="tag-title">{tag}</span>
              <i 
              className="material-icons tag-close-icon" 
              onClick={() => removeTag(index)}
              >close</i>
            </li>
          ))}
        </ul>
        <input 
          type="text" 
          placeholder="Enter your Tag here" 
          onKeyUp={e => (e.key === "Enter" ? addTags(e) : null)} />
      </div>
      <Link to="/entry/JournalEntry">
            <button
            // type="submit"
            // onClick={this.handleFormSubmit}
            className="master-text-text"
            >continue</button>
      </Link>
    </div>
  )
}

