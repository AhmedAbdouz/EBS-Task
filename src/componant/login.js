
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [corID, setCorID] = useState("");
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/home");
  }

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg">
          <Form.Label>Corporate ID</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={corID}
            onChange={(e) => setCorID(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

