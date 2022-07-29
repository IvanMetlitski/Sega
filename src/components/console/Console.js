import React from "react";
import './console.css'


const Console =({title, imgUrl, price})=> {
    return (
        <div className="console">
            <h4 className="console__title">{title}</h4>
            <img src={imgUrl}  alt="image" className="card__img"/>
            <h3>Price: {price}$</h3>
        </div>
    )
}

export default Console;