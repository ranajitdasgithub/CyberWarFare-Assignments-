import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [stamp1,setStamp1]=useState("")
  const [stamp2,setStamp2]=useState("")
  const [difference,setDifference]=useState("")
  const handleSubmit=()=>{

  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>First Timestamp: 
          <input type="text" value={stamp1} onChange={(e)=>setStamp1(e.target.value)}/>
        </label>
        <br/>
        <label>Second Timestamp: 
          <input type="text" value={stamp2} onChange={(e)=>setStamp2(e.target.value)}/>
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
