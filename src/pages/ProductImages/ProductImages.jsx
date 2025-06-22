import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductImages.css";
import { useSelector } from "react-redux";

function ProductImages() {
  const [product, setProduct] = React.useState(null);
  const [availableImages, setAvailableImages] = React.useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const adminStore = useSelector((state) => state);

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
    };

    const getImages = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/admin/images`,
        headers: {
          Authorization: `Bearer ${adminStore.token}`,
        },
      });

      setAvailableImages(response.data);
    };

    getProduct();
    getImages();
  }, []);

  const handleCurrentImageClick = (currentImage) => {
    setProduct({
      ...product,
      images: product.images.filter((image) => image.name !== currentImage.name),
    });

    if (!availableImages.some((image) => image.name === currentImage.name)) {
      availableImages.push(currentImage);
      setAvailableImages([...availableImages]);
    }
  };

  const handleAvailableImageClick = (image) => {
    if (!product.images) product.images = [];

    product.images.push(image);

    setProduct({
      ...product,
    });

    for (const productImage of product.images) {
      setAvailableImages([...availableImages.filter((image) => image.name !== productImage.name)]);
    }
  };

  const handleClick = async (ev) => {
    ev.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/admin/products/${product.id}/images`,
        headers: {
          Authorization: `Bearer ${adminStore.token}`,
        },
        data: {
          images: product.images,
        },
      });

      navigate("/products");
    } catch (err) {}
  };
  return (
    <main className="content text-start">
      {product && (
        <>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="d-block mb-4 mb-md-0">
              <h2 className="h4">{product.name}</h2>
            </div>
          </div>
          <div className="card card-body border-0 shadow table-wrapper ">
            <div className="row">
              <h5 className="mb-4">Current images</h5>
              {product.images &&
                product.images.map((image) => (
                  <div key={image.name} className="col-2 mb-4">
                    <img
                      className="img-thumbnail rounded-circle image-gallery"
                      src={`${process.env.REACT_APP_BUCKET_URL}/${image.name}`}
                      alt={image.title}
                      style={{ height: "150px", width: "150px", objectFit: "cover" }}
                      onClick={() => handleCurrentImageClick(image)}
                    />
                  </div>
                ))}
              <div className="row">
                {availableImages && (
                  <div>
                    <h5 className=" mb-4">Available images</h5>
                    <div className="row ">
                      {product.images
                        ? availableImages.map(
                            (image) =>
                              !product.images.some((item) => item.name === image.name) && (
                                <div key={image.name} className="col-2 mb-5">
                                  <img
                                    className="img-thumbnail rounded-circle image-gallery"
                                    src={`${process.env.REACT_APP_BUCKET_URL}/${image.name}`}
                                    alt={image.title}
                                    style={{ height: "150px", width: "150px", objectFit: "cover" }}
                                    onClick={() => handleAvailableImageClick(image)}
                                  />
                                </div>
                              ),
                          )
                        : availableImages.map((image) => (
                            <div key={image.name} className="col-2 mb-5">
                              <img
                                className="img-thumbnail rounded-circle image-gallery"
                                src={`${process.env.REACT_APP_BUCKET_URL}/${image.name}`}
                                alt={image.title}
                                style={{ height: "150px", width: "150px", objectFit: "cover" }}
                                onClick={() => handleAvailableImageClick(image)}
                              />
                            </div>
                          ))}

                      <div>
                        <button
                          type="submit"
                          className="btn btn-gray-800"
                          onClick={(ev) => handleClick(ev)}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default ProductImages;
