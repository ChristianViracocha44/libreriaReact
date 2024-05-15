import React from "react";
import { ImageCarousel } from "../components/ImageCarousel";


export const Home = () => {

    return (
        <div className="sectionBody" >

            <h1>¡Bienvenido a nuestra biblioteca!</h1>
            <p className="sectionBody__p">Descubre nuestra amplia colección de libros y recursos disponibles para ti. ¡Explora, aprende y diviértete!</p>

            <ImageCarousel />
        </div>


    )
}