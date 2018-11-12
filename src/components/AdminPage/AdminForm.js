import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import './AdminForm.css';

const projectInfo = {
   name: '',
   description: '',
   thumbnail: '',
   website: '',
   github: '',
   date_completed: '',
   tag_id: 0
}


class AdminForm extends Component {
   
   state = projectInfo

   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value,
      });
   }

   handleSubmit = event => {
      event.preventDefault();
      console.log(this.state);
      this.props.dispatch({ type: 'POST_PROJECT', payload: this.state});
      this.props.history.push('/');
      //this.setState(projectInfo);
   }
   
   render(){
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
                  /><br></br>
                  <Button type="submit" variant="contained" color="primary">Add Project</Button>
               </FormControl>
            </FormGroup>
            </form>
         </section>
      )
   }

}

export default withRouter(connect()(AdminForm));