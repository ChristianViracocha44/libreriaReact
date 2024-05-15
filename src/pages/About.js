import React from "react";

export const About = () => {

    return (
        <div className="card_about">
            <div className="card_form">

                <h3>Contáctanos</h3>
                <form >
                    <div className="formGroup">
                        <label className="formGroup_label" htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="formGroup">
                        <label className="formGroup_label" htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="formGroup">
                        <label className="formGroup_label" htmlFor="message">Mensaje:</label>
                        <textarea className="formGroup_textarea" id="message" name="message" required />
                    </div>
                    <button className="bottonSelection" type="submit">Enviar</button>
                </form>
            </div>

            <div className="card_info">
                <h2>Acerca de nuestra librería</h2>
                <p>¡Bienvenido a nuestra librería! En nuestra tienda, nos apasiona fomentar el amor por la lectura y proporcionar un espacio acogedor donde los amantes de los libros puedan explorar, descubrir y disfrutar de una amplia selección de títulos.</p>
                <p>Nuestra librería fue fundada en el año 2024 por Christian Viracocha, con la visión de crear un lugar donde la comunidad pudiera reunirse, compartir ideas y sumergirse en el maravilloso mundo de la literatura.</p>
                <h3>Nuestra Misión</h3>
                <p>En la Libreria Mil y Un Sueños, nos comprometemos a:</p>
                <ul>
                    <li>Proporcionar un excelente servicio al cliente.</li>
                    <li>Ofrecer una selección cuidadosamente curada de libros de alta calidad.</li>
                    <li>Fomentar la diversidad y la inclusión en nuestra comunidad de lectores.</li>
                    <li>Contribuir al crecimiento y desarrollo cultural de nuestra comunidad.</li>
                </ul>
                <h3>Nuestro Equipo</h3>
                <p>Conoce al equipo apasionado detrás de Libreria Mil y Un Sueños que trabaja duro todos los días para hacer de tu experiencia en la librería algo memorable:</p>
                <ul>
                    <li>Christian Viracocha- Propietario</li>

                </ul>
                <h3>Contáctanos</h3>
                <p>¡Estamos aquí para ayudarte! Si tienes alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en contactarnos:</p>
                <p>Teléfono: XXXXXXXXX</p>
                <p>Correo electrónico:XXXXXX@XXXXX.com</p>
            </div>
        </div>
    )
}