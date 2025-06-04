import React from 'react';

import Header from './components/Header';
import Todoitem from './components/Todoitem';
import Button from './components/Button';
import Counter from './components/Counter';
import './style.css';
const App = () => {
  
  return (
    <div className='todo-container'>
      {/* <Counter />  
      <Counter />  
      <Counter />   */}

      <Header text = "Todo list"/> 
      <Todoitem text= "Eat"/>  
      <Todoitem  text = "Sleep"/>  
      <Todoitem text = "Read"/>  
      <Todoitem completed={true} text = "Write"/>  
      <Todoitem text = "play"/>  
      <Button />
    </div>
  );
  };

export default App;  