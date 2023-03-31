import {useState } from "react";
import axios from "axios"
import './App.css';

function App() {
  const [stamp1,setStamp1]=useState("")
  const [stamp2,setStamp2]=useState("")
  const [difference,setDifference]=useState("")
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response=await axios.get(`http://localhost:8080/difference?timestamp1=${stamp1}&timestamp2=${stamp2}`);
    console.log(response.data)
    setDifference(response.data.difference)

  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>First Timestamp: 
          <input type="text" value={stamp1} placeholder="Enter in this format DD:MM:YYYY HH:MM:SS" onChange={(e)=>setStamp1(e.target.value)}/>
        </label>
        <br/>
        <label>Second Timestamp: 
          <input type="text" value={stamp2} placeholder="Enter in this format DD:MM:YYYY HH:MM:SS" onChange={(e)=>setStamp2(e.target.value)}/>
        </label>
        <br/>
        <button type="submit">Check Difference</button>
      </form>
      <h2>The difference in seconds</h2>
      <h1>{difference || "No Data"}</h1>
    </div>
  );
}

export default App;
