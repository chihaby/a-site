import React from 'react';
import './App.css';
// import { Button } from 'reactstrap';
import Jumbo from './components/Jumbotron';
import Navbar from './components/Navbar';
import Topic  from './components/Topic';
function App() {
  return (
    <div>
      <Jumbo />
      <Navbar />
      <Topic />
    </div>
  );
}

export default App;
