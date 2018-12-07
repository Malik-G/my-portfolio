import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
//import Checkbox from '@material-ui/core/Checkbox';
import './AdminForm.css';

const styling = theme => ({
   inlineBlock:{
      float: 'left',
   }
})

const projectInfo = {
   name: '',
   description: '',
   thumbnail: '',
   website: '',
   github: '',
   date_completed: '',
   // tag_id: 0,
   // javascript: false,
   // jquery: false,
   // react: false,
   // redux: false,
   // express: false,
   // material_ui: false,
   // bootstrap: false,
   // sql: false,
}


class AdminForm extends Component {
   
   state = projectInfo

   handleChange = name => event => {
      this.setState({ [name]: event.target.checked });
    };

   handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
      let part1 = {
         name: this.state.name,
         description: this.state.description,
         thumbnail: this.state.thumbnail,
         website: this.state.website,
         github: this.state.github,
         date_completed: this.state.date_completed,
      }
      // let part2 = {
      //    javascript: this.state.javascript,
      //    jquery: this.state.jquery,
      //    react: this.state.react,
      //    redux: this.state.redux,
      //    express: this.state.express,
      //    material_ui: this.state.material_ui,
      //    bootstrap: this.state.bootstrap,
      //    sql: this.state.sql,
      // }
      this.props.dispatch({ type: 'POST_PROJECT', payload: part1});
      //this.props.dispatch({type: 'POST_TAGS', payload: part2})
      this.props.history.push('/');
      //this.setState(projectInfo);
   }
   
   render(){
      
      const {classes} = this.props
      const { javascript,jquery,react ,redux,express,material_ui ,bootstrap,sql, } = this.state

      return(
         <section>
            <form onSubmit={this.handleSubmit} className="adminForm">
            <FormGroup>
               <FormControl >
                  <TextField
                     id="outlined-name"
                     label="Name"
                     name="name"
                     //className="projectInput"
                     value={this.state.name}
                     onChange={this.handleChange}
                     margin="normal"
                     variant="outlined"
                     required
                  />
                  <TextField
                     id="outlined-completed"
                     // label="Date Completed"
                     type="date"
                     name="date_completed"
                     // className="projectInput"
                     value={this.state.date_completed}
                     onChange={this.handleChange}
                     margin="normal"
                     variant="outlined"
                     required
                  />
                  <TextField
                     id="outlined-tag"
                     label="Tags"
                     name="tag_id"
                     // className="projectInput"
                     value={this.state.tag_id}
                     onChange={this.handleChange}
                     margin="normal"
                     variant="outlined"
                     required
                  />
                  <TextField
                     id="outlined-website"
                     label="Website URL"
                     name="website"
                     //className="projectInput"
                     value={this.state.website}
                     onChange={this.handleChange}
                     margin="normal"
                     variant="outlined"
                     required
                  />
                  <TextField
                     id="outlined-name"
                     label="Github URL"
                     name="github"
                     //className="projectInput"
                     value={this.state.github}
                     onChange={this.handleChange}
                     margin="normal"
                     variant="outlined"
                     required
                  />
                  <TextField
                     id="outlined-thumbnail"
                     label="Thumbnail URL"
                     name="thumbnail"
                     // className="projectInput"
                     value={this.state.thumbnail}
                     onChange={this.handleChange}
                     margin="normal"
                     variant="outlined"
                     required
                  />
                  <TextField
                     id="outlined-description"
                     label="Description"
                     name="description"
                     //className="projectInput"
                     value={this.state.description}
                     onChange={this.handleChange}
                     margin="normal"
                     variant="outlined"
                     multiline
                     required
                  />
                
                  <br></br>
                  <Button type="submit" variant="contained" color="primary">Add Project</Button>
               </FormControl>
            </FormGroup>
            </form>
         </section>
      )
   }

}

export default withRouter(connect()(withStyles(styling)(AdminForm)));