import { Link } from "react-router-dom";
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import './MoodSlider.css'
import './MoodEntry.css'

export default class MoodEntry1 extends Component {
  
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
    localStorage.setItem( 'moodRating1' + ' ' + uuidv4(), JSON.stringify(this.state))
  };
  
  
    render() {
      return (
          <form onSubmit={this.handleFormSubmit}>

            <div className="grid">
              <div className="grid-text">
                <h2 className="master-headline">This is Mood Entry 1</h2>
                <p className="master-text-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr?</p>
                <Link to="/entry/Mood/MoodEntry2">
                    <button
                    type="submit"
                    onClick={this.handleFormSubmit}
                    className="master-text-text"
                    >continue</button>
                </Link>
              </div>

              <div className="bg-color">
                <input 
                type="range" 
                id="mood" 
                name="moodslider" 
                mind="1" 
                max="1000"
                className="rangeslider"
                value={this.state.user}
                onChange={this.handleChange}
                />
              </div>

            </div>

          </form>
      )
    }
}