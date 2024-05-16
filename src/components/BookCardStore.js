import React , { useState, useEffect } from 'react';

export const BookCardStore=(props)=>{
    const [BookStore, setBookStore] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://www.omdbapi.com/?i=${props.bookid}&apikey=ff9520af`;
                const response = await fetch(url);
                if (!response.ok ) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setBookStore(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    console.log("El Card Store es:", BookStore);

    return(
        <div className="card">
            <h3>{BookStore.Title}</h3>
            <img src={BookStore.Poster} alt={BookStore.Title} className="card_img"/>
            <p><b>Sinopsis:</b>  {BookStore.Plot} </p>
            <p><b>Escritor:</b> {BookStore.Writer}</p>
            <p><b>Genero:</b> {BookStore.Genre}</p>
            <p><b>ISBM:</b> {BookStore.imdbID}</p>
            <p><b>Año:</b> {BookStore.Year}</p>
            <p><b>Ciudad:</b> {BookStore.Country}</p>
        </div>
    );
}
