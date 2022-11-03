import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img, sizes,currency } = item;
  return (
    <div className="flex-container">
      <div className="funciona">
          <div className="card"> 
            <div className="card-img">
              <img src={img} alt=""/>
            </div>
            <div className="card-body">
              <h2 className="titulo">{title}</h2>
              <p className="descripcion">{author}</p>
            </div>
            <div className="price-section">
              <div className="tamano">
                <span>{sizes.s}</span>
                <span>{sizes.m}</span>
                <span>{sizes.l}</span>
                <span>{sizes.xl}</span>
              </div>
              <div className="price">
                <span className="peso">{currency}</span>
                <h3>{price}</h3>
              </div>
            </div>
            <div className="cta-group">
            <button onClick={() => handleClick(item)} className="carro">Agregar al carrito</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
