import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function CategoryForm() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [slug, setSlug] = React.useState();
  const [apiStatus, setApiStatus] = React.useState();
  const slugify = require("slugify");
  const adminStore = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/admin/categories`,
        headers: {
          Authorization: `Bearer ${adminStore.token}`,
        },
        data: {
          name: name,
          description: description,
          slug: slug,
        },
      });
      navigate("/category");
    } catch (err) {
      setApiStatus(err.response.status);
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
                    <h1 className="mb-0 h3">New Category</h1>
                  </div>

                  <form action="#" className="mt-4 text-start" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-4">
                      <label htmlFor="name">Name</label>
                      <div className="input-group">
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          autoFocus
                          value={name}
                          onChange={(ev) => {
                            setName(ev.target.value);
                            setSlug(slugify(ev.target.value.toLowerCase()));
                            setApiStatus(0);
                          }}
                        />
                      </div>
                      {errors.name && (
                        <span className="text-danger fw-bold mt-1 small">Name is required</span>
                      )}

                      {apiStatus === 409 && (
                        <div className="text-danger fw-bold mt-1 small">
                          Category already exists
                        </div>
                      )}
                    </div>
                    <div className="form-group mb-4">
                      <div className="mb-3">
                        <label htmlFor="slug">Slug</label>
                        <input
                          type="text"
                          id="slug"
                          className="form-control"
                          name="slug"
                          value={slug}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <div className="my-4">
                        <label htmlFor="textarea">Description</label>
                        <textarea
                          {...register("description", { required: true })}
                          className="form-control"
                          id="description"
                          name="description"
                          rows="4"
                          value={description}
                          onChange={(ev) => setDescription(ev.target.value)}
                        ></textarea>
                        {errors.description && (
                          <span className="text-danger fw-bold small">Description is required</span>
                        )}
                      </div>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-gray-800">
                        Send
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

export default CategoryForm;
