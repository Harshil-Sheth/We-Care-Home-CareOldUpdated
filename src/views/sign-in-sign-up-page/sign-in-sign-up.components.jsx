import React from 'react'
import Navbar from '../../components/navabar/navbar.components'
import Footer from '../../components/footer/footer.components'
import './sign-in-sign-up.styles.scss'
import SignIn from '../../components/sign-in/sign-in.components'



const SignInAndSignUpPage = () => {
    return (
        <div>
        <Navbar />
        <div className='sign-in-sign-up'>
        <SignIn />            
        </div>
    <Footer />
    </div>
    )
}

export default SignInAndSignUpPage
