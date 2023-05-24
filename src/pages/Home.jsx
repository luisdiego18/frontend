import React from "react";
import Product from "../components/Product";

const Home = (props) => {
  const handleAddToCard = () => {
    console.log("Clicked");
  };
  return (
    <div className="container">
      <h1>Home Page</h1>
      <Product onAddToCard={handleAddToCard} />
    </div>
  );
};

export default Home;
