import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import LoginForm from './components/login_form';
import reducers from './reducers';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
    	<div>
    		<LoginForm />
    	</div>
      
     
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
