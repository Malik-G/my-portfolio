import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
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

   toAdminPage = () => {
      this.props.history.push('/admin');
   }

   render(){
      
      const { expanded } = this.state;
      
      return(
         <section className="container">
            <Button variant="outlined" color="secondary" onClick={this.toAdminPage}>Admin</Button>
            <h1 className="header">
               <span className="headerThe">The </span> 
               <span className="headerPort"> Port</span>
               <span className="headerFo">fo</span>
               <span className="headerLio">lio</span>
            </h1>
            {this.props.reduxState.portfolio.map( project => 
            <ExpansionPanel className="expansionPanel" expanded={expanded === project.id} onChange={this.handleChange(project.id)}>
               <ExpansionPanelSummary className="panelSummary" expandIcon={<ExpandMoreIcon />}>
                  <img className="screenshot" src={project.thumbnail} alt="To-Do List screenshot"/>
                  <p className="projectName"> {project.name}</p>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails className="panelDetails">
                  <div className="infoContainer">
                     <h3 >Description</h3>
                     
                     <p>{project.description}</p>
                  </div>
                  <div className="infoContainer">
                     <h3>See Online</h3>
                     <a href={project.github}><Button variant="contained" color="primary">CODE ON GITHUB</Button></a>
                     <a href={project.website}><Button variant="contained" color="default">WEBSITE</Button></a>
                  </div>
                  <div className="infoContainer">   
                     <h3 >Technologies</h3>
                     <p>{project.tag}</p>
                  </div>
               </ExpansionPanelDetails>
            </ExpansionPanel>
            )}
         </section>
      )
   }

}

const mapReduxStateToProps = (reduxState) => {
   return {reduxState};
}

export default withRouter(connect(mapReduxStateToProps)(ProjectPage));