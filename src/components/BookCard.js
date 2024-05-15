import React from "react";

export const BookCard=(props)=>{
    console.log("El props es:", props);

    return(
        <div className="card">
            <h3>{props.book.Title}</h3>
            <img src={props.book.Poster} alt={props.book.Title} className="card_img"/>
            <p>Sinopsis:  Memorias de Idhún es una trilogía épica que sigue la historia de Jack, un adolescente danés que descubre que sus sueños sobre un mundo mágico son reales.  </p>
            <p>imdbID: {props.book.imdbID}</p>
            <p>Año: {props.book.Year}</p>

            <div className="d-flex justify-content-center">
                <button className="bottonSelection" type="button">Comprar Libro</button>
            </div>
        </div>

    )}