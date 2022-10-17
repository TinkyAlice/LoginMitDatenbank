import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [nameReg, setNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("")

  const[loginStatus, setLoginStatus] = useState("")

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      name: nameReg,
      password: passwordReg
    }).then((response) => {
      console.log(response);
    });
  }

  const login =() => {
    Axios.post('http://localhost:3001/login',{
      name: name,
      password: password,
    }).then((response) =>{
/*      if(response.data.message){
        setLoginStatus(response.data[0].username)
      }else{
        
        setLoginStatus(response.data.message)

      }
      */
      console.log(response);
    })
  };


  return (
    <div className="App">
      <div className='regisstration'>
        <h1>Registirung</h1>
        <label>Username: </label>
        <input type="text" onChange={(e) => {
          setNameReg(e.target.value);
        }} />
        <label>Password:</label>
        <input type="text" onChange={(e) => {
          setPasswordReg(e.target.value);
        }} />
        <button onClick={register}>Register</button>
      </div>




      <div>
        <h1>Login</h1>
        <input type="text" placeholder='Username' onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={login}> Login</button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
