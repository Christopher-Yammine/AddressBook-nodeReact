import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Contacts from './components/Contacts';
import { useState, useEffect } from 'react';

const { default: axios } = require("axios");
function App() {
  const [showLogin, setshowLogin] = useState(true);
  const [showContact, setshowContacts] = useState(false);


  const checkcreds = (creds) => {
    console.log(creds);
    axios({
      method: 'post',
      url: 'http://127.0.0.1:3000/api/user/signin',
      data: creds
    }).then(function (response) {
      // if (response.data.status === 'success' && response.data.user.id === 1) {
      //   setshowLogin(false);
      // } else if (response.data.status === 'success' && response.data.user.id !== 1) {
      //   setshowLogin(false);

      // }
      console.log(response);
      if (response.data.token) {
        setshowLogin(false);
        setshowContacts(true);
        localStorage.setItem("userId", response.data.user._id)
      }
    }).catch(function (err) {
      console.log(err);

      window.alert("invalid credentials")
    })
  }
  return (
    <div className='container'>
      {showLogin && <Login onPressed={checkcreds} />}
      {showContact && <Contacts />}
    </div>
  );
}

export default App;