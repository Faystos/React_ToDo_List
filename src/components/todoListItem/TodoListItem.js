import React, { Component } from 'react';

import './todoListItem.css';

export default class TodoListItem extends Component { 
  //Локальное состояние
  state = {
    done: false,
    important: false
  }

  // Обрабочики событий
  onHendlerClickListItem = (evt) => {
    evt.preventDefault();
    this.setState(({ done }) => {
      return {
        done: !done
      };
    });
  };

  onMarkImportant = (evt) => {
    evt.preventDefault();
    this.setState(({ important }) => {
      return {
        important: !important
      }
    });
  };

  render () {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
    let className = 'todo-list-item';

    if (done) className += ' done';
    if (important) className += ' important';    

    return (
      <span className = { className }>
        <span
          className = 'todo-list-item-label'
          onClick = { this.onHendlerClickListItem }>
            { label }         
        </span>
        <button type = "button"
          className = "btn btn-outline-success btn-sm float-right"
          onClick = { this.onMarkImportant }>
            <i className = "fa fa-exclamation" />
        </button>
        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick = { onDeleted }>
            <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}