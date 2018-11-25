import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminForm from './AdminForm';
import AdminTable from './AdminTable';
import Button from '@material-ui/core/Button';
// import Button from '@material-ui/core/Button';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
// import TextField from '@material-ui/core/TextField';
import './AdminPage.css';

const projectInfo = {
   name: '',
   description: '',
   thumbnail: '',
   website: '',
   github: '',
   date_completed: '',
   tag_id: 0
}


class AdminPage extends Component {
   
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
      this.setState(projectInfo);
      this.props.history.push('/');
   }

   toHomePage = () => {
      this.props.history.push('/');
   }
   
   render(){
      return(
         <section style={style} className="adminContainer">
            <Button  className="homeBtn" variant="outlined" color="primary" onClick={this.toHomePage} >Home </Button><br></br>
            <h1>Admin Page</h1>
            <AdminForm/>
            <AdminTable/>
         </section>
      )
   }

}

const style = {
   background: 'white',
}

export default connect()(AdminPage);