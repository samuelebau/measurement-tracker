import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);
const authenticationProvider = getAuth(firebaseApp);

function App() {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [currentUser,setCurrentUser] = useState(false);

  const loginUser = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(authenticationProvider, email, password)
        .then((userCredential) => {
          // Signed in
          //const user = userCredential.user;
          setCurrentUser(userCredential);
          // ...
        })
        .catch((error) => {
          setCurrentUser(error);
        });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form onSubmit={loginUser}>
          <input type="email"
                 placeholder="Email"
                 onChange={(e) => {
                   setEmail(e.target.value);
                 }}
          />
          <input type="password"
                 placeholder="Password"
                 onChange={(e) => {
                   setPassword(e.target.value);
                 }}
          />
          <input type="submit" value="Login"/>
          <pre>
            Email: {email} <br/>
            Password: {password} <br/>
            {currentUser && JSON.stringify(currentUser)}
          </pre>
        </form>
      </header>
    </div>
  );
}

export default App;
