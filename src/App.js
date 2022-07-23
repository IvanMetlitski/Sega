import React from "react";
import Header from "./components/header/Header";
import './scss/app.css'
import Basket from './components/basket/basket'
import Carousel from "./components/carousel/Carousel";

function App () {
    return (
        <div className="container">
            <Basket />
            <Header />
            <Carousel>
                <div className="item item-1">
                    Item 1
                </div>
                <div className="item item-2"></div>
                <div className="item item-3"></div>
                <div className="item item-4"></div>
                <div className="item item-5"></div>
                <div className="item item-6"></div>
            </Carousel>
        </div>
    )
}

export default App;