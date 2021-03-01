import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.components';
import './sign-in.styles.scss'


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password:''
        }
    }    

    handleSubmit = (event) =>{
        event.preventDefault();

        this.setState(
            {
            email: '',
            password:''
    })
    }
    handleChange= (event)=>{
        const {value, name} = event.target;

        this.setState({[name]:value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I Already Have an Account</h2>
                <span>Sign In With Your Email and Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='email' value={this.state.email} handleChange={this.handleChange}  required />
                    {/* <label>Email</label> */}
                    <FormInput name='password' type='password' label='password' value={this.state.password} handleChange={this.handleChange} required />
                    {/* <label>Password</label> */}

                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;