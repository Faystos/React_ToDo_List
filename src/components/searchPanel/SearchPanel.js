import React, { Component } from 'react';
import './searchPanel.css';

export default class SearchPanel extends Component {

  state = {
    value: ''
  }

  hendlerSearchInt = (evt) => {
    let value = evt.target.value;
    this.setState({ value })       
    this.props.onValueSerch(value);   
  }

  render() {
    return (
      <input type = "text"
        className = "form-control search-input"
        placeholder = "Поиск"
        value = { this.state.value } 
        onChange = { this.hendlerSearchInt }/>
  
    );
  }
}