import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';


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
			this.props.dispatch({ type: 'GET_PROJECT_TAGS', payload: id })
		}
	}

	toAdminPage = () => {
		this.props.history.push('/admin');
	}

	render() {

			// src = { this.props.theProject.thumbnail }
			// <section className="project-section">
		return (

			
				<section >

				<div className="parallax-reciperiot"></div>

				<p className="projectName"> {this.props.theProject.name}</p>

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
				<div className="parallax-rgb"></div>
				{/* <img className="screenshot"  src="./images/rgb_game.png" alt="To-Do List screenshot" /> */}
				<p className="projectName"> {this.props.theProject.name}</p>

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
				
				<div className="parallax-todo"></div>

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

				<div className="parallax-book"></div>

			</section>
			
		)
	}

}

const mapReduxStateToProps = (reduxState) => {
	return { reduxState };
}


export default connect(mapReduxStateToProps)(ProjectSection);