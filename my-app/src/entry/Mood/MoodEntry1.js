import { Link } from "react-router-dom";
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './MoodEntry2.css'

export default class MoodEntry1 extends Component {
 
  state = {
    moodslider1: ''
  };

   handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    const myDate = new Date();
    const myDay = myDate.getDay()

    const theDays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday = theDays[myDay]

    this.setState({ [input.name]: value, weekday });
  };

  handleFormSubmit = () => {
    const { moodRating } = this.state;
    localStorage.setItem( 'moodRating1' + ' ' + uuidv4(), JSON.stringify(this.state))
  };
  
  
    render() {
      return (
          <form onSubmit={this.handleFormSubmit}>

            <div className="grid">

              <div className="grid-text">
                <h2 className="master-headline mood-h2">how are <br></br>you today?</h2>
              </div>

              <div className="range-style">
                <input 
                type="range" 
                id="mood" 
                name="moodslider1" 
                mind="1" 
                max="1000"
                className="rangeslider"
                value={this.state.user}
                onChange={this.handleChange}
                />
              </div>

              <div>
                <Link to="/entry/Mood/MoodEntry2">
                      <button
                      type="submit"
                      onClick={this.handleFormSubmit}
                      className="master-text-text mood-button"
                      >continue</button>
                </Link>
              </div>

            </div>

          </form>
      )
    }
}