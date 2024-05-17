import React, { useState } from "react";
import { Link } from 'react-router-dom'; 

export const SearchBar = ({ books }) => {

    const [query, setQuery] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);

    const handleSearch = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);

        // Obtener la lista de libros de la propiedad 'data' del objeto 'books'
        const bookList = books || [];

        const filtered = bookList.filter(book =>
            book.Title.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredBooks(filtered);

        console.log("filter:", {filteredBooks});
    };

    const handleSelectBook = (book) => {
        console.log('Book selected:', book);
        // Aquí puedes realizar acciones adicionales al seleccionar un libro, como navegar a la página de detalles del libro, etc.
    };

    console.log("El props search es:", { books });

    return (
        <div className="searchBar">
            <input
            className="searchBar__input"
                type="text"  
                placeholder="Buscar libros..."
                value={query}
                onChange={handleSearch}
            />
            <ul className="searchBar__results">
                {filteredBooks.map(book => (
                    <li className="searchBar__results__li" key={book.imdbID} onClick={() => handleSelectBook(book)}>
                    <Link to ={`/store/${book.imdbID}`}> 
                        <img src={book.Poster} alt={book.title} className="searchBar__img" />
                        <b>{book.Title}</b>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}