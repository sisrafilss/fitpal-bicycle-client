import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageProducts = ({ setPageTitle }) => {
  setPageTitle("Manage Products");
  const [products, setProducts] = useState([]);
  // const [productsChange, setProductschange] = useState(false);

  // Load all products from database
  useEffect(() => {
    axios.get("https://fitpal-bicycle-server.onrender.com/products").then((res) => {
      setProducts(res.data);
      // console.log(res.data);
    });
  }, []);

  // Handle delete a product
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, want to delete?");
    if (proceed) {
      axios.delete(`https://fitpal-bicycle-server.onrender.com/products/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          const newProducts = products.filter((pd) => pd._id !== id);
          setProducts(newProducts);
          alert("Deleted Successfully!");
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="orders-container">
        {/* <h1 className={myOrders.length && "hidden"}>You have no Order Yet!</h1> */}
        <h2 className="display-5 text-center my-4">Manage Products</h2>
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <th scope="row">
                    {" "}
                    {
                      <img
                        src={`data:image/jpeg;base64,${product?.img}`}
                        style={{ height: "40px", width: "40px" }}
                        className="img-fluid"
                        alt=""
                      />
                    }{" "}
                  </th>
                  <td> {product?.title} </td>
                  <td> ${product?.price} </td>
                  <td
                    // onClick={() => handleCancelOrder(order._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <button
                      onClick={() => handleDelete(product?._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
