import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const menuItems = [
 
  { id: 2, name: "Chocolate Shake", price: 1160, image: "https://breadsandsweets.com/wp-content/uploads/2022/07/chocolate-milkshake-sq-1-of-1.jpg " },
  { id: 3, name: "Oreo Shake", price: 2000, image: "https://bing.com/th?id=OSK.0f0dac3c150ac07435efaef240b6b238 " },
  { id: 4, name: "Espresso", price: 1900, image: "https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg " },
  { id: 5, name: "American Latte", price: 3000, image: " https://www.thespruceeats.com/thmb/O12Dlwy9ieJkVXpwg8FJN9z21xQ=/1500x1000/filters:fill(auto,1)/GettyImages-589328366-58b2e1125f9b5860466b4115.jpg" },
  { id: 6, name: "Mocha", price: 2300, image: " https://fancifuleats.com/wp-content/uploads/2022/09/dark-chocolate-mocha-3-1.jpg" },
  { id: 7, name: "Cappucino", price: 1000, image: " https://cdn.pixabay.com/photo/2016/08/21/15/24/cappuccino-1609903_960_720.jpg" },
  { id: 8, name: "Berry Blast ", price: 2800, image: " https://blog.hamiltonbeachcommercial.com/hs-fs/hubfs/Berry_Blast.jpg?width=875&name=Berry_Blast.jpg" },
  { id: 9, name: "Tropical Paradise ", price: 4000, image: " https://i.pinimg.com/736x/3b/6b/92/3b6b9231bfb3e3d727a16a0eaa25b9fc.jpg" },
  { id: 10, name: "Green Smoothie ", price: 1200, image: " https://th.bing.com/th/id/OIP.r140CFWgNPEhnU1GCtKZcQHaJz?w=186&h=246&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 11, name: "Black Tea ", price: 3200, image: " https://th.bing.com/th/id/OIP.TR2dqRWtnf9IAsRI7LOASwHaE8?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 12, name: "Green Tea ", price: 1200, image: "https://th.bing.com/th/id/OIP.aXLp3NPRtcMf1BClr0PrNwHaEK?w=328&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7 " },
  { id: 13, name: "Herbal Tea", price: 1160, image: "https://th.bing.com/th/id/OIP.5nLH7UTCRocBcTGPWf7v1gHaFK?w=275&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7 " },
   { id: 1, name: "Gadbad Ice Cream", price: 800, image: "https://th.bing.com/th/id/OIP.662CnvYkA3jn2XWp3EovfwHaE7?rs=1&pid=ImgDetMain" },
   { id: 14, name: "Iced Latte ", price: 960, image: "https://th.bing.com/th/id/OIP.H-8pS-VZPegtuKRGlY83DQHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
];

function Menu() {
  return (
    <Container className="mt-4">
      <h2>Our Menu</h2>
      <Row>
        {menuItems.map(item => (
          <Col md={4} key={item.id}>
            <Card className="mb-3">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>₹{item.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Menu;
