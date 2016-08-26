import React, { Component} from 'react';

class FrontPage extends Component {
	constructor(props){
		super(props);
		this.state = { username: 'test', password:'test'};
		//this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}
   
	render(){
		return (
			<div>This is the FrontPage</div>
			);
	}

}


export default FrontPage;