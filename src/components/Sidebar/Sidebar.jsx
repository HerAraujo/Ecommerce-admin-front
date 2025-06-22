import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();

  const adminStore = useSelector((state) => state);
  return (
    <>
      <nav
        id="sidebarMenu"
        className="sidebar d-lg-block bg-gray-800 text-white collapse"
        data-simplebar
      >
        <div className="sidebar-inner px-4 pt-3">
          <ul className="nav flex-column pt-3 pt-md-0">
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
            <li className="nav-item">
              <Link to={"/category"} className={"nav-link d-flex justify-content-between"}>
                <span>
                  <span className="sidebar-text">Categories</span>
                </span>
              </Link>
            </li>
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
            <li className="nav-item">
              <Link to={"/products"} className={"nav-link d-flex justify-content-between"}>
                <span>
                  <span className="sidebar-text">Products</span>
                </span>
              </Link>
            </li>
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
            <li className="nav-item">
              <Link to={"/admins"} className={"nav-link d-flex justify-content-between"}>
                <span>
                  <span className="sidebar-text">Administrators</span>
                </span>
              </Link>
            </li>
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
            <li className="nav-item">
              <Link to={"/orders"} className={"nav-link d-flex justify-content-between"}>
                <span>
                  <span className="sidebar-text">Orders</span>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              {adminStore.token && (
                <a
                  id="btn-logout"
                  onClick={() =>
                    dispatch({
                      type: "LOGOUT",
                      payload: "",
                    })
                  }
                  className="btn d-flex align-items-center justify-content-center btn-upgrade-pro"
                >
                  <span>Logout</span>
                </a>
              )}
              {!adminStore.token && (
                <Link to="/">
                  <a
                    id="btn-logout"
                    className="btn d-flex align-items-center justify-content-center btn-upgrade-pro"
                  >
                    <span>Login</span>
                  </a>
                </Link>
              )}
            </li>
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
            <li className="nav-item">
              <Link to={"/images"} className={"nav-link d-flex justify-content-between"}>
                <span>
                  <span className="sidebar-text">Images</span>
                </span>
              </Link>
            </li>
            <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
