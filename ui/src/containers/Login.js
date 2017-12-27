import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            values: {
                email: '',
                password: '' 
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let { email, password } = this.state.values;
        this.props.loginUser({
            email,
            password
        });
    }

    handleInputChange(e){
        let newValue = {
            [e.target.name]: e.target.value
        };
        let newValues = {...this.state.values, ...newValue};
        this.setState({ values: newValues });
    }

    render(){
        return(
            <LoginForm
                values={this.state.values}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                auth={this.props.auth}
             />
        );
    }
};

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
    loginUser,
}, dispatch);

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);