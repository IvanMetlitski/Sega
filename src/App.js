import React from "react";
import Header from "./components/header/Header";
import './scss/app.css'
import Basket from './components/basket/basket'
import Carousel from "./components/carousel/Carousel";
import Card from "./components/card/Card";
import Console from "./components/console/Console";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


const games = [
    {
        name: 'Beyond Oasis',
        imgUrl: './img/games/game_1.jpg',
        text: 'Nintendo\'s Legend of Zelda may have spent the 1990s establishing itself as a definitive action-adventure series, but Sega\'s Beyond Oasis was a fine attempt to muscle in on that Hyrule territory. Also titled Story of Thor in other regions, the top-down perspective, gorgeous visuals, and engrossing action made Prince Ali\'s quest both charming and exciting.'
    },
    {
        name: 'Castlevania: Bloodlines',
        imgUrl:'./img/games/game_2.jpg',
        text: 'By 1994, Castlevania had firmly established itself as one of Konami\'s biggest franchises. For its Genesis arrival, Konami went back to the drawing board so that a Castlevania experience could be designed exclusively for that system, resulting in a game that\'s seen as one of the best in the series before Symphony of the Night came along and set a new status quo.'
    },
    {
        name: 'Dr. Robotnik\'s Mean Bean Machine',
        imgUrl:'./img/games/game_3.jpg',
        text: 'Some of the best puzzle games of the Genesis generation could be found sandwiched between some of Sega\'s most popular titles, and Dr. Robotnik\'s Mean Bean Machine definitely counts as a prime example of this idea. Essentially the riveting action of Puyo Puyo given an Eggman makeover so that it could find traction in the West.'
    },
    {
        name: 'Ecco the Dolphin',
        imgUrl:'./img/games/game_4.jpg',
        text: 'Even though it had you taking control of the remorseless oceanic killing machine that is a dolphin, Ecco was a surprisingly calm and atmospheric game. That didn\'t mean that some nasty difficulty spikes didn\'t pop up from time to time, but for the most part, playing Ecco meant that you were in for an experience. It was a beautiful dip in the deep blue of the ocean, with Ecco\'s sonar abilities.'
    },
    {
        name: 'Mortal Kombat II',
        imgUrl:'./img/games/game_5.jpg',
        text: 'Mortal Kombat 2 is a textbook example of how to build a sequel. Taking the brutal foundation of the original Mortal Kombat, everything about the follow-up was simply better. The roster was almost double the size of its predecessor, the core gameplay felt more brutal than ever, and the variety of special moves on offer made every character a well-rounded option for competitive play. '
    },
    {
        name: 'Sonic the Hedgehog 2',
        imgUrl:'./img/games/game_6.jpg',
        text: 'Sonic the Hedgehog was a fast-paced blast of fun, but there were some speedbumps on the road that saw the blue hedgehog take the entertainment world by storm. Sonic the Hedgehog 2 though, had none of those issues as it found its groove in the Emerald Hill zone and beyond. Faster and better-balanced in the challenge department than its predecessor.'
    },
    {
        name: 'Shining Force II',
        imgUrl:'./img/games/game_7.jpg',
        text: 'A tremendous sequel to a cult-classic RPG, Shining Force II is still fondly remembered to this day by Sega\'s most devout fans. Tightening up every single gameplay nut and bolt that the first game had placed, Shining Force II confidently dips into strategically deep fantasy to deliver a tactical experience that was unique for the Genesis at the time.'
    },
    {
        name: 'Streets of Rage 2',
        imgUrl:'./img/games/game_8.jpg',
        text: 'The Streets of Rage was one of the finest beat-\'em-up series to ever land, but it\'s the middle chapter of that brawling collection that\'s worth revisiting. Smoothing over the rougher parts of the first game\'s design, Streets of Rage II nailed a perfect balance between style and substance as you worked your way through various gangs that were looking to punch your lights out.'
    },
];

const consoles = [
    {
        name: 'SG-1000',
        imgUrl: './img/consoles/Sega-SG-1000.jpg',
        price: 120
    },
    {
        name: 'Master System',
        imgUrl: './img/consoles/Sega-Master.jpg',
        price: 140
    },
    {
        name: 'Mega Drive',
        imgUrl: './img/consoles/Sega-Mega-Drive-JP-Mk1-Console-set.jpg.jpg',
        price: 230
    },
    {
        name: 'Game Gear',
        imgUrl: './img/consoles/Game-Gear-Handheld.jpg',
        price: 250
    },
    {
        name: 'Mega CD',
        imgUrl: './img/consoles/Sega-CD.jpg',
        price: 250
    },
    {
        name: '32X',
        imgUrl: './img/consoles/Sega-Saturn.jpg',
        price: 250
    },
    {
        name: 'Sega Genesis',
        imgUrl: './img/consoles/Sega-Genesis.jpg',
        price: 310
    },
    {
        name: 'Sega Dreamcast',
        imgUrl: './img/consoles/Sega-Dreamcast.jpg',
        price: 490
    },
]

function App () {
    return (
        <Router>
            <div className="container">
                <Basket />
                <Header />
                <Carousel exact path='/carousel'>
                    <div className="item item-1"></div>
                    <div className="item item-2"></div>
                    <div className="item item-3"></div>
                    <div className="item item-4"></div>
                    <div className="item item-5"></div>
                    <div className="item item-6"></div>
                </Carousel>
                <div className="wrapper">
                    <Card
                            title={'Beyond Oasis'}
                            imgUrl={require('./img/games/game_1.jpg')}
                            text={'Nintendo\'s Legend of Zelda may have spent the 1990s establishing itself as a definitive action-adventure series, but Sega\'s Beyond Oasis was a fine attempt to muscle in on that Hyrule territory. Also titled Story of Thor in other regions, the top-down perspective, gorgeous visuals, and engrossing action made Prince Ali\'s quest both charming and exciting.'}
                        />
                        <Card
                            title={'Castlevania: Bloodlines'}
                            imgUrl={require('./img/games/game_2.jpg')}
                            text={'By 1994, Castlevania had firmly established itself as one of Konami\'s biggest franchises. For its Genesis arrival, Konami went back to the drawing board so that a Castlevania experience could be designed exclusively for that system, resulting in a game that\'s seen as one of the best in the series before Symphony of the Night came along and set a new status quo.'}
                        />
                        <Card
                            title={'Dr. Robotnik\'s Mean Bean Machine'}
                            imgUrl={require('./img/games/game_3.jpg')}
                            text={'Some of the best puzzle games of the Genesis generation could be found sandwiched between some of Sega\'s most popular titles, and Dr. Robotnik\'s Mean Bean Machine definitely counts as a prime example of this idea. Essentially the riveting action of Puyo Puyo given an Eggman makeover so that it could find traction in the West.'}
                        />
                        <Card
                            title={'Ecco the Dolphin'}
                            imgUrl={require('./img/games/game_4.jpg')}
                            text={'Even though it had you taking control of the remorseless oceanic killing machine that is a dolphin, Ecco was a surprisingly calm and atmospheric game. That didn\'t mean that some nasty difficulty spikes didn\'t pop up from time to time, but for the most part, playing Ecco meant that you were in for an experience. It was a beautiful dip in the deep blue of the ocean, with Ecco\'s sonar abilities.'}
                        />
                        <Card
                            title={'Mortal Kombat II'}
                            imgUrl={require('./img/games/game_5.jpg')}
                            text={'Mortal Kombat 2 is a textbook example of how to build a sequel. Taking the brutal foundation of the original Mortal Kombat, everything about the follow-up was simply better. The roster was almost double the size of its predecessor, the core gameplay felt more brutal than ever, and the variety of special moves on offer made every character a well-rounded option for competitive play. '}
                        />
                        <Card
                            title={'Sonic the Hedgehog 2'}
                            imgUrl={require('./img/games/game_6.jpg')}
                            text={'Sonic the Hedgehog was a fast-paced blast of fun, but there were some speedbumps on the road that saw the blue hedgehog take the entertainment world by storm. Sonic the Hedgehog 2 though, had none of those issues as it found its groove in the Emerald Hill zone and beyond. Faster and better-balanced in the challenge department than its predecessor.'}
                        />
                        <Card
                            title={'Shining Force II'}
                            imgUrl={require('./img/games/game_7.jpg')}
                            text={'A tremendous sequel to a cult-classic RPG, Shining Force II is still fondly remembered to this day by Sega\'s most devout fans. Tightening up every single gameplay nut and bolt that the first game had placed, Shining Force II confidently dips into strategically deep fantasy to deliver a tactical experience that was unique for the Genesis at the time.'}
                        />
                        <Card
                            title={'Streets of Rage 2'}
                            imgUrl={require('./img/games/game_8.jpg')}
                            text={'The Streets of Rage was one of the finest beat-\'em-up series to ever land, but it\'s the middle chapter of that brawling collection that\'s worth revisiting. Smoothing over the rougher parts of the first game\'s design, Streets of Rage II nailed a perfect balance between style and substance as you worked your way through various gangs that were looking to punch your lights out. '}
                        />
                        <Console
                            title={'SG-1000'}
                            imgUrl={require('./img/consoles/Sega-SG-1000.jpg')}
                            price={130}
                        />
                        <Console
                            title={'\'Master System\''}
                            imgUrl={require('./img/consoles/Sega-Master.jpg')}
                            price={150}
                        />
                        <Console
                            title={'Mega Drive'}
                            imgUrl={require('./img/consoles/Sega-Mega-Drive.jpg')}
                            price={170}
                        />
                        <Console
                            title={'Game Gear'}
                            imgUrl={require('./img/consoles/Game-Gear-Handheld.jpg')}
                            price={220}
                        />
                        <Console
                            title={'Mega CD'}
                            imgUrl={require('./img/consoles/Sega-CD.jpg')}
                            price={210}
                        />
                        <Console
                            title={'32X'}
                            imgUrl={require('./img/consoles/Sega-Saturn.jpg')}
                            price={270}
                        />
                        <Console
                            title={'Sega Genesis'}
                            imgUrl={require('./img/consoles/Sega-Genesis.jpg')}
                            price={350}
                        />
                        <Console
                            title={'Sega Dreamcast'}
                            imgUrl={require('./img/consoles/Sega-Dreamcast.jpg')}
                            price={470}
                        />
                </div>
            </div>
        </Router>
        )
}

export default App;