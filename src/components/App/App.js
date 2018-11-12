import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProjectPage from '../ProjectPage/ProjectPage';
import AdminPage from '../AdminPage/AdminPage';
import './App.css';

class App extends Component {
  
   // Renders the entire app on the DOM
  render() {
    return (
      <Router>
         <div className="App">
            <Route exact path="/" component={ProjectPage}/>
            <Route path="/admin" component={AdminPage}/>
         </div>
      </Router>
    );
  }
}

export default App;
