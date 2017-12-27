import React from 'react';

class Register extends React.Component {
    render(){
        return(
            <div className='row justify-content-md-center'>
                <div className='col-md-5'>
                    <form id="frm-register">
                        <div className  ='form-group'>
                            <label htmlFor='username'>Email</label>
                            <input type='text' id='username' className='form-control' 
                                name='email'/>
                        </div>
                        <div className  ='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' className='form-control' 
                                name='password'/>
                        </div>
                        <div className  ='form-group'>
                            <label htmlFor='password-confirm'>Confirm your password</label>
                            <input type='password' id='password-confirm' className='form-control' 
                                name='password-confirm'/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;