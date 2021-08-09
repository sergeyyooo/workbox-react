import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { div } from 'prelude-ls';

function App() {

  const [data, setData] = useState([])

  useEffect(() =>{
    const createData = () =>{
      const arr = []
      for (let i = 0; i<30; i++) arr.push(i)
      setData(arr)
    }
    createData()
  },[])

  return (
    <div className="App">
      {
        data.map((i, idx)=><div className = 'cube' key = {i}>{i}</div>)
      }
     </div>
  );
}

export default App;
