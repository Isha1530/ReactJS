import React from "react";
import './App.css';
import Count from './components/Count';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux</h1>
      {/* <Count />
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button> */}
    </div>
  );
}

export default App;
