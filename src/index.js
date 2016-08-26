import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';

import LoginForm from './components/login_form';
import Landing from './components/landing'
import FrontPage from './components/frontpage'
import SubReddits from './components/sub_reddits'
import reducers from './reducers';

class App extends Component {
  constructor(props) {
    super(props);
  

  }
  
  render() {
	return (
    	<Router history={hashHistory}>
    		  <Route path='/' component={Landing}>
    		   <IndexRoute component={FrontPage} />
    			<Route path='frontpage' component={FrontPage} />
    			<Route path='sub_reddits' component={SubReddits} />
    		  </Route>
    		</Router>  
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
