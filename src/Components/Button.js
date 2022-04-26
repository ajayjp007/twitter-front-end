import "./Button.css"

const Button = (props) => {

    let iconUrl = ""

    if (props.title === "Home") {
        iconUrl = "https://www.svgrepo.com/show/111180/home.svg"
    }else if (props.title === "Explore") {
        iconUrl = "https://www.svgrepo.com/show/304543/hashtag.svg"
    } else if (props.title === "Notifications") {
        iconUrl = "https://www.svgrepo.com/show/327445/notifications.svg"

    } else if (props.title === "Bookmarks") {
        iconUrl = "https://www.svgrepo.com/show/344489/bookmarks.svg"

    } else if (props.title === "Messages") {
        iconUrl = "https://www.svgrepo.com/show/126209/letter.svg"

    } else if (props.title === "List") {
        iconUrl = "https://www.svgrepo.com/show/21393/list-paper-hand-drawn-symbol.svg"
        
    } else if (props.title === "Profile") {
        iconUrl = "https://www.svgrepo.com/show/302497/profile.svg"
        
    } else if (props.title === "More") {
        iconUrl = "https://www.svgrepo.com/show/157749/more.svg"
        
    } 



    return (
        <div className="button-container">
            <img className="icons" src={iconUrl} /><p>{props.title}</p>
            {/* <button className="general-btn"><img className="icons" src={iconUrl} />{props.title}</button> */}
        </div>
        
    )
}

export default Button
