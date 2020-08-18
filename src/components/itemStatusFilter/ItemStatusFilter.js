import React, { Component } from 'react';
import './itemStatusFilter.css';

export default class ItemStatusFilter extends Component {
  btns = [
    {name: 'all', label: 'all'},
    {name: 'active', label: 'active'},
    {name: 'done', label: 'done'},
  ];  

  render () {
    const { filter, onFilterChange } = this.props;
    const buttons = this.btns.map(({ name, label }) => {
      const activeBtn = filter === name;
      const classBtn = activeBtn ? 'btn-info' : 'btn-outline-secondary';
        return (
        <button
          type = 'button'
          className = { `btn ${classBtn}` }
          key = { name }
          onClick = { () => onFilterChange(name)}>
            { label }
        </button>
        )
    });

    return (
      <div className = "btn-group">
        { buttons }
      </div>
    );
  }
}