import "./WhatsHappening.css"
import {useState} from "react"

const WhatsHappening = () => {

    const [usrTweeted, setUsrTweeted] = useState(false)

    const submitFormHandler = () => {
        //add new tweets to the dummy tweets array must create a store for that
        setUsrTweeted(true)
    }
    return(
        <form onSubmit={submitFormHandler}>
            <div className="profile-container">
            <img className="profile-picture" src="https://www.pngfind.com/pngs/m/217-2172797_image-uchiha-clan-logo-uchiha-clan-symbol-hd.png"/>
        <input className="add-tweet" placeholder="What's Happening?"></input>
            </div>
            {usrTweeted && <p className="postingTweet">Posting...</p>}
        <button className="submit-tweet" type="submit">Tweet</button>
    </form>
    )
    
}
export default WhatsHappening