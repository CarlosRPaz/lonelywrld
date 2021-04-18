import React from 'react'
import './styles/HeroHeader.css'

function HeroHeader() {
    return (
        <header className="heroHeader"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://cms.qz.com/wp-content/uploads/2019/05/GettyImages-915550812-e1558440140927.jpg?quality=75&strip=all&w=1600&h=900&crop=1")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="heroHeader__contents">
                <h3 className="heroHeader__season">Season 1 Dead Flower</h3>
                <h1 className="heroHeader__title">LonelyWrld</h1>
                <p className="heroHeader__paragraph">You’re doing this is to make your life better. Nothing about you is a mistake so stop trying to be like others and BE YOURSELF.</p>
            </div>

            <div className="heroHeader--bottomCurve" />
        </header>
    )
}

export default HeroHeader
