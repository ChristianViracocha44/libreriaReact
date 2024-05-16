import React, { useContext }  from "react";
import { useParams } from 'react-router-dom';
import { BookCardStore } from "../components/BookCardStore";

export const Store=()=>{
    const {bookid}=useParams();

    return(
        <div>
            <p>Store {bookid}</p>
            <BookCardStore 
                bookid={bookid}
            />

        </div>
    )}