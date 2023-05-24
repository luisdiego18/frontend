import React from "react";

function Product({ onAddToCard }) {
  return (
    <div className="card cardProduct">
      <div className="card-body p-0">
        <img src="https://picsum.photos/200" />
        <h4 className="card-text">Product Name</h4>
        <p className="card-text">$19.99</p>
        <button className="btn btn-warning mb-3" onClick={onAddToCard}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
