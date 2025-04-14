import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function SignIn() {
  return (
    <Container style={{ maxWidth: '400px' }} className="mt-4">
      <h3>Sign In</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">Sign In</Button>
      </Form>
    </Container>
  );
}

export default SignIn;
