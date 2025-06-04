import React,{useEffect,useState} from 'react';
import './App.css';


import Timer from './Timer';

function App() {

  // const [isVisible , setVisible] = useState(true);
  // useEffect(() => {
  //   console.log('Component mounted');
  // }, []);


  return <div className='App'>
    {/* {isVisible ? <Mycom />: null  }
    <button onClick={() => setVisible(!isVisible)}>Toggle Component</button> */}
    
    <Timer />
  </div>
}

export default App;
