import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productServices";

const Products = (props) => {
  const [data, setData] = useState([]);

  const handleDelete = (userId) => {
    setData(data.filter((d) => d.id !== userId));
  };

  useEffect(() => {
    async function fetchProducts() {
      const response = await getProducts();
      setData(response.data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="bg-light">
      <div className="container">
        <h1>Products Page</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.website}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(u.id)}
                  >
                    <i className="fa fa-trash" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
