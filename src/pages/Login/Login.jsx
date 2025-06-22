import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/admin/tokens`,
        data: {
          email,
          password,
        },
      });
      dispatch({
        type: "LOGIN",
        payload: response.data,
      });

      navigate("/admins");
    } catch (err) {
      err.response.status === 400 ? alert("Incorrect email or password") : alert(err.response);
    }
  };

  return (
    <>
      <main>
        <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
          <div className="container">
            <div
              className="row justify-content-center form-bg-image"
              data-background-lg="../../assets/img/illustrations/signin.svg"
            >
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h1 className="mb-0 h3">Login</h1>
                  </div>
                  <form onSubmit={(event) => handleSubmit(event)} className="mt-4 text-start">
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
                          onChange={(event) => setEmail(event.target.value)}
                          value={email}
                          type="email"
                          className="form-control"
                          id="email"
                          autoFocus
                          required
                        />
                      </div>
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
                            onChange={(event) => setPassword(event.target.value)}
                            value={password}
                            type="password"
                            className="form-control"
                            id="password"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-gray-800">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
