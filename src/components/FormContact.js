import React from "react";


export const FormContact = () => {
    return (
        <div>
            <div className="card__form">
                <h3>Contáctanos</h3>
                <form >
                    <div className="formGroup">
                        <label className="formGroup__label" htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="formGroup">
                        <label className="formGroup__label" htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="formGroup">
                        <label className="formGroup__label" htmlFor="message">Mensaje:</label>
                        <textarea className="formGroup__textarea" id="message" name="message" required />
                    </div>
                    <button className="bottonSelection" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}

