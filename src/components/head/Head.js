import React from 'react';
import './head.css';

const Head = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Задачи</h1>
      <h2>{toDo} осталось, {done} сделано</h2>
    </div>    
  );
};

export default Head;