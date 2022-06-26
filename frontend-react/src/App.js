import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/Login';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';

const { default: axios } = require("axios");
function App() {



  const checkcreds = (creds) => {
    console.log(creds);
    axios({
      method: 'post',
      url: 'http://127.0.0.1:3000/api/user/signin',
      data: creds
    }).then(function (response) {

      console.log(response);
      if (response.data.token) {

        localStorage.setItem("userId", response.data.user._id);
        window.location.href = '/contact'
      }
    }).catch(function (err) {
      console.log(err);

      window.alert("invalid credentials")
    })
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className='container'><Login onPressed={checkcreds} /></div>}></Route>
        <Route path="/contact" element={<div className='container'><Contacts /></div>}></Route>
        <Route path="/addcontact" element={<div className='container'><AddContact /></div>}></Route>

      </Routes>
    </BrowserRouter >

  );
}

export default App;