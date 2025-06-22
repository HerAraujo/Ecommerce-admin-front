import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import parseISO from "date-fns/parseISO";
import { useSelector } from "react-redux";

function OrderEditStatusForm() {
  const params = useParams();
  const [statuses, setStatuses] = React.useState();
  const [order, setOrder] = React.useState();
  const [orderStatusId, setOrderStatusId] = React.useState();
  const navigate = useNavigate();
  const adminStore = useSelector((state) => state);

  useEffect(() => {
    const getStatus = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/admin/statuses`,
        headers: {
          Authorization: `Bearer ${adminStore.token}`,
        },
      });

      setStatuses(response.data);
    };

    const getOrder = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/admin/orders/${params.id}`,
        headers: {
          Authorization: `Bearer ${adminStore.token}`,
        },
      });

      setOrder(response.data);
    };

    getStatus();
    getOrder();
  }, []);

  const handleOnClick = async (ev) => {
    ev.preventDefault();
    const response = await axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}/admin/orders/${params.id}`,
      headers: {
        Authorization: `Bearer ${adminStore.token}`,
      },
      data: {
        orderStatusId: orderStatusId,
      },
    });
    navigate("/orders");
  };
  return (
    <main className="content text-start">
      <>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
          <div className="d-block mb-4 mb-md-0">
            <h2 className="h4"></h2>
          </div>
        </div>
        {order && (
          <div className="card card-body border-0 shadow table-wrapper ">
            <h5 className="mb-4">Order #{params.id}</h5>
            <div className="detail-group mb-4">
              <span className=" mb-">
                <strong>Client:</strong>
              </span>{" "}
              <span>{`${order.user.firstname} ${order.user.lastname}`}</span>
            </div>
            <div className="detail-group mb-4">
              <span className=" mb-4">
                <strong>Date:</strong>
              </span>{" "}
              <span>{`${format(parseISO(order.createdAt), "dd/MM/yyyy '-' hh:mm 'hs'")}`}</span>
            </div>
            <div className="detail-group mb-4">
              <span className=" mb-">
                <strong>Status:</strong>
              </span>{" "}
              <span>{`${order.orderStatus.name}`}</span>
            </div>
            <div className="detail-group mb-4">
              <span className=" mb-">
                <strong>City:</strong>
              </span>{" "}
              <span>{`${order.address.city}`}</span>
            </div>
            <div className="detail-group mb-4">
              <span className=" mb-">
                <strong>Address:</strong>
              </span>{" "}
              <span>
                {`${order.address.street} ${order.address.portNumber}`}{" "}
                {order.address.apartmentNumber ? `${order.address.apartmentNumber}` : ""}
              </span>
            </div>
            <div className="detail-group mb-4">
              <span>
                <strong>Products:</strong>
              </span>{" "}
              <table className="table table-centered table-nowrap mt-3 rounded">
                <thead className="thead-light">
                  <tr>
                    <th className="border-0 rounded-start">Name</th>
                    <th className="border-0">Unit price</th>
                    <th className="border-0">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products &&
                    order.products.map((product) => (
                      <tr key={product.id}>
                        <td className="text-primary fw-bold">{product.name}</td>
                        <td className="text-primary fw-bold">{product.price}</td>
                        <td className="text-primary fw-bold">{product.quantity}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <hr />
            <form action="" className="w-50">
              <div className="mb-4">
                <label className="my-1 me-2" htmlFor="status">
                  Change status
                </label>

                <select
                  className="form-select"
                  id="status"
                  name="status"
                  onChange={(ev) => setOrderStatusId(ev.target.value)}
                >
                  <option value="0">Select</option>
                  {statuses &&
                    statuses.map((status) => (
                      <option key={status.id} value={status.id}>
                        {status.name}
                      </option>
                    ))}
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-gray-800"
                onClick={(ev) => handleOnClick(ev)}
              >
                Confirm
              </button>
            </form>
          </div>
        )}
      </>
    </main>
  );
}

export default OrderEditStatusForm;
