import React from "react";
import Console from "../console/Console";

export default function AllConsoles () {
    return (
        <div className="wrapper">
            <Console
                title={'SG-1000'}
                imgUrl={'./img/consoles/Sega-SG-1000.jpg'}
                price={130}
            />
            <Console
                title={'\'Master System\''}
                imgUrl={'./img/consoles/Sega-Master.jpg'}
                price={150}
            />
            <Console
                title={'Mega Drive'}
                imgUrl={'./img/consoles/Sega-Mega-Drive.jpg'}
                price={170}
            />
            <Console
                title={'Game Gear'}
                imgUrl={'./img/consoles/Game-Gear-Handheld.jpg'}
                price={220}
            />
            <Console
                title={'Mega CD'}
                imgUrl={'./img/consoles/Sega-CD.jpg'}
                price={210}
            />
            <Console
                title={'32X'}
                imgUrl={'./img/consoles/Sega-Saturn.jpg'}
                price={270}
            />
            <Console
                title={'Sega Genesis'}
                imgUrl={'./img/consoles/Sega-Genesis.jpg'}
                price={350}
            />
            <Console
                title={'Sega Dreamcast'}
                imgUrl={'./img/consoles/Sega-Dreamcast.jpg'}
                price={470}
            />
        </div>
    )
}