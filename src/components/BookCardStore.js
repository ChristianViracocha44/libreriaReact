import React, { useState, useEffect } from 'react';
import buho from "../resources/buho.png"
import { useBookDetail } from '../hooks/useBookDetail';
import { BookCart } from './BookCart';


export const BookCardStore = (props) => {

    const [purchased, setPurchased] = useState(false);
    const { BookStore } = useBookDetail(props);

    const handleBuyNow = () => {
        // Actualiza el estado para indicar que se ha realizado la compra
        setPurchased(true);
    };

    return (
        <div className="cardStore">

            <div className='cardStore__book'>
                <h2>{BookStore.Title}</h2>
                <img src={BookStore.Poster} alt={BookStore.Title} className="card__img" />
                <p><b>Sinopsis:</b> El mundo de Axlin está plagado de monstruos. Algunos atacan a los viajeros en los caminos, otros asedian las aldeas hasta que logran arrasarlas por completo y otros entran en las casas por las noches para llevarse a los niños mientras duermen. Axlin ha crecido siendo consciente de que cualquier día le puede tocar a ella. Su gente ha sobrevivido a los monstruos durante generaciones y ha aprendido a evitarlos en la medida de lo posible. Pero un día Axlin descubre que existen muchos tipos de monstruos diferentes, que cada aldea se enfrenta a sus propias pesadillas y que hay criaturas que no conoce y ante las que no sabe cómo defenderse.</p>

            </div>

            <div className='cardStore__detail'>

                <button className='bottonSelection'>Previo</button> |  <button className='bottonSelection'>Próximo</button>
                <br />
                <br />
                <b>Precio: $24.50</b>  <br />
                <h3>Cantidad</h3>
                <input></input> <br /><br />
                <button className='bottonSelection' onClick={handleBuyNow}>Comprar Ahora !!!</button>

                <br />
                <h3>Ficha Tecnica</h3>
                <p><b>Escritor:</b> {BookStore.Writer}</p>
                <p><b>Genero:</b> {BookStore.Genre}</p>
                <p><b>ISBM:</b> {BookStore.imdbID}</p>
                <p><b>Año:</b> {BookStore.Year}</p>
                <p><b>Ciudad:</b> {BookStore.Country}</p>

            </div>

           

            {purchased &&
                <div className='cardStore__notification'>
                    <img className="cardStore__notification__img" src={buho} alt="buho" />
                    <div><BookCart /></div>
                    <h1>¡Muchas Gracias por su Compra!</h1>
                </div>
            }

        </div>
    );
}
