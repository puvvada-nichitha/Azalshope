import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ReactImageMagnify from 'react-image-magnify';
import { addOneProduct, addcartitemRedux } from "../redux/productsslice/productslice";

const Productscreen = () => {
  const dispatch = useDispatch();
  const [thumbnailImage, setThumbnailImage] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [magnifierSize, setMagnifierSize] = useState({
    width: 97,
    height: 97,
  });
  const cardRef = useRef(null);
  const product = useSelector((state) => state.products.oneProduct);
  const [similarProducts, setSimilarProducts] = useState([]);
  const data = useSelector((state) => state.products.allProducts);

  useEffect(() => {
    fetchSimilarProducts(product.category); 
  }, [product]);

  const fetchSimilarProducts = (category) => {
    const similarProducts = data.filter(
      (p) => p.category === category && p.id !== product.id
    );
    setSimilarProducts(similarProducts);
  };

  const additemHandlersingle = () => {
    dispatch(addcartitemRedux(product));
  };

  const thumbnailclick = () => {
    setThumbnailImage();
  };

  const handleReplaceProduct = (clickedProduct) => {
    // Update the main product with the clicked similar product
    dispatch(addOneProduct(clickedProduct));
  };

  const renderRating = (rating) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Full stars
    for (let i = 0; i < floorRating; i++) {
      stars.push(<FaStar key={i} />);
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key={floorRating} />);
    }

    // Empty stars
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={floorRating + i + 1} />);
    }

    return stars;
  };

  return (
    <div style={{ paddingBottom: "40px", paddingTop: "40px" }}>
      <Container fluid>
        <Row>
          <Col md={6} className="position-relative">
            <Card ref={cardRef} style={{ position: "relative", height: "100%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Card.Body>
                <Row>
                <Col xs={3} md={2} lg={1}>
                    <img src={product.images} onClick={thumbnailclick} style={{ width: "50px", height: "50px", marginBottom: "10px", cursor: "pointer"}} alt="img1"/>
                  </Col>
                  <Col xs={9} md={10} lg={11}>
                    <img
                      src={thumbnailImage || product.thumbnail}
                      alt="Main"
                      style={{ width: '100%', height: '80vh', paddingTop: '20px' }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ height: "100%", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title style={{ color: "black" }}>
                    Title: {product.title}
                  </Card.Title>
                  <Card.Text style={{ color: "green" }}>
                    Description: {product.description}
                  </Card.Text>
                  <Card.Text style={{ color: "gray" }}>
                    Rating:{" "}
                    <span style={{ color: "orange" }}>
                      {renderRating(product.rating)}
                    </span>
                    <span>{product.rating}</span>
                  </Card.Text>
                  <Card.Text style={{ color: "orange" }}>
                    Stock: {product.stock}
                  </Card.Text>
                  <Card.Text style={{ color: "blue" }}>
                    Brand: {product.brand}
                  </Card.Text>
                  <Card.Text style={{ color: "red", fontSize: "20px" }}>
                    Discount percentage: {product.discountPercentage}%
                  </Card.Text>
                  <Card.Text style={{ color: "green" }}>
                    Price: {product.price}
                  </Card.Text>
                 
         
                  <Button className="bg-warning" style={{width:"55%",float:"left",borderRadius:"15px"}}     onClick={additemHandlersingle}>
                     Add to Cart
                  
                  </Button>
                  <br/>
                  <br/>
                  <Button style={{ width: "55%" ,borderRadius:"15px" }} className="bg-secondary"> Buy Now</Button>
                           
               
                  </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <div style={{ paddingBottom: "20px", paddingTop: "20px" }}>

          <Row style={{ marginBottom: "40px", marginTop:"20px" }}>
            {similarProducts.map((similarProduct) => (
              <Col key={similarProduct.id} xs={6} md={3}>
                <div  style={{
          display: "grid",
          gridTemplateRows: "1fr ",
          gridTemplateColumns: "repeat( auto-fill,minmax(200px,1fr))",
          height:"100%"
        }}>

                <Card onClick={() => handleReplaceProduct(similarProduct)} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 10px 15px"  }}>
                  <Card.Body>
<center>

                    <Card.Title>
                      <img src={similarProduct.images} style={{ height: "150px", width: "150px" }} alt="No image" />
                    </Card.Title>
                    <Card.Title>{similarProduct.title}</Card.Title>
                    <Card.Text>{similarProduct.description}</Card.Text>
                    <br/>
                    <Card.Text> <div className="d-flex align-items-center justify-content-center">
            <button
              onClick={additemHandlersingle}
              className="CartBtn"
              >
              <span class="IconContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  fill="rgb(17, 17, 17)"
                  class="cart"
                  >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
              </span>
              <p class="text">Add to Cart</p>
            </button>
          </div></Card.Text>

                    </center>
                  </Card.Body>
                </Card>
                      </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Productscreen;
