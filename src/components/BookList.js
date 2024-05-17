import React, { useState, useEffect } from 'react';
import { BookCard } from './BookCard';


export const BookList = () => {

    const [Book, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "https://www.omdbapi.com/?s=disney&apikey=ff9520af";
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setBooks(data.Search);
                setLoading(false);
                
            } catch (error) {
                setError(error.message);
                setLoading(false);
                
            }
        };

        fetchData();
    }, []);

    console.log(error);
    console.log(loading);
    console.log("El props es:", Book);


    return (
        <div className="sectionBody">
            <h1>Catálogo de libros</h1>
            
                <input className="search__input"
                    type="text"
                    placeholder="Buscar libros..."
                />
         

            <div className="sectionBody_card">
                {Book.map((BookService, index) =>
                (
                    <BookCard
                        key={index}
                        book={BookService}
                    />
                ))}

            </div>
        </div>
    )
}
