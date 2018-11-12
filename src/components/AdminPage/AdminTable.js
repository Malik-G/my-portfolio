import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


class AdminTable extends Component {

  componentDidMount(){
     this.props.dispatch({type:'GET_PORTFOLIO'})
  }
   
   render() {
    
    return (
      <div className="results">
        <section className="projectsTable">
          <h1>Existing Projects</h1>
          <Table >
              <TableHead className="resultsTableHead">
                  <TableRow>
                      <TableCell>Project Name</TableCell>
                      <TableCell>Website URL</TableCell>
                      <TableCell>Github URL</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody className="resultsTableBody">
                {this.props.reduxState.portfolio.map( project =>
                  <TableRow >
                      <TableCell>{project.name}</TableCell>
                      <TableCell>{project.website}</TableCell>
                      <TableCell>{project.github}</TableCell>
                  </TableRow>
                )}
              </TableBody>
          </Table>
        </section>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {reduxState};
}

export default withRouter(connect(mapReduxStateToProps)(AdminTable));