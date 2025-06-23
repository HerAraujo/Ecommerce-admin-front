import React from "react";

function Grid() {
  return (
    <main className="content text-start">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <h2 className="h4">Categories</h2>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <a
            href="#"
            className="btn btn-sm btn-gray-800 d-inline-flex align-items-center"
          >
            <svg
              className="icon icon-xs me-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            New Plan
          </a>
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
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
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
              <th className="border-gray-200">Bill For</th>
              <th className="border-gray-200">Issue Date</th>
              <th className="border-gray-200">Due Date</th>
              <th className="border-gray-200">Total</th>
              <th className="border-gray-200">Status</th>
              <th className="border-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="#" className="fw-bold">
                  456478
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 May 2020</span>
              </td>
              <td>
                <span className="fw-normal">1 Jun 2020</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-warning">Due</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      className="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" className="fw-bold">
                  456423
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Apr 2020</span>
              </td>
              <td>
                <span className="fw-normal">1 May 2020</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      className="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" className="fw-bold">
                  456420
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Mar 2020</span>
              </td>
              <td>
                <span className="fw-normal">1 Apr 2020</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      className="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" className="fw-bold">
                  456421
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Feb 2020</span>
              </td>
              <td>
                <span className="fw-normal">1 Mar 2020</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      className="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" className="fw-bold">
                  456420
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Jan 2020</span>
              </td>
              <td>
                <span className="fw-normal">1 Feb 2020</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      className="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" className="fw-bold">
                  456479
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Dec 2019</span>
              </td>
              <td>
                <span className="fw-normal">1 Jan 2020</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      className="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" className="fw-bold">
                  456478
                </a>
              </td>
              <td>
                <span className="fw-normal">Platinum Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Nov 2019</span>
              </td>
              <td>
                <span className="fw-normal">1 Dec 2019</span>
              </td>
              <td>
                <span className="fw-bold">$799,00</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      className="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" className="fw-bold">
                  453673
                </a>
              </td>
              <td>
                <span className="fw-normal">Gold Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Oct 2019</span>
              </td>
              <td>
                <span className="fw-normal">1 Nov 2019</span>
              </td>
              <td>
                <span className="fw-bold">$533,42</span>
              </td>
              <td>
                <span className="fw-bold text-danger">Cancelled</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      className="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" className="fw-bold">
                  456468
                </a>
              </td>
              <td>
                <span className="fw-normal">Gold Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Sep 2019</span>
              </td>
              <td>
                <span className="fw-normal">1 Oct 2019</span>
              </td>
              <td>
                <span className="fw-bold">$533,42</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td>
                <div className="btn-group">
                  <button
                    className="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="icon icon-sm">
                      <span className="fas fa-ellipsis-h icon-dark"></span>
                    </span>
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <div className="dropdown-menu py-0">
                    <a className="dropdown-item rounded-top" href="#">
                      <span className="fas fa-eye me-2"></span>View Details
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="fas fa-edit me-2"></span>Edit
                    </a>
                    <a
                      className="dropdown-item text-danger rounded-bottom"
                      href="#"
                    >
                      <span className="fas fa-trash-alt me-2"></span>Remove
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <a href="#" className="fw-bold">
                  456478
                </a>
              </td>
              <td>
                <span className="fw-normal">Flexible Subscription Plan</span>
              </td>
              <td>
                <span className="fw-normal">1 Aug 2019</span>
              </td>
              <td>
                <span className="fw-normal">1 Sep 2019</span>
              </td>
              <td>
                <span className="fw-bold">$233,42</span>
              </td>
              <td>
                <span className="fw-bold text-success">Paid</span>
              </td>
              <td></td>
            </tr>
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
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
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
      <div
        className="theme-settings card bg-gray-800 pt-2 collapse"
        id="theme-settings"
      ></div>
    </main>
  );
}

export default Grid;
