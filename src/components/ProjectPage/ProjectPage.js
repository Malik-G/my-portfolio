import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import ProjectSection from './ProjectSection';
// import whatevs from '../images/malikg.png';
import './ProjectPage.css';

gsap.registerPlugin(ScrollTrigger);

class ProjectPage extends Component {

  state = {
    expanded: null,
    flipped: false,
    bioContainer: null,
    portfolioContainer: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: panel
    });
  };

  componentDidMount() {
    this.props.dispatch({ type: 'GET_PORTFOLIO' })
    const t1 = gsap.timeline()
    
    gsap.to(this.state.bioContainer, {
      background: 'rgb(45, 45, 45)',
      // duration: 5,
      scrollTrigger: {
        trigger: ".bio-container", //this.state.bioContainer,
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true
      }
    })
    
    gsap.to(this.state.portfolioContainer, {
      background: 'rgb(45, 45, 45)',
      // duration: 5,
      scrollTrigger: {
        trigger: ".bio-container", //this.state.bioContainer,
        start: "top top",
        end:"bottom top",
        scrub: true,
        markers: true
      }
    })
    
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
      this.setState({ flipped: false })
    }
    else {
      document.getElementById("flip-note-inner").style.transform = "rotateY(180deg)"
      this.setState({ flipped: true })
    }
    console.log(event.target)
  }

  toAdminPage = () => {
    this.props.history.push('/admin');
  }

  render() {

    const { classes } = this.props

    return (
      <section id="">

        <div className="parallax-stpaul-main">
          <img className="myPic" src="images/malikg.png" alt="Picture of Malik Glass" />
          <h1 id="name-header">Malik Glass</h1>
        </div>

        <div className="parallax-stpaul-trans"></div>

        <div className="bio-container" ref={div => this.state.bioContainer = div}>
          <h1 id="bio-header">Bio</h1>
          <div id="flip-note" onClick={this.flip}>
            <div id="flip-note-inner">
              <div id="flip-note-front">
                <p id="greeting">Dear visitor,</p>
                <p>Welcome! My name is Malik.</p>
                <p>I am a software developer from Saint Paul, Minnesota.</p>
                <p>Well...I won't force you to read my bio.</p>
                <p> Click this message if you care to know more.</p>
              </div>
              <div id="flip-note-back">
                <p className="note-back-header">Education</p>
                <ul>
                  <li>
                    <p className="note-back-body">Prime Digital Academy</p>
                  </li>
                  <li>
                    <p className="note-back-body">Augustana University: B.A. Philosophy</p>
                  </li>
                </ul>
                <p className="note-back-header">Work Experience</p>
                <ul>
                  <li>
                    <p className="note-back-body">Central Minnesota Educational Research & Development Council (current)</p>
                  </li>
                  <li>
                    <p className="note-back-body">Lutheran Social Services</p>
                  </li>
                  <li>
                    <p className="note-back-body">Cold Creator</p>
                  </li>
                  <li>
                    <p className="note-back-body">Conscious Youth Solutions</p>
                  </li>
                </ul>
                <p className="note-back-header">Interests</p>
                <ul>
                  <li>
                    <p className="note-back-body">History</p>
                  </li>
                  <li>
                    <p className="note-back-body">Economics</p>
                  </li>
                  <li>
                    <p className="note-back-body">Global affairs</p>
                  </li>
                  <li>
                    <p className="note-back-body">Writing</p>
                  </li>
                  <li>
                    <p className="note-back-body">Sports</p>
                  </li>
                  <li>
                    <p className="note-back-body">Anime/Manga</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="portfolio" ref={div => this.state.portfolioContainer = div}>
          <h1 id="portfolio-header">Portfolio</h1>
          {/* <h1 className="big-font">
            <span className="colorSeaGreen"> Po</span>
            <span className="colorOrange">rt</span>
            <span className="colorLightBlue">fo</span>
            <span className="colorTomato">lio</span>
          </h1> */}
          <div id="social-links">
            <div>
              <a id="github-link" className="social-link" href="https://github.com/Malik-G" rel="noopener noreferrer" target="_blank"><img src="images/github-logo-medium.png" />
              </a>
              <h3>GitHub</h3>
            </div>
            <div>
              <a id="linkedin-link" className="social-link" href="https://www.linkedin.com/in/malik-glass-9b7533104/" rel="noopener noreferrer" target="_blank"><img src="images/linkedin-logo3.png" />
              </a>
              <h3>LinkedIn</h3>
            </div>
            
          </div>
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