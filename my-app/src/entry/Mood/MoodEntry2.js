import { Link } from "react-router-dom";
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './MoodEntry2.css'

export default class MoodEntry2 extends Component {
  
  state = {
    moodslider2: ''
  };

   handleChange = (event) => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { moodRating } = this.state;
    localStorage.setItem( 'moodRating2' + ' ' + uuidv4(), JSON.stringify(this.state))
  };
  
  
    render() {
      return (
          <form onSubmit={this.handleFormSubmit} className="bg-color">

            <div className="grid">

              <div className="grid-text">
                <h2 className="master-headline mood-h2">how was <br></br> your sleep?</h2>
              </div>

              <div className="">
                <input 
                type="range" 
                id="mood" 
                name="moodslider2" 
                mind="1" 
                max="1000"
                className="rangeslider"
                value={this.state.user}
                onChange={this.handleChange}
                />
              </div>

              <div>
                <Link to="/entry/Mood/MoodEntry3">
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