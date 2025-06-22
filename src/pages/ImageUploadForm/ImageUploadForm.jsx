import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function ImageUploadForm() {
  const navigate = useNavigate();
  const adminStore = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const dataImage = new FormData();
    dataImage.append("image", data.file[0]);
    dataImage.append("title", data.title);

    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/admin/images`,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${adminStore.token}`,
        },
        data: dataImage,
      });
      navigate("/images");
    } catch (err) {}
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
                    <h1 className="mb-0 h3">New image</h1>
                  </div>
                  <form className="mt-4 text-start" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-4">
                      <label htmlFor="name">Title</label>
                      <div className="input-group">
                        <input
                          {...register("title", { required: true })}
                          type="text"
                          className="form-control"
                          id="title"
                          name="title"
                          autoFocus
                        />
                      </div>
                      {errors.title && (
                        <span className="text-danger fw-bold mt-1 small">Title is required</span>
                      )}
                    </div>
                    <div className="form-group mb-4">
                      <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">
                          File
                        </label>
                        <input
                          {...register("file", { required: true })}
                          className="form-control"
                          type="file"
                          id="file"
                          name="file"
                        />
                      </div>
                      {errors.file && (
                        <span className="text-danger fw-bold mt-1 small">File is required</span>
                      )}
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

export default ImageUploadForm;
