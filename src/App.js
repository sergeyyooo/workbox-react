import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { div } from 'prelude-ls';

function App() {

  const [data, setData] = useState([])
  const [name, setName] = useState('')

  useEffect(() =>{
    const fetchData = async()=>{
      const res = await fetch('https://swapi.dev/api/people/11/')
      const data = await res.json()
      setName(data?.name)
    }
    const createData = () =>{
      const arr = []
      for (let i = 0; i<30; i++) arr.push(i)
      setData(arr)
    }
    createData()
    fetchData()
  },[])

  return (
    <div className="App">
      <h3>{name}</h3>
      {
        data?.map((i, idx)=><div className = 'cube' key = {i}>{i}</div>)
      }
     </div>
  );
}

export default App;
