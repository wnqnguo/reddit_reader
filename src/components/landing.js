import React, { Component} from 'react';
import {Link }from 'react-router';
import LoginForm from './login_form';
class Landing extends Component {
	constructor(props){
		super(props);
		this.state = { username: 'test', password:'test'};
          this.fetchNewLogInfo("","");
		//this.onChange = this.onChange.bind(this);
	
		
	}
	fetchNewLogInfo(username,password){
  		console.log("log in changed username : "+ username)
 	 }
	render(){
		return (
			<div>
    	            <h2>Reddit Reader</h2>
    			    <LoginForm onLogInInfoChange ={this.fetchNewLogInfo} />
    				{this.props.children}
    				<Link to = "frontpage">Frontpage</Link>
    				<Link to = "sub_reddits">SubReddites</Link>
    			
    			</div>
			);
	}
	  

}

export default Landing;