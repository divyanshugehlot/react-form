import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Registration = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
 

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    

    setname("");
    setEmail("");
    setpassword("");
    navigate("/user-data ", {
      state: {
        name,
        email,
        password,
      },
    });
  };

  return (
    <div className="form-style"  >
      <div className="container d-flex justify-content-center set-postion  ">
      <Card style={{ width: '22rem'  }}>
      <Card.Body>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NAME </Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PASSWORD</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        
      </Card.Body>
    </Card>
    </div>
    </div>
  );
};

export default Registration;
