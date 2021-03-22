import { Link } from "react-router-dom";
import { useState } from 'react';

import './journalentry.css'

export default function JournalEntry() {

  const [entry, setEntry] = useLocalStorage (entry, setEntry);

  return (
    <div>
      <h2>This is Journal Entry</h2>
      <input 
        className="textbox" 
        type="text" 
        name="journalentry"
        
        />
      <br></br>
      <Link to="/summary/MainSummary">
        <button>Finish</button>
      </Link>
  </div>
  )
}