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
                <h3 className="heroHeader__season">Season 1<span>Dead Flower</span></h3>
                <h1 className="heroHeader__title">Lonely Wrld</h1>
                <p className="heroHeader__description">You’re doing this is to make your life better. Nothing about you is a mistake so stop trying to be like others and <br /><b>BE YOURSELF.</b></p>
            </div>

            <svg className="heroHeader--bottomCurve" viewBox="100 0 600 320">
                <path
                    fill="#fff"
                    fillOpacity="1"
                    d="M 700 250 L 700 350 L 100 350 L 100 250 L 100 250 C 100 250 400 350 700 250 ">
                </path>
            </svg>
        </header >
    )
}

export default HeroHeader
