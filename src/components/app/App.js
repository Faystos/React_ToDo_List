import React, { Component } from 'react';
import './app.css';

import Head from '../head';
import SearchPanel from '../searchPanel';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';
import ItemAddForm from '../itemAddForm';

export default class App extends Component {
  // Счетчик id таска
  idCount = 1;

  //Состояние
  state = {
    todoData: [
      this.createTodoItem('Выпить кофе.'),
      this.createTodoItem('Прочитать книгу по реакту.'),
      this.createTodoItem('Лечь спать.'),    
    ],
    term: '',
    filter: 'all'
  }; 

  //Логика
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.idCount++
    }
  }

  toggleProp(arr, id, propName) {   
    const newTodoData = arr.map(el => {
      if (el.id === id) el[propName] = !el[propName];        
      return el;
    });
    return newTodoData;    
  }

  onFilter(arrItm, filter) {
    switch(filter) {
      case 'all':
        return arrItm;
       case 'active':
        return arrItm.filter(el => !el.done);
       case 'done':
         return arrItm.filter(el => el.done);
      default: 
        return arrItm;
    }
  }

  // Кастомные обработчики событий
  deleteItem = id => {
    this.setState(({ todoData }) => {
     const newTodoData = todoData.filter(el => el.id !== id);
     return { todoData: newTodoData }
    });
  };

  addItem = label => {
    const newItem = this.createTodoItem(label);
    this.setState( ({todoData}) => {
      const newTodoData = [ ...todoData, newItem];
      return { todoData: newTodoData }
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
       return { todoData: this.toggleProp(todoData, id, 'important') }
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProp(todoData, id, 'done') }
    });   
  };

  onLiveSearch = (arrItems, term) => {    
    if (term.length === 0) return arrItems;
    return arrItems.filter(el => {
      return el.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });    
  };

  onValueSerch = term => {
    this.setState({ term });
  };  
  
  onFilterChange = name => {
    this.setState(({ filter }) => {
      return { filter: name }
    });
  };

  render () {
    const { todoData, term, filter } = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const todoItemCount = todoData.length - doneCount;
    const renderItems = this.onFilter(this.onLiveSearch(todoData, term), filter);

    return (
      <div className='todo-app'>
        <Head 
          toDo = { todoItemCount }
          done = { doneCount }
        />
        <div className = "top-panel d-flex">
          <SearchPanel onValueSerch = { this.onValueSerch }/>
          <ItemStatusFilter
            filter = { filter }
            onFilterChange = { this.onFilterChange }
          />
        </div>         
        <TodoList 
          todos = { renderItems }
          onDeleted = { this.deleteItem }
          onToggleImportant = { this.onToggleImportant }
          onToggleDone = { this.onToggleDone }
        />
        <ItemAddForm onAddItem = { this.addItem }/>   
      </div>
    );
  }  
};