import React from 'react';
import { BookCard } from './BookCard';
import { SearchBar } from './SearchBar';
import { useBookLibrary } from '../hooks/useBooksLibrary';

export const BookList = () => {

    const { Book } = useBookLibrary();

    return (
        <div className="sectionBody">
            <h1>Catálogo de Libros</h1>
            <SearchBar  books={Book} />

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
