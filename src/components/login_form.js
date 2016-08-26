import React, { Component} from 'react';

class LoginForm extends Component {
	constructor(props){
		super(props);
		this.state = { username: 'test', password:'test'};
		//this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}
   
	render(){
		return (
			<form className ="LoginForm" onSubmit={this.handleSubmit}>
				<input 
					value={this.state.username}
					onChange={event => this.setState({ username: event.target.value})}/>
				<input 
					value={this.state.password}
					onChange={event => this.setState({ password: event.target.value})}/>
				
				<input type="submit" value="LogIn"/>
			</form>
			);
	}
	 handleSubmit(e){
	 	e.preventDefault();
    	var username = this.state.username.trim();
    	var password = this.state.password.trim();
    	console.log("username : " +username);
    	//this.props.onLogInInfoChange(username, password);
    }


}


export default LoginForm;