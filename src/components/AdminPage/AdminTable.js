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
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


class AdminTable extends Component {

  componentDidMount(){
     this.props.dispatch({type:'GET_PORTFOLIO'})
  }

  deleteProject = (id) => {
      return (event) => {
         this.props.dispatch({type: 'DELETE_PROJECT', payload: id});
      }
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
                      <TableCell>Date Completed</TableCell>
                      <TableCell>Delete</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody className="resultsTableBody">
                {this.props.reduxState.portfolio.map( project =>
                  <TableRow key={project.id}>
                      <TableCell>{project.name}</TableCell>
                      <TableCell>{project.website}</TableCell>
                      <TableCell>{project.github}</TableCell>
                      <TableCell>{project.date_completed.substring(0,10)}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="secondary" onClick={this.deleteProject(project.id)}>Delete<DeleteIcon></DeleteIcon></Button>
                      </TableCell>
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