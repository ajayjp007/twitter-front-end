import "./Card.css"

const Card = (props) => {

    let imageLink = ""
    if (props.imageNum % 2 === 0) {
        imageLink = "https://images.unsplash.com/photo-1551218694-ff8975202a9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHBvc3RlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    } else {
        imageLink = "https://images.unsplash.com/photo-1604716053473-6e35b93438ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY5fHxwb3N0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    }


    return (
        <div className="card-container">
            <div className="twitter-tweetUser">
                <img className="user-picture" src="https://www.pikpng.com/pngl/b/44-442110_jpg-black-and-white-library-google-logo-png.png" />
            <p className="user-name">{props.userName} <span className="username">{`@${props.userName}`}</span> <button className="btnDot">...</button></p>
            </div>
           
            <p className="tweets">{props.tweet}</p>
            <div className="image-container">
                <img className="some-image" src={imageLink} />
            </div>
            <div className="like-share">
                <i class='far icon-like'>&#xf004;</i>
                <i class='fas icon'>&#xf079;</i>
                <i class='far icon'>&#xf075;</i>
                <i class="fa icon">&#xf093;</i>

            </div>
        </div>
    )
}

export default Card