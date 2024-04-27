import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoSearchOutline } from "react-icons/io5";
import { InputGroup } from "react-bootstrap";
import { HiUser } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { BsHandbagFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../../redux/userslice/userslice";

const Header = () => {
  const [user, setUser] = useState(false);

  const userlogin = () => {
    setUser(!user);
  };
  const logindetails = useSelector((state) => state.users);
  console.log(logindetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const use = useSelector((state) => {
    return state.products.cartitem;
  });
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    userlogin();
  };
  const handlelogout = () => {
    dispatch(logoutRedux());
    setTimeout(() => {
      setIsLoggedIn(false);
      navigate("/login");
    }, 1000);
  };

  // eslint-disable-next-line no-unused-vars
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ backgroundColor: "#00B0B5" }} className="text-white">
      <div
        className="bg-warning w-full"
        style={{
          height: "53px",
          paddingTop: "20px",
          fontSize: "auto",
          flexShrink: "0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: "2",
          }}
        >
          <strong>
            <center>
              <span className="text-white text-box">
                All about NEW, All about You! Get Rs.750 Off* on Fresh Styles
              </span>
            </center>
          </strong>
        </div>
      </div>
      <Navbar expand="lg" className="justify-content-between">
        <Container fluid>
          <Navbar.Brand
            as={Link}
            to="/"
            className="text-white fw-bold mx-lg-5 fs-lg-3"
            style={{
              fontFamily: "Itim,cursive",
              fontSize: "35px",
              fontWeight: "bold",
            }}
          >
            Trend Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 mx-lg-4 my-lg-0 d-flex align-items-inital"
              style={{
                maxHeight: "300px",
                backgroundColor: "#00B0B5",
                justifyContent: "center",
              }}
              navbarScroll
            >
              <Nav.Link
                href="#action1"
                className="text-white fw-bold fs-lg-1 mx-lg-2"
              >
                WOMEN
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="text-white fw-bold fs-lg-1 mx-lg-2"
              >
                MEN
              </Nav.Link>
              <Nav.Link
                href="#action3"
                className="text-white fw-bold fs-lg-1 mx-lg-2"
              >
                KIDS
              </Nav.Link>
            </Nav>
            <Form
              className="d-flex justify-content-center position-relative"
              style={{ backgroundColor: "#00B0B5", flex: "1" }}
            >
              <InputGroup
                style={{ width: "100%", maxWidth: "400px", margin: "0 auto" }}
              >
                <Form.Control
                  style={{
                    borderRadius: "10px",
                    backgroundColor: " #00B0B5",
                    color: "white",
                    height: "50px",
                    fontSize: "20px",
                    border: `1px solid white`,
                    paddingLeft: "",
                  }}
                  type="search"
                  className="text-white placeholder-white  border-3 border-white "
                  placeholder="Search for products"
                />
                <InputGroup.Text
                  style={{
                    backgroundColor: "#00B0B5",
                    border: "none",
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: "1",
                  }}
                  className="text-white border-0 fs-lg-2"
                >
                  <IoSearchOutline size={24} />
                </InputGroup.Text>
              </InputGroup>
            </Form>
            <Nav className="mx-lg-4">
              <Nav.Link className="text-white fs-lg-2 mx-lg-2">
                <span className="icon-box">
                  <BsHandbagFill size={24} />
                </span>
                <Badge bg="warning" text="dark" pill>
                  {use.length}
                </Badge>
              </Nav.Link>
              <Nav.Link href="#heart" className="text-white fs-lg-2 mx-lg-2">
                <span className="icon-box">
                  <GoHeart size={24} />
                </span>
              </Nav.Link>
              <Nav.Link  className="text-white fs-lg-2 mx-lg-2">
                <div
                  className="d-flex flex-column"
                  style={{ position: "relative" }}
                >
                  <div>
                    <HiUser onClick={userlogin} size={24} />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "80%" /* Adjust top property here */,
                      left: "20px",
                      transform: "translateX(-50%)",
                      zIndex: 1,
                      float: "right",
                    }}
                  >
                    {logindetails.username ? (
                      <Link className="btn-warning text-white fw-bold">
                        <span onClick={handlelogout}>Logout</span>
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="btn-warning text-white fw-bold"
                      >
                        <span onClick={handleLogin}>Login</span>
                      </Link>
                    )}
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
