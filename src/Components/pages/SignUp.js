import React from 'react'
import '../../App.css'
import FirebaseHelper from '../../lib/FirebaseHelper'
import '../Button.css'


export default function SignUp() {


    function signUp() {
        FirebaseHelper.signUp()
    }

    const user = FirebaseHelper.getUser()
    console.log('user', user)

    
    return (
        <div className="sign-up-page">
            <h1 className='sign-up'>Sign Up</h1>
            <button className="sign-up-button" onClick={signUp}>Sign Up</button>
        </div>
    )
}