import React from 'react'
import "./css/Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>

    )


    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Breaking news: After brief delay, Sher Bahadur Deuba takes oath as Nepal's PM", "Top News - 9099 readers")}
            { newsArticle("New variant found in India", "Top News - 36473 readers")}
            {newsArticle("Breaking News Live: PM Modi interacts with Olympics-bound athletes", "Top News - 903499 readers")}
            {newsArticle("Google has ‘bad news’ for these Gmail users", "Top News - 903499 readers")}
            {newsArticle("Jaipur: Lightning strike kills 16 taking selfies in India", "Top News - 4367 readers")}
            {newsArticle("RBI bans 2000 rupees note", "Top News - 36473 readers")}
            {newsArticle("Tish back with LinkedClone", "Top News - 6473 readers")}
        </div>
    )
}

export default Widgets
