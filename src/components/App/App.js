import React, { Component } from 'react';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectPage from '../AdminPage/AdminPage';
import './App.css';

class App extends Component {
  
   // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <ProjectPage/>
        <AdminPage/>
      </div>
    );
  }
}

export default App;
