import "./WhoToFollow.css"
import WhoToFollowDetail from "./WhoToFollowDetail"
import {useState} from "react"

const WhoToFollow = () => {

    const [loadProfiles, setLoadProfiles] = useState (false)

    const LoadMoreProfile = () => {
        setLoadProfiles(true)
    }
    const hideHandler = () => {
        setLoadProfiles(false)
    }

    return (
        <div className="follow-container">
            <p className="who-to-follow">Who To Follow?</p>
            <WhoToFollowDetail usrName="ItachiUchiha" profilePicture="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/ddqia80-059e23f7-569a-4260-9a84-60e2295c33b0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGRxaWE4MC0wNTllMjNmNy01NjlhLTQyNjAtOWE4NC02MGUyMjk1YzMzYjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.08NrqSS9qP9unvfRc7oJ4hxPyDfXnbwOOUs4U7WfEz4" />
            <WhoToFollowDetail usrName="sasukeUchiha" profilePicture="https://esquilo.io/png/thumb/EAn6qVkFRogar1i-Itachi-Uchiha-Sharingan-PNG-Clipart.png" />
            <WhoToFollowDetail usrName="kakashiHatake" profilePicture="https://www.pinpng.com/pngs/m/99-992643_mangekyou-sticker-naruto-mangekyou-sharingan-obito-hd-png.png" />
            {!loadProfiles && <button className="hide-load-btn" onClick={LoadMoreProfile}>Load more</button>}
            {loadProfiles && <div> <WhoToFollowDetail usrName="Rahul" profilePicture="https://seeklogo.com/images/G/goku-logo-C1888EDD04-seeklogo.com.png" />
            <WhoToFollowDetail usrName="AmrithaAatmana" profilePicture="https://www.i2symbol.com/images/cool-letters/kannada/kannada_letter_aa_u0C86_icon_256x256.png" />
            <WhoToFollowDetail usrName="TescoBeti" profilePicture="http://www.3sixtynetworks.com/media/uploads/tescologo.png" />
            <WhoToFollowDetail usrName="Gaurav" profilePicture="https://thumbs.dreamstime.com/z/shiva-nataraja-silhouette-circle-fire-black-white-image-vector-184011190.jpg" />
            <WhoToFollowDetail usrName="CAShruti" profilePicture="https://www.bahrain-icai.org/images/BCICAI-logo.png" />
            <WhoToFollowDetail usrName="AjayJayaprakash" profilePicture="https://e7.pngegg.com/pngimages/465/601/png-clipart-black-kanji-text-on-white-background-goku-gohan-super-saiya-vegeta-dragon-ball-kanji-text-logo.png" />
            <button className="hide-load-btn" onClick={hideHandler}>Hide</button>
            </div> }
        </div>
    )
}

export default WhoToFollow