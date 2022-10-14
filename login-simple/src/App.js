import React, {useState} from "react"
import logo from './logo.svg';
import './App.css';

function App() {

  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username:</label>
        <br />
        <input type="text" onChange={(e) => setUsernameReg(e.target.value)}></input>
        <br />
        <label>Password:</label>
        <br />
        <input type="text" onChange={(e) => setPasswordReg(e.target.value)}></input>
        <br />
        <button>Registrater</button>
      </div>
      <div className="login">
        <br />
        <h1>Login</h1>
        <input placeholder="username..."></input>
        <br />
        <input placeholder="password..."></input>
        <br />
        <button>Registrater</button>
      </div>
    </div>
  );
}

export default App;
