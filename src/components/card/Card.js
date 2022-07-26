import React from "react";
import './card.css'

const Card =(props)=> {
    return (
        <div className="card">
            <h4 className="card__title">{props.title}</h4>
            <img src={props.imgUrl} alt="image" className="card__img"/>
            <p className="card__text">{props.text}</p>
        </div>
    )
}
export default Card;