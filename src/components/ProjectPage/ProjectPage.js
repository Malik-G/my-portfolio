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
// import whatevs from '../images/malikg.png';
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
    flipped: false
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

  flip = (event) => {
    if (this.state.flipped) {
      document.getElementById("flip-note-inner").style.transform = "rotateY(360deg)"
      this.setState({flipped: false})
    }
    else {
      document.getElementById("flip-note-inner").style.transform = "rotateY(180deg)"
      this.setState({ flipped: true })
    }
    console.log(event.target)
    // console.log(document.getElementById("flip-note-inner"))
  }

  toAdminPage = () => {
    this.props.history.push('/admin');
  }

  render() {

    const { classes } = this.props
    //const { expanded } = this.state;

    return (
      <section id="">

        <div className="parallax-stpaul-main">
          <img className="myPic" src="images/malikg.png" alt="Picture of Malik Glass" />
          <h1>Malik Glass</h1>
        </div>

        <div className="parallax-stpaul-trans"></div>

        <div className="bio-container">
          <h1 className="big-font">
            <span className="colorOrange">B</span>
            <span className="colorSeaGreen">i</span>
            <span className="colorTomato">o</span>
          </h1>
          <div id="flip-note" onClick={this.flip}>
            <div id="flip-note-inner">
              <div id="flip-note-front">
                <p id="greeting">Dear visitor,</p>
                <p>My name is Malik Glass</p>
              </div>
              <div id="flip-note-back">
                <p>This is the back</p>
              </div>
            </div>
          </div>
          {/* <a href="https://github.com/Malik-G" target="_blank"><img src="images/github-10-xxl.png" className="github-logo" /></a> */}

        </div>
        <div className="portfolio">
          <h1 className="big-font">
            <span className="colorOrange">The </span>
            <span className="colorSeaGreen"> Port</span>
            <span className="colorLightBlue">fo</span>
            <span className="colorTomato">lio</span>
          </h1>
        </div>

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

{/* <div className="parallax-reciperiot"></div>


  <div className="infoContainer">
    <h2 className="colorOrange">Description</h2>
  </div>
  <div className="infoContainer">
    <h2 className="colorSeaGreen">See Online</h2>
    <a href=""><Button variant="contained" color="primary">CODE ON GITHUB</Button></a>
    <a href=""><Button variant="contained" color="default">WEBSITE</Button></a>
  </div>
  <div className="infoContainer">
    <h2 className="colorTomato">Technologies</h2>
  </div>

  <div className="parallax-rgb"></div>

  <div className="infoContainer">
    <h2 className="colorOrange">Description</h2>
  </div>
  <div className="infoContainer">
    <h2 className="colorSeaGreen">See Online</h2>
    <a href=""><Button variant="contained" color="primary">CODE ON GITHUB</Button></a>
    <a href=""><Button variant="contained" color="default">WEBSITE</Button></a>
  </div>
  <div className="infoContainer">
    <h2 className="colorTomato">Technologies</h2>
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
  </div>

  <div className="parallax-book"></div> */}