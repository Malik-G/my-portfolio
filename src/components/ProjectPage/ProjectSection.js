import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import './ProjectPage.css';

// const styling = theme => ({
//    classname:{
//       background: '',
//       border: ''
//    }
// })


class ProjectSection extends Component {
   
   // state = {
   //    expanded: null,
   //  };
  
   //  handleChange = panel => (event, expanded) => {
   //    this.setState({
   //      expanded: expanded ? panel : false,
   //    });
   //  };
   
   // componentDidMount(){
   //    this.getPortfolio();
   // }
   
   getProjectTags = (id) => {
      return (event) => {
         this.props.dispatch({type: 'GET_PROJECT_TAGS', payload: id})
      }   
   }

   toAdminPage = () => {
      this.props.history.push('/admin');
   }

   render(){
      
      const {classes} = this.props
      const { expanded } = this.props.state;
      
      return(
         <section style={container} className="container">
   
           
            
            <ExpansionPanel onClick={this.getProjectTags(this.props.theProject.id)} style={margin} className="expansionPanel" expanded={expanded === this.props.theProject.id} onChange={this.props.handleChange(this.props.theProject.id)}>
               <ExpansionPanelSummary style={styleBlack} className="panelSummary" expandIcon={<ExpandMoreIcon />}>
                  <img className="screenshot" src={this.props.theProject.thumbnail} alt="To-Do List screenshot"/>
                  <p className="projectName"> {this.props.theProject.name}</p>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails style={styleBlack} className="panelDetails">
                  <div className="infoContainer">
                     <h2 className="colorOrange">Description</h2>
                     
                     <p>{this.props.theProject.description}</p>
                  </div>
                  <div className="infoContainer">
                     <h2 className="colorSeaGreen">See Online</h2>
                     <a href={this.props.theProject.github}><Button variant="contained" color="primary">CODE ON GITHUB</Button></a>
                     <a href={this.props.theProject.website}><Button variant="contained" color="default">WEBSITE</Button></a>
                  </div>
                  <div className="infoContainer">   
                     <h2 className="colorTomato">Technologies</h2>
                     {this.props.reduxState.tags.map(tag => 
                        <span>*{tag.name} </span>
                     )}
                  </div>
               </ExpansionPanelDetails>
            </ExpansionPanel>
            
         </section>
      )
   }

}

const mapReduxStateToProps = (reduxState) => {
   return {reduxState};
}

//put inside of an object to use withStyles object
const myPic = {
   borderRadius: 50,
   height: 150,
   width: 200,
   marginTop: 40
}

const styleBlack = {
   background: 'rgb(15,20,20)'
}

const container = {
   minWidth: 650,
}

const justify = {
   textAlign: 'center'
}

const margin = {
   margin: 'auto',
   width: 1000
}
export default withRouter(connect(mapReduxStateToProps)(ProjectSection));