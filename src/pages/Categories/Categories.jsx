import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Categories() {
  const [categories, setCategories] = useState([]);
  const adminStore = useSelector((state) => state);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/admin/categories`,
        headers: {
          Authorization: `Bearer ${adminStore.token}`,
        },
      });
      setCategories(response.data);
    };

    getCategories();
  }, []);

  const deleteCategory = async (categoryId) => {
    await axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}/admin/categories/${categoryId}`,
      headers: {
        Authorization: `Bearer ${adminStore.token}`,
      },
    });
  };

  return (
    <main className="content text-start">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h2 className="h4">Categories</h2>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            className="btn btn-sm btn-gray-800 d-inline-flex align-items-center"
            to="/newCategory"
          >
            <svg
              className="icon icon-xs me-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            New category
          </Link>
        </div>
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
              <th className="border-gray-200">Name</th>
              <th className="border-gray-200">Description</th>
              <th className="border-gray-200">Slug</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 &&
              categories.map((category) => (
                <tr key={category.id}>
                  <td>
                    <a href="#" className="fw-bold">
                      {category.id}
                    </a>
                  </td>
                  <td>
                    <Link to={`/edit-category/${category.id}`}>
                      <span className="fw-normal">{category.name}</span>
                    </Link>
                  </td>
                  <td>
                    <span className="fw-bold">
                      {" "}
                      {category.description.length > 50
                        ? (category.description = category.description.substring(0, 50) + " . . .")
                        : category.description}
                    </span>
                  </td>
                  <td>
                    <span className="fw-bold">{category.slug}</span>
                  </td>

                  {/* at first not delete category, resolve delete category with related products*/}
                  <div className="btn-toolbar mb-2 mb-md-0">
                    <button
                      onClick={() => deleteCategory(category.id)}
                      className="btn-toolbar btn-sm btn-gray-800 d-inline-flex align-items-center"
                    >
                      Delete
                    </button>
                  </div>
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

export default Categories;
