import Button from "../Components/Button"
import Card from "../Components/Card"
import News from "../Components/News"
import "./welcome.css"
import WhatsHappening from "../Components/WhatsHappening"
import WhoToFollow from "../Components/WhoToFollow"
const Welcome = () => {

    const actUsr = "MadaraUchiha"
    const num = 20
    const dummyUser = "GoogleCo"
    const dummyTweet = "We're celebrating World Quantum Day and making quantum computing more accessible to all with new resources from @GoogleQuantumAI. 💻 Meet some of our quantum researchers, try your hand at quantum computing with #TheQubitGame and more."

    return (
        <div className="page-container">
            <div className="left">
                <img id="bird-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="logo" />
                <div className="left-nav">
                    <Button title="Home" />
                    <Button title="Explore" />
                    <Button title="Notifications" />
                    <Button title="Messages" />
                    <Button title="Bookmarks" />
                    <Button title="List" />
                    <Button title="Profile" />
                    <Button title="More" />
                </div>
                <button className="tweet-btn">TWEET</button>
                <br></br>
                <button className="right-profile"><img id="right-profile-picture" src="https://www.pngfind.com/pngs/m/217-2172797_image-uchiha-clan-logo-uchiha-clan-symbol-hd.png" />{actUsr}</button>
            </div>
            <div className="center">
                <div className="center-top">
                    <h2 className="home">Home</h2>
                    <i class="fa refresh">&#xf021;</i>
                </div>
                <WhatsHappening />
                {
                    [...Array(num)].map((element, index) => {
                        return (
                            <Card imageNum={index} tweet={dummyTweet} userName={dummyUser} key={index} />
                        )
                    })
                }

            </div>
            <div className="right">
                <input className="search-bar" placeholder="Search tweets"></input>
                <News show={true} />
                <WhoToFollow />
            </div>
        </div>
    )
}

export default Welcome