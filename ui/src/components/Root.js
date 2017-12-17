import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div className='container'>
                <NavBar />
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
            </div>
        </Router>
    </Provider>
);

export default Root;