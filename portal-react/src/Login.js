import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import './Login.css';



class Login extends Component {
	
	constructor(props){
		super(props);
		this.state= {
		  	username:'',
		  	password:'',
	 	 
		}
	}

	handleClick(){
		var payload = {
			'username':this.state.username,
			'password' : this.state.password
		}
		console.log("@@",payload)
		axios.post("http://127.0.0.1:8000/login/",payload).then((res)=>{
			console.log(res);
			this.props.history.push('/');
		});


	}

	render() {
		return(
			<div>
				<MuiThemeProvider>
					<div>
						<div>
							<AppBar showMenuIconButton={false}
							title="Login"
							/>
						</div>
						<div className="padding-left">
							<TextField  floatingLabelText="Username"
							onChange = {(event,newValue) => this.setState({username:newValue})}/>
							<br/>
							<TextField  type="password"  floatingLabelText="Password"
							 onChange = {(event,newValue) => this.setState({password:newValue})}/>
							<br/>
							<RaisedButton label="Login" primary={true} style={style} 
							onClick={(event) => this.handleClick()}/>
							<a href="/register"><RaisedButton label="Register" primary={true} style={style}/></a>
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

export default Login;