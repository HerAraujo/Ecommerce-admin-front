import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function NewAdmin() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const adminStore = useSelector((state) => state);
  const [apiStatus, setApiStatus] = React.useState();

  const navigate = useNavigate();
  const createAdmin = async (event) => {
    event.preventDefault();

    try {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/admin`,
        headers: {
          Authorization: `Bearer ${adminStore.token}`,
        },
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        },
      });
      navigate("/admins");
    } catch (err) {
      setApiStatus(err.response.status);
    }
  };
  return (
    <div className="col-12 d-flex align-items-center justify-content-center">
      <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
        <div className="text-center text-md-center mb-4 mt-md-0">
          <h1 className="mb-0 h3">New Administrator</h1>
        </div>

        <form className="mt-4 text-start" onSubmit={(event) => createAdmin(event)}>
          <div className="form-group mb-4">
            <label htmlFor="firstname">Firstname</label>
            <div className="input-group">
              <input
                type="text"
                onChange={(event) => setFirstname(event.target.value)}
                className="form-control"
                id="firstname"
                value={firstname}
                autoFocus
                required
              />
            </div>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="lastname">Lastname</label>
            <div className="input-group">
              <input
                type="text"
                onChange={(event) => setLastname(event.target.value)}
                className="form-control"
                id="lastname"
                value={lastname}
                autoFocus
                required
              />
            </div>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email">Email</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <svg
                  className="icon icon-xs text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </span>
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
                id="email"
                value={email}
                autoFocus
                required
              />
            </div>
            {apiStatus === 409 && (
              <div className="text-danger fw-bold mt-1 small">Email already exists</div>
            )}
          </div>

          <div className="form-group">
            <div className="form-group mb-4">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon2">
                  <svg
                    className="icon icon-xs text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <input
                  type="password"
                  onChange={(event) => setPassword(event.target.value)}
                  className="form-control"
                  id="password"
                  value={password}
                  required
                />
              </div>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-gray-800">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewAdmin;
