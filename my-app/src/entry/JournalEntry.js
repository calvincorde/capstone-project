import { Link } from "react-router-dom";
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

import './journalentry.css'

export default class JournalEntry extends Component  {
  
  state = {
    headline: '',
    entry: ''
  };

   handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { headline, entry } = this.state;
    localStorage.setItem( 'JournalEntry' + ' ' + uuidv4(), JSON.stringify(this.state))
  };
    render() {
      return (
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <h2>This is Journal Entry</h2>
            <input 
              className="textbox" 
              type="text" 
              name="headline"
              placeholder="Headline"
              value={this.state.user}
              onChange={this.handleChange}
              />
            <input 
              className="textbox" 
              type="text" 
              name="entry"
              placeholder="Write a new entry"
              value={this.state.user}
              onChange={this.handleChange}
              />
            <br></br>
            <Link to="/summary/MainSummary">
              <button
               onClick={this.handleFormSubmit}
               >continue</button>
            </Link>
          </form>
        </div>
      )
    }    
  }
