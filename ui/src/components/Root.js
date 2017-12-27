import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import Login from '../containers/Login';
import Register from '../containers/Register';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div className='container'>
                <NavBar />
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </div>
        </Router>
    </Provider>
);

export default Root;