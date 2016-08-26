import React, { Component} from 'react';

class SubReddits extends Component {
	constructor(props){
		super(props);
		this.state = { username: 'test', password:'test'};
		//this.onChange = this.onChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}
   
	render(){
		return (
			<div>This is the SubReddits</div>
			);
	}

}


export default SubReddits;