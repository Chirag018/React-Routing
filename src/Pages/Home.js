import React from "react";
import { Link } from 'react-router-dom'
import '../styles/Home.css'
import BannerImage from '../assets/pizza.jpeg'

function Home() {
    return (
        <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Pizza Parlour</h1>
                <p>Pizza Lovers Place</p>
                <Link to="/menu">
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;