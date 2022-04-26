import "./News.css"
import { useState } from "react"

const News = (props) => {

    const [loadMoreNews, setLoadMoreNews] = useState(false)

    const loadMoreHandler = () => {
        //normally would fetch more news but since this is a dummy application we'll just show some text

        setLoadMoreNews(true)
    }
    const hideNewsHandler = () => {
        setLoadMoreNews(false)
    }
    //can use api to fetch news, that news has to loaded below.
    return (
        <div className="news">
            {props.show && <p className="heading">What's Happening?</p>}
            <br></br>
            <div className="news-container">
                <p className="small-heading">War in Ukraine . LIVE</p>
                <p className="news-content">Ukraine retakes Kyiv suburb as battle in besieged Mariupol continues</p>
                
            </div>
            <div className="news-container">
                <p className="small-heading">Ukraine conflict</p>
                <p className="news-content">Over 22,500 Indian citizens were evacuated from Ukraine, external affairs minister says</p>
            </div>
            <div className="news-container">
                <p className="small-heading">Entertainment . Trending</p>
                <p className="news-content">#BoycottRRRinKarnataka</p>
            </div>
            {!loadMoreNews && props.show && <button className="load-more-news" onClick={loadMoreHandler} >Show more</button>}
            {loadMoreNews && <div>
                <div className="news-container">
                    <p className="small-heading">Cricket·LIVE</p>
                    <p className="news-content">IPL 2022: MS Dhoni hands over the captaincy of CSK to Ravindra Jadeja</p>
                </div>
                <div className="news-container">
                    <p className="small-heading">IPL 2022·LIVE</p>
                    <p className="news-content">IPL 2022: Here's a look at the new team jerseys for Season 15</p>
                </div>
                <button className="load-more-news" onClick={hideNewsHandler}>Hide</button>
            </div>
            }
        </div>
    )
}

export default News