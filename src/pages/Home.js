import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="text-center mt-5">
      <h1>Welcome to Panda Cafe!</h1>
      <p>Your perfect spot for desserts, beverages, and snacks!</p>
      <Button as={Link} to="/menu" variant="primary">Explore Menu</Button>
    </Container>
  );
}

export default Home;
