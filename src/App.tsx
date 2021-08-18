import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Login from './modules/login/logins';

function App() {
  return (
   <div className="App">
     <Routes />
   </div>
  );
}

export default App;
