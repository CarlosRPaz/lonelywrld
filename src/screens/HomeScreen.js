import React from 'react'
import './styles/HomeScreen.css'
import Nav from '../components/Nav';
import HeroHeader from '../components/HeroHeader';
import Products from '../components/Products';
import About from '../components/About';
import Footer from '../components/Footer';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <HeroHeader />
            <Products />
            <About />
            <Footer />
        </div>
    )
}

export default HomeScreen
