import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Orders() {
  const [orders, setOrders] = useState([]);
  const adminStore = useSelector((state) => state);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/admin/orders`,
        headers: {
          Authorization: `Bearer ${adminStore.token}`,
        },
      });

      setOrders(response.data);
    };

    getOrders();
  }, []);

  return (
    <main className="content text-start">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h2 className="h4">Orders</h2>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0"></div>
      </div>
      <div className="table-settings mb-4">
        <div className="row align-items-center justify-content-between">
          <div className="col col-md-6 col-lg-3 col-xl-4">
            <div className="input-group me-2 me-lg-3 fmxw-400">
              <span className="input-group-text">
                <svg
                  className="icon icon-xs"
                  x-description="Heroicon name: solid/search"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <input type="text" className="form-control" placeholder="Search " />
            </div>
          </div>
        </div>
      </div>
      <div className="card card-body border-0 shadow table-wrapper table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="border-gray-200">#</th>
              <th className="border-gray-200">Address</th>
              <th className="border-gray-200">Products</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <Link to={`/order/${order.id}`} className="fw-bold">
                    {order.id}
                  </Link>
                </td>

                <td>
                  <span className="fw-normal">
                    <ul>
                      <li>City: {order.address.city}</li>
                      <li>Street: {order.address.street}</li>
                      <li>Port number: {order.address.portNumber}</li>
                      {order.address.apartmentNumber && (
                        <li>Apartment number: {order.address.apartmentNumber}</li>
                      )}
                    </ul>
                  </span>
                </td>

                <td>
                  <span className="fw-normal">
                    {order.products &&
                      order.products.map((product) => (
                        <ul key={product.id}>
                          <li>Name: {product.name}</li>
                          <li>Price: U$S {product.price}</li>
                          <li>Qty: {product.quantity}</li>
                        </ul>
                      ))}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card-footer px-3 border-0 d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <nav aria-label="Page navigation example">
            <ul className="pagination mb-0">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="theme-settings card bg-gray-800 pt-2 collapse" id="theme-settings"></div>
    </main>
  );
}

export default Orders;
