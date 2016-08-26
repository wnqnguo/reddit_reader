import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import LoginForm from './components/login_form';
import Landing from './components/landing'
import FrontPage from './components/frontpage'
import SubReddit from './components/sub_reddits'
import reducers from './reducers';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchNewLogInfo("","");

  }
  fetchNewLogInfo(username,password){
  	console.log("log in changed username : "+ username)
  }
  render() {

    return (
    	<div>
    		<h2>Reddit Reader</h2>
    		<LoginForm onLogInInfoChange ={this.fetchNewLogInfo}/>
    		<Router>
    			<IndexRoute component={Landing} />
    			<Route path='/frontpage' component={FrontPage} />
    			<Route path='/sub_reddits' component={SubReddit} />
    		</Router>
    	</div>
      
     
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
