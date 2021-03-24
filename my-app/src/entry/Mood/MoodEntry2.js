import { Link } from "react-router-dom";
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

export default class MoodEntry2 extends Component {
  
  state = {
    moodslider: ''
  };

   handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { moodRating } = this.state;
    localStorage.setItem( 'MoodEntry2' + ' ' + uuidv4(), JSON.stringify(this.state))
  };
  
  
    render() {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <h3>This is Mood Entry 2</h3>
            <input 
            type="range" 
            id="mood" 
            name="moodslider" 
            mind="1" 
            max="10"
            value={this.state.user}
            onChange={this.handleChange}
            />
          <Link to="/entry/Mood/MoodEntry3">
             <button
              type="submit"
              onClick={this.handleFormSubmit}
              >Continue</button>
            </Link>
        </form>
      )
    }
}