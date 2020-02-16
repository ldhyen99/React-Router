import React from 'react';
import './../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import NavigationURL from '../router/NavigationURL';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <NavigationURL/>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
