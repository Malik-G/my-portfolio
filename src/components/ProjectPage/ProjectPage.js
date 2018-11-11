import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './ProjectPage.css';

class ProjectPage extends Component {
   
   state = {
      expanded: null,
    };
  
    handleChange = panel => (event, expanded) => {
      this.setState({
        expanded: expanded ? panel : false,
      });
    };
   
   componentDidMount(){
      this.getPortfolio();
   }
   
   getPortfolio = () => {
      this.props.dispatch({type: 'GET_PORTFOLIO'})
   }

   render(){
      
      const { expanded } = this.state;
      
      return(
         <section>
            <h1>Project Page</h1>
            <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
               <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <img className="screenshot" src="images/to_do_list.png" alt="To-Do List screenshot"/>
                  <p className="projectName"> To-Do-List </p>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                  <div>
                     <h3 >Description</h3>
                     <p>This is a fullstack to-do list that takes a new task as an input and saves the task to a database. 
                        The screen stays updated with most current list and the user has the option to: delete a task,
                        "check off" a task when completed, or "uncheck" a previously completed task.
                     </p><br></br>
                     <h3 >Tags</h3>
                     <p>"jQuery" </p>
                  </div>
               </ExpansionPanelDetails>
            </ExpansionPanel>
         </section>
      )
   }

}

export default connect()(ProjectPage);