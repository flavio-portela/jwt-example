import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions'
import { bindActionCreators } from 'redux';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '' 
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let { email, password } = this.state;
        this.props.loginUser({
            email,
            password
        });
    }

    handleInputChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return(
            <div className='row justify-content-md-center'>
                <h3>{this.props.jwt}</h3>
                <div className='col-md-5'>
                    <form onSubmit={this.handleSubmit} id="frm-login">
                        <div className='form-group'>
                            <label htmlFor='username'>Email</label>
                            <input type='text' id='username' className='form-control' 
                                name='email'
                                onChange={this.handleInputChange}
                                value={this.state.email} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' className='form-control' 
                                name='password'
                                onChange={this.handleInputChange}
                                value={this.state.password}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary form-control">Submit</button>
                        </div>
                    </form>
                    { }
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    loginUser,
}, dispatch);

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);