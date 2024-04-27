import React, { useRef, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BiLock } from "react-icons/bi";
import { TbGridDots } from "react-icons/tb";
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const [baseImage, setBaseImage] = useState("");
  const fileInputRef = useRef(null);

  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    confirmpassword: "",
  });

  const {
    firstName,
    lastName,
    username,
    email,
    phone,
    password,
    confirmpassword,
  } = register;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const finaldata = {
      ...register,
      image: baseImage,
    };
    // console.log(finaldata);
    // eslint-disable-next-line no-unused-vars
    const fdata = await fetch(
      "https://ecommerce-git-main-sukumarae5s-projects.vercel.app/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finaldata),
      }
    )
    setTimeout(()=>{
      navigate("/login")
    },1000)
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    console.log(base64);
    console.log(file);
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

  const iconchange = () => {
    fileInputRef.current.click();
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center p-5"
      style={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <br />
      <center>
        <Card
          className="p-5"
          style={{
            width: "500px",
            borderRadius: "20px",
            backgroundColor: "white",
            border: "#00B0B5 5px solid",
          }}
        >
          <Form onSubmit={handleSubmit}>
            <h1 style={{ fontFamily: "Times New Roman" }}>REGISTER</h1>
            <center>
              {baseImage ? (
                <img
                  src={baseImage}
                  alt="Selected"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <FaUserCircle
                  size={80}
                  onClick={iconchange}
                  style={{ cursor: "pointer", color: "#00B0B5 " }}
                />
              )}
              <input
                ref={fileInputRef}
                type="file"
                name="image"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </center>
            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <CiUser
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "24px",
                      zIndex: "2",
                    }}
                  />
                  <Form.Control
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    type="text"
                    placeholder="First Name"
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <CiUser
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "24px",
                      zIndex: "2",
                    }}
                  />
                  <Form.Control
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Last Name"
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <TfiEmail
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "24px",
                      zIndex: "2",
                    }}
                  />
                  <Form.Control
                    name="email"
                    value={email}
                    onChange={handleChange}
                    type="text"
                    placeholder="Email"
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <TbGridDots
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "24px",
                      zIndex: "2",
                    }}
                  />
                  <Form.Control
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    type="text"
                    placeholder="Phone"
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <CiUser
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "24px",
                      zIndex: "2",
                    }}
                  />
                  <Form.Control
                    name="username"
                    value={username}
                    onChange={handleChange}
                    type="text"
                    placeholder="Username"
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <BiLock
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "24px",
                      zIndex: "2",
                    }}
                  />
                  <Form.Control
                    name="password"
                    value={password}
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Col sm="12">
                <div style={{ position: "relative" }}>
                  <BiLock
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "24px",
                      zIndex: "2",
                    }}
                  />
                  <Form.Control
                    name="confirmpassword"
                    value={confirmpassword}
                    onChange={handleChange}
                    type="password"
                    placeholder="Confirm Password"
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                  />
                </div>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 my-4">
              <Row
                xs={4}
                className="d-flex align-items-center justify-content-start"
              >
                <Col>
                  <Form.Check
                    value="male"
                    type="radio"
                    label="Male"
                    name="gender"
                    id="male"
                    className="mr-3"
                    onChange={handleChange}
                    style={{ color: "black" }}
                  />
                </Col>
                <Col>
                  <Form.Check
                    value="female"
                    onChange={handleChange}
                    type="radio"
                    label="Female"
                    name="gender"
                    id="female"
                    style={{ color: "black" }}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Button
              type="submit"
              style={{
                backgroundColor: "#00B0B5 ",
                padding: "10px 30px",
              }}
            >
              Create Account
            </Button>
          </Form>
        </Card>
      </center>
    </div>
  );
};

export default Register;
