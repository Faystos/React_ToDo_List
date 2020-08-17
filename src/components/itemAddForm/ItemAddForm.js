import React, { Component } from 'react';
import './itemAddForm.css';

export default class ItemAddForm extends Component {
  // Состояние
  state = {
    label: ''
  };

  // Обработчики событий
  onLabelChange = (evt) => {    
    this.setState({ label: evt.target.value });       
  };

  onSubmitForm = (evt) => {
    evt.preventDefault();
    this.props.onAddItem(this.state.label);
  }

  render () {  
    return (     
    <form className = 'item-add-form d-flex' onSubmit = { this.onSubmitForm }>
      <input
        type = 'text' placeholder = 'Добавить задачу'
        className = 'form-control'
        onChange = { this.onLabelChange } />
      <button className = 'btn btn-outline-secondary'>
      Добавить
    </button>
    </form>      
    );
  }
}