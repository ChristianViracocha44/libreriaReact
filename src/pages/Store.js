import React, { useContext }  from "react";
import { useParams } from 'react-router-dom';
import { BookCardStore } from "../components/BookCardStore";

export const Store=()=>{
    const {bookid}=useParams();

    return(
        <div className="sectionBody">
            <h1>Compra tu Nuevo Libro</h1>
            <BookCardStore 
                bookid={bookid}
            />

        </div>
    )}