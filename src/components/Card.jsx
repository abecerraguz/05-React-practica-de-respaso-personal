import React from 'react';
import { generate as id } from 'shortid'


const Card = (info) =>{
const etiquetas = info.info.tags
return(

    <div className="card">
        <h2 className="card__title">{info.info.title}</h2>
        <img className="card__img" src={info.info.img} alt={info.info.title} />
        <p className="card__description">{info.info.description}</p>
        <p className="card__author">{info.info.author}</p>
        <ul className="card__tags">
            {
                etiquetas.map(etiqueta=>{
                    return <li key={id()}>{etiqueta}</li>
                })
            }
        </ul>
        <p className="card__views">{info.info.views}</p>
        <p className="card__date">{info.info.date}</p>

    </div>

    )
}

export default Card