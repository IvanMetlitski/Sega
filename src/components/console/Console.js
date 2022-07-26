import React from "react";
import './console.css'


const Console =(props)=> {
    return (
        <div className="console">
            <h4 className="console__title">{props.title}</h4>
            <img src={props.imgUrl}  alt="image" className="card__img"/>
            <h3>Price: {props.price}$</h3>
        </div>
    )
}

export default Console;