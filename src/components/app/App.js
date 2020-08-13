import React from 'react';
import Head from '../head';
import SearchPanel from '../searchPanel';
import TodoList from '../todoList';
import ItemStatusFilter from '../itemStatusFilter';
import './app.css';

const App = () => {
  const todoData = [
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
];

  return (
    <div className='todo-app'>
      <Head toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div> 
      
      <TodoList todos={ todoData } />   
    </div>
  );
};
export default App;