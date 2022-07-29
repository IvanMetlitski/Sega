import React, {useState} from "react";
import Header from "./components/header/Header";
import './scss/app.css'
import Basket from './components/basket/basket'
import Carousel from "./components/carousel/Carousel";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AllCards from "./components/allCards/AllCards";
import AllConsoles from "./components/allConsoles/AllConsoles";

function App () {
    const [basketOpened, setBasketOpened] = useState(false)


    return (
        <Router>
            <div className="container">
                {basketOpened ? <Basket onCloseBasket={()=> setBasketOpened(false)} /> : null}
                <Header onClickBasket={()=> setBasketOpened(true)}/>
                <Carousel>
                    <div className="item item-1"></div>
                    <div className="item item-2"></div>
                    <div className="item item-3"></div>
                    <div className="item item-4"></div>
                    <div className="item item-5"></div>
                    <div className="item item-6"></div>
                </Carousel>
                    <Routes>
                        <Route path='/games' element={<AllCards />} />
                        <Route path='/consoles' element={<AllConsoles />} />
                    </Routes>
            </div>
        </Router>
        )
}

export default App;