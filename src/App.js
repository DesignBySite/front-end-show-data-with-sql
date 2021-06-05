import './App.css';
import React, { useState } from 'react'
function App() {

  const [returnedData, setReturnedData] = useState(['hello']);

  const fetchData = async () => {
    const newData = await fetch('/hello', {
      method: 'GET',
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(res => res.json())
    console.log(newData);
    setReturnedData(newData.result)
  }

  return (
    <div className="App">
      <button onClick={() => fetchData()}>Click</button>
      {returnedData}
    </div>
  );
}

export default App;
