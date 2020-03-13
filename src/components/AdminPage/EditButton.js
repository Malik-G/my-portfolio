import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styling = theme => ({
   sizeImg: {
      height: 280,
      width: 200
   },
   inlineBlock:{
      float: 'left',
   },
   customBtn: {
      height: 10,
      width: 80,
      fontWeight: 'bold',
      fontSize: 10,
      color: 'white'
   },
   backgroundGray: {
      background: 'dimgray'
   },
})

const projectTags = {
   javascript: null,
   node: null,
   jquery: null,
   react: null,
   redux: null,
   express: null,
   material_ui: null,
   bootstrap: null,
   sql: null,
   firebase: null,
   open: false,
}

class EditButton extends Component {

   state = projectTags;
  
   handleOpenClick = () => {
      this.setState({ 
         open: true,
      });
   };
  
   handleCloseClick = () => {
      this.setState({open: false});
   };
   
   handleChange = (event) => {
      this.setState({
         [event.target.name]: event.target.value,
      });
}

   confirmUpdate = () => {
      this.props.dispatch({type:'POST_TAGS' , payload: {project_id: this.props.theProject.id, tagInfo: this.state}})
      this.setState({open: false})
   }
   
   render(){
      
      const {classes} = this.props
      console.log(this.state);
      const { javascript, node, jquery, react, redux, express, material_ui, bootstrap, sql, firebase } = this.state
      // Conditional rendering to keep the "Add Card" button disabled until the form is completed
      // let addButton = this.state.addReady === false ?
      // <Button variant="contained"  className={classes.customBtn} disabled>Confirm</Button>
      // : <Button onClick={this.updateCard} variant="contained"  className={`${classes.customBtn} ${classes.backgroundGreen}`}>Confirm</Button>
      
      return(
         <section>
            <div className={classes.alignCenter}>
               <Button onClick={this.handleOpenClick} className={ `${classes.customBtn} ${classes.backgroundGray}`} variant="contained">
                  <EditIcon className={classes.marginRight}/> Edit
               </Button>
            </div>
            <Dialog
               open={this.state.open}
               onClose={this.handleCloseClick}
               aria-labelledby="dialog-title"
            >
               <DialogTitle id="dialog-title">Technologies</DialogTitle>
               <DialogContent>
                  <DialogContentText>Which technologies did were used on this project.</DialogContentText>
                  <form className={`${classes.styleForm} `}>
                     <FormGroup>
                        <FormControl >
                        <div className={classes.inlineBlock}>
                  
                  <FormControlLabel
                     control={<Checkbox checked={javascript} onChange={this.handleChange} value="1" />}
                     label="javascript"
                     name="javascript"
                  />
                  <FormControlLabel
                     control={<Checkbox checked={node} onChange={this.handleChange} value="2" />}
                     label="node"
                     name="node"
                  />
                  <FormControlLabel
                     control={<Checkbox checked={jquery} onChange={this.handleChange} value="3"/>}
                     label="jquery"
                     name="jquery"
                  />
                  <FormControlLabel
                     control={<Checkbox checked={react} onChange={this.handleChange} value="4" />}
                     label="react"
                     name="react"
                  />
                  <FormControlLabel
                     control={<Checkbox checked={redux} onChange={this.handleChange} value="5" />}
                     label="redux"
                     name="redux"
                  />
                  <FormControlLabel
                     control={<Checkbox checked={express} onChange={this.handleChange} value="6"/>}
                     label="express"
                     name="express"
                  />
                  <FormControlLabel
                     control={<Checkbox checked={material_ui} onChange={this.handleChange} value="7" />}
                     label="material_ui"
                     name="material_ui"
                  />
                  <FormControlLabel
                     control={<Checkbox checked={bootstrap} onChange={this.handleChange} value="8" />}
                     label="bootstrap"
                     name="bootstrap"
                  />
                  <FormControlLabel
                     control={<Checkbox checked={sql} onChange={this.handleChange} value="9" />}
                     label="sql"
                     name="sql"
                  />
                  <FormControlLabel
                     control={<Checkbox checked={firebase} onChange={this.handleChange} value="10" />}
                     label="firebase"
                     name="firebase"
                  />
                  </div>
                        </FormControl>
                     </FormGroup>
                  </form>
               </DialogContent>
               <DialogActions>
               <Button onClick={this.confirmUpdate} variant="contained"  className={`${classes.customBtn} ${classes.backgroundGreen}`}>Confirm</Button>
                  <Button onClick={this.handleCloseClick} className={`${classes.customBtn} ${classes.backgroundGray}`} >Cancel</Button>
               </DialogActions>
            </Dialog>
         </section>
      );
   }
}

/* {this.props.portfolioReducer.map( (card) => (
               <div>
                  <img src={card.image_url}/>
               </div>
            ))} */

const mapStateToProps = state => ({
   portfolioReducer: state.portfolioReducer,
   userReducer: state.userReducer,
   //communityReducer: state.communityReducer
});

export default connect(mapStateToProps)(withStyles(styling)(EditButton));