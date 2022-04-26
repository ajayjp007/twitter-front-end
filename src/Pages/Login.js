import "./Login.css"
import {useState} from "react"
import { Redirect } from "react-router-dom"



const Login = () => {

    const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredPassword, setEnteredPassword] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [signUp, setSignUp] = useState(false)
    const enteredEmailIsValid = enteredEmail.includes('@')
    const enteredPasswordIsValid = enteredPassword.trim().length > 7
    let formIsValid = false
    

    if (enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true
    }

    const emailInputHandler = (event) => {
        setEnteredEmail(event.target.value)
    }

    const passwordInputHandler = (event) => {
        setEnteredPassword(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        setFormSubmitted(true)
        setEnteredEmail("")
        setEnteredPassword("")
    }

    const signUpHandler = () => {
        setSignUp(true)
    }

    return (
        <div className="container">
            {formSubmitted && <Redirect to="/twitter-welcome"></Redirect>}
            {signUp && <Redirect to="/twitter-signUp"></Redirect>}
            <div className="item1">
                <img id="twitter-wall" src="https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
            </div>
            <div className="item2">
                <img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzw1Tx6VFygnSYwxUqpnCCMyOfjWTQR9eUGQ&usqp=CAU" />
                <h1>#What's Happening?</h1>
                <form className="form" onSubmit={formSubmitHandler}>
                    <label className="label">Email Id or Username</label>
                    <input className="input-box1" id="input1" placeholder="johndoe@gmail.com" value={enteredEmail} onChange={emailInputHandler}></input>
                    <label className="label" >Password</label>
                    <input type="password" className="input-box2" id="input2" onChange={passwordInputHandler} value={enteredPassword}></input>
                    <button disabled={!formIsValid} className="btn" type="submit">Sign In</button>
                    <br></br>
                    <p className="sign-up">Dont have an account?</p>
                    <button className="btn" type="submit" onClick={signUpHandler}>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Login