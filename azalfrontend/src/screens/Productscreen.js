import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"; // Moved useDispatch here
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { addcartitemRedux } from "../redux/productsslice/productslice";

const Productscreen = () => {
  const dispatch = useDispatch();

  const [thumbnailImage, setThumbnailImage] = useState("");

  const { id } = useParams();
  const product = useSelector((state) => state.products.oneProduct);
  console.log(product)
  

  

  const thumbnailclick = () => {
    setThumbnailImage();
  };

  const additemHandlersingle = () => {
    dispatch(addcartitemRedux(product));
  };

  // Function to generate star rating symbols based on the rating number
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
    <div style={{paddingTop:'20px'}}>
       <Container fluid>
        <Row>
          <Col md={6} className="position-relative">
            <Card style={{position:"relative",height:"100vh"}}>
              <Card.Body>
                <Row >
                  <Col xs={3} md={2} lg={1}>
                    <img src={product.images} onClick={thumbnailclick} style={{ width: "50px", height: "50px", marginBottom: "10px", cursor: "pointer" }}/>
                  </Col>
                  <Col xs={9} md={10} lg={11}>
                    <img
                      src={thumbnailImage || product.thumbnail}
                      alt="Main Image"
                      style={{ width: '100%', height: '80vh', paddingTop: '20px' }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ height: '100vh' }}>
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title style={{color:'black'}}>Title: {product.title}</Card.Title>
                  <Card.Text style={{color:'green'}}>Description: {product.description}</Card.Text>
                  <Card.Text style={{color:'gray'}}>
                    Rating: 
                    <span style={{color:'orange'}}>
                      {renderRating(product.rating)}
                    </span>
                    <span>{product.rating}</span>
                  </Card.Text>
                  <Card.Text style={{color:'orange'}}>Stock: {product.stock}</Card.Text>
                  <Card.Text style={{color:'blue'}}>Brand: {product.brand}</Card.Text>

                  <Card.Text style={{color:'red', fontSize:'20px'}}>Discount percentage: {product.discountPercentage}%</Card.Text>
                  <Card.Text style={{color:'green'}}>Price:  {product.price}</Card.Text>
                  <Row><Col md={6} sm={6}>
                  <Button style={{ width: '150px'}} onClick={additemHandlersingle }>Add to cart</Button><br/>
                  </Col><Col md={6} sm={6}>
                  <Button style={{width:'150px'}} > Buy Now</Button>
                  </Col></Row>
                </div>
               
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Productscreen;
