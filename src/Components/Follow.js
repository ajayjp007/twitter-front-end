import "./Follow.css"
import {useState} from "react"

const Follow = () => {

    const [click, setClicked] = useState(false)

    const clickHandler = () => {
        setClicked(!click)
    }


    return <button className="follow" onClick={clickHandler}>{!click ? "Follow" : "Unfollow"}</button>
}

export default Follow