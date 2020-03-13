import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import ProjectSection from './ProjectSection';
//import './ProjectPage.css';

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

   componentDidMount() {
      this.props.dispatch({ type: 'GET_PORTFOLIO' })
      //this.props.dispatch({type: 'GET_PROJECT_TAGS', payload: 1})
      //this.getPortfolio();
   }

   // getPortfolio = () => {
   //    this.props.dispatch({type: 'GET_PORTFOLIO'})
   // }

   getProjectTags = (id) => {
      return (event) => {
         this.props.dispatch({ type: 'GET_PROJECT_TAGS', payload: id })

      }
   }

   toAdminPage = () => {
      this.props.history.push('/admin');
   }

   render() {

      const { classes } = this.props
      //const { expanded } = this.state;

      return (
         <section className="container">
				<div className="parallax-stpaul">
					<div className="float-left">
						<img className="myPic" src="images/malik_glass2.png" alt="Picture of Malik Glass" />
					</div>
					<h1 className="">
						<span className="colorOrange">The </span>
						<span className="colorSeaGreen"> Port</span>
						<span className="colorLightBlue">f<span onClick={this.toAdminPage}>o</span></span>
						<span className="colorTomato">lio</span>
					</h1>
					<div>
						<a href="https://github.com/Malik-G">Link to my GITHUB</a>
					</div>
				</div>

					<div className="parallax-reciperiot"></div>


					<div className="infoContainer">
						<h2 className="colorOrange">Description</h2>

						<p></p>
					</div>
					<div className="infoContainer">
						<h2 className="colorSeaGreen">See Online</h2>
						<a href=""><Button variant="contained" color="primary">CODE ON GITHUB</Button></a>
						<a href=""><Button variant="contained" color="default">WEBSITE</Button></a>
					</div>
					<div className="infoContainer">
						<h2 className="colorTomato">Technologies</h2>
						{this.props.reduxState.tags.map(tag =>
							<span>*{tag.name} </span>
						)}
					</div>
					<div className="parallax-rgb"></div>
					{/* <img className="screenshot"  src="./images/rgb_game.png" alt="To-Do List screenshot" /> */}

					<div className="infoContainer">
						<h2 className="colorOrange">Description</h2>

						<p></p>
					</div>
					<div className="infoContainer">
						<h2 className="colorSeaGreen">See Online</h2>
						<a href=""><Button variant="contained" color="primary">CODE ON GITHUB</Button></a>
						<a href=""><Button variant="contained" color="default">WEBSITE</Button></a>
					</div>
					<div className="infoContainer">
						<h2 className="colorTomato">Technologies</h2>
						{this.props.reduxState.tags.map(tag =>
							<span>*{tag.name} </span>
						)}
					</div>

					<div className="parallax-todo"></div>

					<div className="infoContainer">
						<h2 className="colorOrange">Description</h2>

						<p>"".description}</p>
					</div>
					<div className="infoContainer">
						<h2 className="colorSeaGreen">See Online</h2>
						<a href=""><Button variant="contained" color="primary">CODE ON GITHUB</Button></a>
						<a href=""><Button variant="contained" color="default">WEBSITE</Button></a>
					</div>
					<div className="infoContainer">
						<h2 className="colorTomato">Technologies</h2>
						{this.props.reduxState.tags.map(tag =>
							<span>*{tag.name} </span>
						)}
					</div>

					<div className="parallax-book"></div>

            )}
         </section>
      )
   }
}

const mapReduxStateToProps = (reduxState) => {
   return { reduxState };
}

//put inside of an object to use withStyles object
// const myPic = {
//    borderRadius: 50,
//    height: 150,
//    width: 200,
//    marginTop: 40,
//    marginLeft: 'auto',
//    marginRight: 'auto'
// }


export default connect(mapReduxStateToProps)(ProjectPage);
//export default withRouter(connect(mapReduxStateToProps)(withStyles(styling)(ProjectPage)));