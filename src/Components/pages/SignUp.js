import React from 'react'
import '../../App.css'
import FirebaseHelper from '../../lib/FirebaseHelper'


export default function SignUp() {


    function signUp() {
        FirebaseHelper.signUp()
    }

    const user = FirebaseHelper.getUser()
    console.log('user', user)

    
    return (
        <div>
            <h1 className='sign-up'>Sign Up</h1>
            <button onClick={signUp}>Sign Up</button>
        </div>
    )
}