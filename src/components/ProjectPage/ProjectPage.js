import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
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

   render(){
      
      const { expanded } = this.state;
      
      return(
         <section className="container">
            <h1>Project Page</h1>
            {this.props.reduxState.portfolio.map( project => 
            
            <ExpansionPanel className="expansionPanel" expanded={expanded === project.id} onChange={this.handleChange(project.id)}>
               <ExpansionPanelSummary className="panel" expandIcon={<ExpandMoreIcon />}>
                  <img className="screenshot" src={project.thumbnail} alt="To-Do List screenshot"/>
                  <p className="projectName"> {project.name} </p>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails className="toBlack">
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
                     <p>"jQuery" </p>
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

export default connect(mapReduxStateToProps)(ProjectPage);