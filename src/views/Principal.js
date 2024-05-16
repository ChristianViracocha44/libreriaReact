import React from 'react';
import '../styles/styles.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BookContext } from '../context/BookContext';
import { Navbar } from '../components/Navbar';
import { LibraryRouter } from '../router/LibraryRouter';

export const Principal = () => {

    return (
        <div className="sectionPrincipal" >
            <div>
                <BookContext.Provider value={null}>
                <Header />
                <Navbar />
                <LibraryRouter /> 
                <Footer />
                </BookContext.Provider>
            </div>
        </div>
    );
}