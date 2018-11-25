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
      
      const {classes} = this.props
      const { expanded } = this.state;
      
      return(
         <section style={container} className="container">
            <Button variant="outlined" color="secondary" onClick={this.toAdminPage}>Admin</Button><br></br>
            <div >
               <img  style={myPic} src="images/malik_glass.jpg" alt="Picture of Malik Glass"/>
            </div>
            <h1 style={justify} className="header">
               <span className="colorOrange">The </span> 
               <span className="colorSeaGreen"> Port</span>
               <span className="colorLightBlue">fo</span>
               <span className="colorTomato">lio</span>
            </h1>
           
            {this.props.reduxState.portfolio.map( project => 
            <ExpansionPanel style={margin} className="expansionPanel" expanded={expanded === project.id} onChange={this.handleChange(project.id)}>
               <ExpansionPanelSummary style={styleBlack} className="panelSummary" expandIcon={<ExpandMoreIcon />}>
                  <img className="screenshot" src={project.thumbnail} alt="To-Do List screenshot"/>
                  <p className="projectName"> {project.name}</p>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails style={styleBlack} className="panelDetails">
                  <div className="infoContainer">
                     <h2 className="colorOrange">Description</h2>
                     
                     <p>{project.description}</p>
                  </div>
                  <div className="infoContainer">
                     <h2 className="colorSeaGreen">See Online</h2>
                     <a href={project.github}><Button variant="contained" color="primary">CODE ON GITHUB</Button></a>
                     <a href={project.website}><Button variant="contained" color="default">WEBSITE</Button></a>
                  </div>
                  <div className="infoContainer">   
                     <h2 className="colorTomato">Technologies</h2>
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
export default withRouter(connect(mapReduxStateToProps)(ProjectPage));
//export default withRouter(connect(mapReduxStateToProps)(withStyles(styling)(ProjectPage)));