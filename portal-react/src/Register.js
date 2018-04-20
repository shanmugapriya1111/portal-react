import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


class Register extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			username :'',
			firstname :'',
			lastname :'',
			email:'',
			password:'',

		}
	}

	handleClick(){
		var payload ={
			'username' : this.state.username,
			'firstname' : this.state.firstname,
			'lastname' : this.state.lastname,
			'email' : this.state.email,
			'password' : this.state.password
		}
		console.log("^^^^^",payload);
		axios.post("http://127.0.0.1:8000/register/",payload).then((res)=>{
			console.log(res);
			this.props.history.push('/');
		});
	}

	render(){
		return(
			<div>
		        <MuiThemeProvider>
		          	<div>
			          	<div>
				          	<AppBar showMenuIconButton={false}
				             title="Register"/>
			             </div>
			             <div className="padding-left">
			             	<TextField
				            floatingLabelText="User Name"  onChange = {(event,newValue) => this.setState({username:newValue})}/>
				            <br/>
				            <TextField
				            floatingLabelText="First Name"  onChange = {(event,newValue) => this.setState({firstname:newValue})}/>
				            <br/>
				            <TextField
				            floatingLabelText="Last Name"  onChange = {(event,newValue) => this.setState({lastname:newValue})}/>
				            <br/>
				            <TextField
				            type="email"
				            floatingLabelText="Enter your email"  onChange = {(event,newValue) => this.setState({email:newValue})}/>
				            <br/>
				            <TextField
				            type = "password"
				            floatingLabelText="Password"  onChange = {(event,newValue) => this.setState({password:newValue})}/>
				            <br/>
				            <RaisedButton label="Register" primary={true} style={style} 
				             onClick={(event) => this.handleClick()}/>
				            <a href="/"><RaisedButton label="Cancel" primary={true} style={style} /></a>
			              </div>
		               </div>
	         	</MuiThemeProvider>
	      	</div>
		);
		
	}

}

const style = {
  margin: 15,
}; 

export default Register;

