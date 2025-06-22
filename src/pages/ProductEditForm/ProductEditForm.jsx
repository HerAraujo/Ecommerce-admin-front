import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function ProductEditForm() {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = React.useState(null);
  const [featured, setFeatured] = React.useState();
  const [categories, setCategories] = React.useState();
  const [apiStatus, setApiStatus] = React.useState();
  const [name, setName] = React.useState();
  const [slug, setSlug] = React.useState();
  const slugify = require("slugify");
  const adminStore = useSelector((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/products/${params.slug}`,
        headers: {
          Authorization: `Bearer ${adminStore.token}`,
        },
      });

      setProduct(response.data);
      setName(response.data.name);
      setSlug(response.data.slug);
      setFeatured(response.data.featured);
    };

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

    getProduct();
    getCategories();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios({
        method: "PUT",
        url: `${process.env.REACT_APP_API_URL}/admin/products/${product.id}`,
        headers: {
          Authorization: `Bearer ${adminStore.token}`,
        },
        data: {
          name: name,
          description: data.description,
          price: data.price,
          stock: data.stock,
          featured: featured,
          slug: slug,
          categoryId: data.categoryId,
        },
      });
      navigate("/products");
    } catch (err) {
      setApiStatus(err.response.status);
    }
  };

  return (
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
                  <h1 className="mb-0 h3">Edit</h1>
                </div>

                {product && (
                  <form action="#" className="mt-4 text-start" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group mb-4">
                          <label htmlFor="name">Name</label>
                          <div className="input-group">
                            <input
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
                              Product already exists
                            </div>
                          )}
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="price">Price</label>
                          <div className="input-group">
                            <input
                              {...register("price", { required: true })}
                              type="number"
                              step="any"
                              className="form-control"
                              id="price"
                              name="price"
                              autoFocus
                              defaultValue={product.price}
                            />
                          </div>
                          {errors.price && (
                            <span className="text-danger fw-bold small">Price is required</span>
                          )}
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group mb-4">
                          <div className="mb-3">
                            <label htmlFor="slug">Slug</label>
                            <input
                              {...register("slug")}
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
                          <label htmlFor="stock">Stock</label>
                          <div className="input-group">
                            <input
                              {...register("stock", { required: true })}
                              type="number"
                              className="form-control"
                              id="stock"
                              name="stock"
                              autoFocus
                              defaultValue={product.stock}
                            />
                          </div>
                          {errors.stock && (
                            <span className="text-danger fw-bold small">Stock is required</span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-4">
                          <div className="my-4">
                            <label htmlFor="textarea">Description</label>
                            <textarea
                              {...register("description", { required: true })}
                              className="form-control"
                              id="description"
                              name="description"
                              rows="4"
                              defaultValue={product.description}
                            ></textarea>
                            {errors.description && (
                              <span className="text-danger fw-bold small">
                                Description is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="my-1 me-2" htmlFor="category">
                            Category
                          </label>
                          {categories && (
                            <select
                              {...register("categoryId", {
                                required: true,
                              })}
                              className="form-select"
                              id="category"
                              name="categoryId"
                              aria-label="Default select example"
                            >
                              {!categories.some(
                                (category) => category.id === product.categoryId,
                              ) && (
                                <option selected key={0} value={product.categoryId}>
                                  {`${product.category.name} (no active)`}
                                </option>
                              )}

                              {categories &&
                              categories.some((category) => category.id === product.categoryId)
                                ? categories.map((category) =>
                                    category.id === product.categoryId ? (
                                      <option selected key={category.id} value={category.id}>
                                        {category.name}
                                      </option>
                                    ) : (
                                      <option key={category.id} value={category.id}>
                                        {category.name}
                                      </option>
                                    ),
                                  )
                                : categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                      {category.name}
                                    </option>
                                  ))}
                            </select>
                          )}
                          {errors.categoryId && (
                            <span className="text-danger fw-bold small">Category is required</span>
                          )}
                        </div>

                        <div className="form-group mb-4">
                          <div className="form-check">
                            <input
                              {...register("featured")}
                              className="form-check-input"
                              type="checkbox"
                              id="featured"
                              name="featured"
                              value={featured}
                              checked={featured}
                              onChange={() => setFeatured(!featured)}
                            />
                            <label className="form-check-label" htmlFor="featured">
                              Featured
                            </label>
                          </div>
                        </div>
                        <div className="d-grid">
                          <button type="submit" className="btn btn-gray-800">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductEditForm;
