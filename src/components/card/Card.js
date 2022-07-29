import React from "react";
import './card.css'

const Card =({title, imgUrl, text})=> {
    return (
        <div className="card">
            <h4 className="card__title">{title}</h4>
            <img src={imgUrl} alt="image" className="card__img"/>
            <p className="card__text">{text}</p>
        </div>
    )
}
export default Card;