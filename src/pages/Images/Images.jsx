import React, { useEffect, useState } from "react";
import "./Images.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Images() {
  const [images, setImages] = useState(null);
  const adminStore = useSelector((state) => state);

  const getImages = async () => {
    const response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/admin/images`,
      headers: {
        Authorization: `Bearer ${adminStore.token}`,
      },
    });
    setImages(response.data);
  };

  useEffect(() => {
    getImages();
  }, []);

  const handleDeleteClick = async (id) => {
    const response = await axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}/admin/images/${id}`,
      headers: {
        Authorization: `Bearer ${adminStore.token}`,
      },
    });
    getImages();
  };

  return (
    <main className="content text-start">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h2 className="h4">Images</h2>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            to={"/upload-image"}
            className={"btn btn-sm btn-gray-800 d-inline-flex align-items-center"}
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
            New image
          </Link>
        </div>
      </div>

      <div className="card card-body border-0 shadow table-wrapper table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="border-gray-200">Image</th>
              <th className="border-gray-200">Title</th>
            </tr>
          </thead>
          <tbody>
            {images &&
              images.map((image) => (
                <tr key={image.id} style={{ height: "80px" }}>
                  <td>
                    <img
                      className="img-thumbnail rounded-circle"
                      src={`${process.env.REACT_APP_BUCKET_URL}/${image.name}`}
                      alt={image.title}
                      style={{ height: "100px", width: "100px", objectFit: "cover" }}
                    />
                  </td>

                  <td>
                    <span className="fw-normal">{image.title}</span>
                  </td>
                  <td className="" onClick={() => handleDeleteClick(image.id)}>
                    <button className="btn btn-sm btn-gray-800 d-inline-flex align-items-center">
                      Delete
                    </button>
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

export default Images;
