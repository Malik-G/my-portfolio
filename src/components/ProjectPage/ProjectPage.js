import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import ProjectSection from './ProjectSection';
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
        expanded: panel
      });
    };
   
   componentDidMount(){
      this.props.dispatch({type: 'GET_PORTFOLIO'})
      //this.props.dispatch({type: 'GET_PROJECT_TAGS', payload: 1})
      //this.getPortfolio();
   }
   
   // getPortfolio = () => {
   //    this.props.dispatch({type: 'GET_PORTFOLIO'})
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
      //const { expanded } = this.state;
      
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
               <ProjectSection theProject={project} handleChange={this.handleChange} state={this.state}/>
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