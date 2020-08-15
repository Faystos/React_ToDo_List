import React, { Component } from 'react';
import './app.css';

import Head from '../head';
import SearchPanel from '../searchPanel';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';
import ItemAddForm from '../itemAddForm';

export default class App extends Component {
  state = {
    todoData: [
    {
      label: 'Выпить кофе',
      important: false,
      id: 1
    },
    {
      label: 'Прочитать книгу по реакту.',
      important: true,
      id: 2 
    },
    {
      label: 'Лечь спать.',
      important: false,
      id: 3
    },
  ]};

  // Счетчик id таска
  idCount = this.state.todoData.length + 1;

  deleteItem = id => {
    this.setState(({ todoData }) => {
     const newTodoData = todoData.filter(el => el.id !== id);
     return { todoData: newTodoData }
    });
  };

  addItem = () => {
    const newItem = {
      label: 'Какойто текст',
      important: false,
      id: this.idCount++
    }

    this.setState( ({todoData}) => {
      const newTodoData = [ ...todoData, newItem];
      return { todoData: newTodoData }
    });
  }

  render () {
    const { todoData } = this.state;

    return (
      <div className='todo-app'>
        <Head toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>         
        <TodoList 
          todos = { todoData }
          onDeleted = { this.deleteItem }
        />
        <ItemAddForm onAddItem = { this.addItem }/>   
      </div>
    );
  }  
};
