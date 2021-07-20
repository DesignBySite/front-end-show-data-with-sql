import './App.css';
import React, { useState } from 'react'

function App() {

  const [returnedData, setReturnedData] = useState(['hello']);
  const [employee, setEmployee] = useState({EmployeeID: 0, Firstname: '', Lastname: '', Age: 0, Gender: ''});

  const inputSet = (e) => {
    const {name, value} = e.target;
    console.log(value);
    if (name === 'EmployeeID' || name === 'Age') {
      setEmployee(prevState => ({
        ...prevState,
        [name]: parseInt(value)
      }));
      console.log('int parsed');
      return;
    }
    setEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const fetchData = async () => {
    console.log(employee);
    const newData = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body: JSON.stringify({
        name: employee.Firstname
      })
    })
    .then(res => res.json())
    console.log('newData:', newData);
    setReturnedData(newData[0])
  }

  const createEmployee = async () => {
    const newData = await fetch('/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body: JSON.stringify({
        ...employee
      })
    })
    .then(res => res.json())
    console.log('newData:', newData);
    setReturnedData(newData[0])
  }

  return (
    <div className="App">
      <input
        type="number"
        name="EmployeeID"
        placeholder="EmployeeID"
        onChange={inputSet}></input>
      <input
        name="Firstname"
        placeholder="Firstname"
        onChange={inputSet}></input>
      <input
        name="Lastname"
        placeholder="Lastname"
        onChange={inputSet}></input>
      <input
        type="number"
        name="Age"
        placeholder="Age"
        onChange={inputSet}></input>
      <input
        name="Gender"
        placeholder="Gender"
        onChange={inputSet}></input>
      <button onClick={() => fetchData()}>Click</button>
      <button onClick={() => createEmployee()}>Create</button>
      <p>EmployeeID: {returnedData.EmployeeID}</p>
      <p>Firstname: {returnedData.Firstname}</p>
      <p>Lastname: {returnedData.Lastname}</p>
      <p>Age: {returnedData.Age}</p>
      <p>Gender: {returnedData.Gender}</p>

    </div>
  );
}

export default App;
