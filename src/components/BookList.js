import React , { useState, useEffect } from 'react';
import { BookCard } from './BookCard';


export const BookList = () => {

    const [Book, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "https://www.omdbapi.com/?s=disney&apikey=ff9520af";
               //const url = "https://api.jikan.moe/v4/recommendations/manga";
                const response = await fetch(url);
                if (!response.ok ) {
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


    console.log("El props es:", Book);

  return (

    <div className="sectionBody_card">    
    {Book.map((BookService, index) =>
    (
        <BookCard
            key={index}
            book={BookService}
        />
    ))}
    
</div>


  )
}
