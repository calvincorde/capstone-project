import { Link } from "react-router-dom";
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

export default class MoodEntry4 extends Component {
  
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
    localStorage.setItem( 'MoodEntry4' + ' ' + uuidv4(), JSON.stringify(this.state))
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
            <button type="submit">Submit</button>
          <Link to="/entry/TagsEntry">
              <button>Continue</button>
            </Link>
        </form>
      )
    }
}