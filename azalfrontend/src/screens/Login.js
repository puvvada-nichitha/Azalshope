import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { BiLock } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { Button, Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginRedux } from "../redux/userslice/userslice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const adminuser = process.env.REACT_APP_ADMIN_USERNAME;
  const adminpassword = process.env.REACT_APP_ADMIN_PASSWORD;

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [sign, setSign] = useState({
    username: "",
    password: "",
  });
  const { username, password } = sign;

  const changefun = async (e) => {
    await setSign({ ...sign, [e.target.name]: e.target.value });
  };

  const subm = async (e) => {
    e.preventDefault();
    if (username === adminuser && password === adminpassword) {
      alert("Logged as Admin ");
      const fetchdata = await fetch(
        "https://ecommerce-sandy-omega.vercel.app/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sign),
        }
      ).then((res) => res.json());
      dispatch(loginRedux(fetchdata));
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      if (username && password) {
        const fetchdata = await fetch(
          "https://ecommerce-sandy-omega.vercel.app/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sign),
          }
        ).then((res) => res.json());
        dispatch(loginRedux(fetchdata));
        setTimeout(() => {
          navigate("/");
        }, 1000);

        if (fetchdata.message) {
          alert(fetchdata.message);
        }
      }
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <center>
        <Card
          className="p-5 "
          style={{
            width: "500px",
            height: "650px",
            borderRadius: "20px",
            backgroundColor: "white",
            border: "#00B0B5 3px solid",
          }}
        >
          <Form onSubmit={subm}>
            <h1 style={{ fontFamily: "Times New Roman" }}>Login</h1>
            <br />
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
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
                    name="username"
                    value={username}
                    type="text"
                    placeholder="Username"
                    onChange={changefun}
                    style={{ paddingLeft: "40px", borderRadius: "10px" }}
                  />
                </div>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
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
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={changefun}
                    style={{ paddingLeft: "50px", borderRadius: "10px" }}
                  />
                </div>
              </Col>
            </Form.Group>
            <Row>
              <Col sm={{ span: 5, offset: 7 }} className="text-end">
                <span style={{ fontSize: "18px", whiteSpace: "nowrap" }}>
                  Forget password?
                </span>
              </Col>
            </Row>
            <br />
            <Button
              className="btn btn-secondary"
              style={{
                padding: "5px 30px",
                fontSize: "20px",
                backgroundColor: "#00B0B5",
                border: "skyblue",
              }}
              type="submit"
            >
              Login
            </Button>
            <br />
            <br />
            <span style={{ fontSize: "20px" }}>or</span>
            <br />
            <br />
            <Container className="d-flex justify-content-center">
              <Link className="mx-3">
                <FaFacebook color="darkblue" size={30} />
              </Link>
              <Link className="mx-3">
                <FcGoogle size={30} />
              </Link>
              <Link className="mx-3">
                <ImTwitter color="skyblue" size={30} />
              </Link>
            </Container>
            <br />
            <br />
            <p style={{ fontSize: "18px" }}>New User? Create your Account</p>
            <Link to="/register" style={{ fontSize: "20px" }}>
              Register Now
            </Link>
          </Form>
        </Card>
      </center>
    </div>
  );
};

export default Login;
