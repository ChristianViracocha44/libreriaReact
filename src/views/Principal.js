import React from 'react';
import '../styles/styles.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Body } from '../components/body';
import { Navbar } from '../components/Navbar';
import { LibraryRouter } from '../router/LibraryRouter';

export const Principal = () => {

    return (
        <div className="sectionPrincipal" >
            <div>
                <Header />
                <Navbar />
                <LibraryRouter /> 
                
                <Footer />
            </div>
        </div>
    );
}