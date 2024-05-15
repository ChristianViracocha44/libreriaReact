import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ImageCarousel.css';

export const ImageCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const libros = [
        {
            id: 1,
            imagen: 'https://m.media-amazon.com/images/I/71hpuaA24KL._SL800_.jpg?w=150&q=70',
            titulo: 'El Ciclo del Eterno Emperador',
        },
        {
            id: 2,
            imagen: 'https://m.media-amazon.com/images/I/81dU7qQQkgL._SL800_.jpg?w=640&q=70',
            titulo: 'Stravagantia',
        },
        {
            id: 3,
            imagen: 'https://m.media-amazon.com/images/I/911-QPGTpbL._SL800_.jpg?w=640&q=70',
            titulo: 'Cuando me veas',
        },
        {
            id: 4,
            imagen: 'https://m.media-amazon.com/images/I/91N-aAH8FJS._SL800_.jpg?w=640&q=70',
            titulo: 'Todas las hadas del reino',
        },
        {
            id: 5,
            imagen: 'https://m.media-amazon.com/images/I/81tV7RBGa1L._SL800_.jpg?w=640&q=70',
            titulo: 'Omnia (Edición en español)',
        },
        {
            id: 6,
            imagen: 'https://m.media-amazon.com/images/I/81Lm9DWDhfL._SL800_.jpg?w=640&q=70',
            titulo: 'La Emperatriz de los Etéreos',
        },
        {
            id: 7,
            imagen: 'https://m.media-amazon.com/images/I/81puYLz-YvL._SL800_.jpg?w=640&q=70',
            titulo: 'Memorias de Idhún (Compilación)',
        },
        {
            id: 8,
            imagen: 'https://m.media-amazon.com/images/I/91bJHugHgSL._SL800_.jpg?w=640&q=70',
            titulo: 'El bestiario de Axlin',
        },
        // Agrega más libros aquí
    ];


    return (
        <Slider {...settings}>
            {libros.map((libro) => (
                <div key={libro.id} className="libro-carrusel">
                    <img className="libro-carrusel__img" src={libro.imagen} alt={libro.titulo} />
                    <h4>{libro.titulo}</h4>
                </div>
            ))}
        </Slider>
    )
}
