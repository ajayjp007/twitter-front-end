import "./SignUp.css"
import { useState } from "react"
import { Redirect } from "react-router-dom"



const SignUp = () => {

    //right now ive set it up for the button to redirect
    //set this up for the form 
    const [confirm, setConfirm] = useState(false)


    const confirmHandler = () => {
        setConfirm(true)
    }


    return (
        <div className="sign-up-body">
            {confirm && <Redirect to="/twitter-welcome" />}

            <div className="sign-up-container">
            <h2 className="signup-heading">Sign Up</h2>
                <form className="sign-up-form">
                    <input className="input-signup" type="email" placeholder="Email"></input>
                    <input className="input-signup" type="text" placeholder="Username" />
                    <input className="input-signup input-password" type="password" placeholder="Password" />
                    <input className="input-signup input-password" type="password" placeholder="Confirm Password" />
                    <input className="input-signup" type="date"></input>
                    <button className="btn" onClick={confirmHandler}>submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp