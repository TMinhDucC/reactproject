import './App.scss'
import Login from './components/Login/Login';
import Nav from './components/Navigation/Nav';
import React from "react";
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (
    <Router forceRefresh={true}>
      <div className='app-container mt-3'>
        {/* <Nav /> */}
        <Switch>
          <Route path="/news">
            news
          </Route>
          <Route path="/about">
            about
          </Route>
          <Route path="/contact">
            contact
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/" exact>
            Home
          </Route>

        </Switch>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </Router >
  );
}

export default App;
