import React  from "react";
import { Link } from 'react-router-dom';

export const BookCard=(props)=>{
    console.log("El props es:", props);

    return(
        <div className="card">
            <h3>{props.book.Title}</h3>
            <img src={props.book.Poster} alt={props.book.Title} className="card__img"/>
            <p>Sinopsis:  Memorias de Idhún es una trilogía épica que sigue la historia de Jack, un adolescente danés que descubre que sus sueños sobre un mundo mágico son reales.  </p>
            <p>imdbID: {props.book.imdbID}</p>
            <p>Año: {props.book.Year}</p>

            <Link to ={`/store/${props.book.imdbID}`}>
                <button className="bottonSelection" type="button" >Comprar Libro</button>
            </Link>
        </div>

    )}