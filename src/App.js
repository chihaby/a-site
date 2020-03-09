import React from 'react';
import './App.css';
// import { Button } from 'reactstrap';
import Jumbo from './components/Jumbotron';
import Navbar from './components/Navbar';
import Main from './components/Main';
function App() {
  return (
    <div>
      <Jumbo />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
