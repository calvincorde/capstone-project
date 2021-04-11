import { Link } from "react-router-dom";
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './MoodEntry2.css'

export default class MoodEntry3 extends Component {
  
  state = {
    moodslider3: ''
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
    localStorage.setItem( 'moodRating3' + ' ' + uuidv4(), JSON.stringify(this.state))
  };
  
  
    render() {
      return (
          <form onSubmit={this.handleFormSubmit}>

            <div className="grid">

            <i className="material-icons item-a" style={{color: "white"}}>mood</i>


              <div className="grid-text">
                <h2 className="master-headline mood-h2">how good got you <br></br> get up?</h2>
              </div>

              <div className="range-style">
                <input 
                type="range" 
                id="mood" 
                name="moodslider3" 
                mind="1" 
                max="1000"
                className="rangeslider"
                value={this.state.user}
                onChange={this.handleChange}
                />
              </div>

              <i className="material-icons item-b" style={{color: "white"}}>sentiment_very_dissatisfied</i>
              <div>
                <Link to="/entry/Mood/MoodEntry4">
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