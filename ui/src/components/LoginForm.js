import React from 'react';
import PropTypes from 'prop-types';

const LoginForm  = ({handleInputChange, handleSubmit, values, auth}) => {
    let ErrorMessage = ({message}) => (
        <div className="col-md-12">
            <div className="alert alert-danger" role="alert">
                { message }
            </div>
        </div>
    );
    return(
        <div className='row justify-content-md-center'>
            { auth.error && <ErrorMessage message={auth.error}/>}
            <div className='col-md-5'>
                <form onSubmit={handleSubmit}>
                    <div className  ='form-group'>
                        <label htmlFor='username'>Email</label>
                        <input type='text' id='username' className='form-control' 
                            name='email'
                            onChange={handleInputChange}
                            value={values.email} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' className='form-control' 
                            name='password'
                            onChange={handleInputChange}
                            value={values.password}/>
                    </div>
                    <div className="form-group">
                        <button 
                            type="submit" 
                            className="btn btn-primary form-control" 
                            disabled={auth.isFetching}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

LoginForm.propTypes = {
    values: PropTypes.object.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default LoginForm;