import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";


const Addproduct = ({ onAddItem }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [thumbnailImage, setThumbnailImage] = useState("");

  const [register, setRegister] = useState({
    title: "",
    description: "",
    rating: "",
    stock: "",
    brand: "",
    price: "",
    discountPercentage: "",
  });
  const {
    title,
    description,
    rating,
    stock,
    brand,
    price,
    discountPercentage,
  } = register;

  const [baseImage, setBaseImage] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalproduct = {
      ...register,
      image: baseImage,
      thumbnail: thumbnailImage,
    };
    // eslint-disable-next-line no-unused-vars
    const fdata = await fetch(
      "https://ecommerce-sandy-omega.vercel.app/addproduct",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalproduct),
      }
    ).then((res) => res.json());

    handleClose();
    onAddItem();
    alert("Product added successfully");
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    // console.log(base64);
    // console.log(file);
  };
  const handleThumbnailChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setThumbnailImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        Add Item
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title className="text-center">Add Product</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <h1 style={{ fontFamily: "Times New Roman", textAlign: "center" }}>
              Add Product
            </h1>

            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div className="d-flex flex-direction-column">
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="image"
                    // style={{ display: "none" }}
                    onChange={handleImageChange}
                    placeholder="image"
                    // required
                  />
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="thumbnail"
                    // style={{ display: "none" }}
                    onChange={handleThumbnailChange}
                    placeholder="image"
                    // required
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <Form.Control
                    name="title"
                    value={title}
                    onChange={handleChange}
                    type="text"
                    placeholder="title"
                    required
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <Form.Control
                    name="description"
                    value={description}
                    onChange={handleChange}
                    type="text"
                    placeholder="description"
                    required
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <Form.Control
                    name="price"
                    value={price}
                    onChange={handleChange}
                    type="text"
                    required
                    placeholder="price"
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <Form.Control
                    name="discountPercentage"
                    value={discountPercentage}
                    onChange={handleChange}
                    type="text"
                    placeholder="discountPercentage"
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                    required
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <Form.Control
                    name="rating"
                    value={rating}
                    onChange={handleChange}
                    type="text"
                    placeholder="rating"
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                    required
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <Form.Control
                    name="stock"
                    value={stock}
                    onChange={handleChange}
                    type="text"
                    placeholder="stock"
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                    required
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <Form.Control
                    name="brand"
                    value={brand}
                    onChange={handleChange}
                    type="text"
                    placeholder="brand"
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                    required
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Row
                xs={4}
                className="d-flex align-items-center justify-content-start"
              ></Row>
            </Form.Group>
            {/* <Button
              type="submit"
              style={{
                backgroundColor: "#00B0B5 ",
                padding: "10px 30px",
              }}
            >
              Create Account
            </Button> */}
            <Form.Group as={Col}>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" style={{float:"right"}}>
                Add Item
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Addproduct;
