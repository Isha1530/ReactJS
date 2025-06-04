// import {useContext} from 'react';
import './App.css';

// import Counter from './components/Counter';
// import {CounterContext} from './context/Counter';

import Item from './components/Item';
import Cart from './components/Cart';
function App() {

  // const counterState = useContext(CounterContext);
  // console.log(counterState)
  return (
    <div className="App">
      <h1>Context API</h1>
      {/* <h3>count is {counterState.count}</h3>
      <Counter />
      <Counter />
      <Counter />
      <Counter /> */}
      <Item name={"iPhone"} price={"100000"} />
      <Item name={"Laptop"} price={"80000"} />
      <Item name={"Tab"} price={"15000"} />
      <Cart />
    </div>
  );
}

export default App;
