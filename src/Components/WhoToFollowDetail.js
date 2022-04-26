import "./WhoToFollowDetail.css"
import Follow from "./Follow"

const WhoToFollowDetail = (props) => {
    return (
        <div className="follow-container-details">
            <img id="usr-img" src={props.profilePicture} />
            <div className="usr-details">
                <p className="usr-name-bld">{props.usrName}</p>
                <span className="usr-name-light">@{props.usrName}</span>
            </div>
            <Follow />
        </div>
    )
}

export default WhoToFollowDetail