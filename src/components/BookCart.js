import React, { useState }  from "react";
import { useBookPurchases } from "../hooks/useBookPurchases";

export const BookCart = () => {
  const { Book } = useBookPurchases();
  const [purchases, setPurchases] = useState(Book);

  const handleRemoveItem = (itemId) => {
    const updatedPurchases = purchases.filter((purchase) => purchase.imdbID !== itemId);
    setPurchases(updatedPurchases);
  };

  const handleFinishPurchase = () => {
    // Lógica para finalizar la compra
  };

  return (
    <div className="carBookList">
      <h2 className="carBookList__title">Lista de Compras de Libros</h2>
      <ul>
        {Book.map((purchase) => (
          <li key={purchase.imdbID} className="carBookList__item">
            <span> {purchase.Title} - 25$ </span>
            <button onClick={() => handleRemoveItem(purchase.imdbID)}>
              Quitar
            </button>
          </li>
        ))}
      </ul>
      <b>Total: 75$</b> <br/>
      <button onClick={handleFinishPurchase} className="carBookList__finish">
        Finalizar Compra
      </button>
    </div>
  );
};
