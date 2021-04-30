import React from 'react'
import './styles/About.css'
import FavoriteIcon from '@material-ui/icons/Favorite';

function About() {
    return (
        <div className="about">
            <div className="about__titleContainer">
                <div className="about__title1">About</div>
                <div className="about__title2">Lonely Wrld</div>
            </div>
            <div className="about__container">
                <div className="about__img"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url("https://assets.vogue.com/photos/5fc6449df729d490c724fa46/1:1/w_3000,h_3000,c_limit/HN-promo.jpg")`,
                        backgroundPosition: "center center",
                    }}
                />
                <p className="about__paragraph">
                    Our brand is built to encourage everyone to feel a sense of self-confidence. Brought to you by Julian Calderon + Cynthia Perez. All clothing is limited edition of streetwear, by using top quality fabrics. Lonely Wrld signifies that you are never alone in this world and to always have self love for yourself. <br /><br />
                    As a new generation is built, we learned style has become a big part of who you are today. Our ideas while creating these collections are to offer a sense of self love and never being in a <span>LONELY WRLD</span>!
                    <FavoriteIcon className="about__heart" />
                </p>
            </div>
        </div>
    )
}

export default About
