import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ProjectPage from './components/ProjectPage/ProjectPage';
import AdminPage from './components/AdminPage/AdminPage';
import './styles/App.css';

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
