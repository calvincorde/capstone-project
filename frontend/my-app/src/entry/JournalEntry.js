import { Link } from "react-router-dom";
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

import './journalentry.css'

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

 var quote;
  function summary_page_api() {
    const url = "https://zenquotes.io/api/random";
    const proxy = "https://cors-anywhere.herokuapp.com/";

    fetch( proxy + url)
      .then(response => response.json())
      .then(data =>  quote = data)
      .then(data => {
                  window.localStorage.setItem("quote", JSON.stringify(quote))})
      .catch(error => console.log(error.message))
  }

  summary_page_api()
  var page_data = JSON.parse(window.localStorage.getItem("quote", quote));
console.log(page_data['0'])
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
        <div className="journal-grid">
        <h4 className="journal-headline">{page_data['0']['q']}</h4>
                <h20 className="journaling">{page_data['0']['a']}</h20>


        </div>
      )
    }    
  }

