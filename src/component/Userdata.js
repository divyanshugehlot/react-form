import React from 'react'
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
function Userdata() {
  let location = useLocation();
  return (
    <div>
    <div className="container d-flex justify-content-center set-postion">
    <Card style={{ width: '22rem'  }}>
      <Card.Body>
  <ul class="list-group">
  <li class="list-group-item">Name: {location.state.name}</li>
  <li class="list-group-item">Email: {location.state.email}</li>
  <li class="list-group-item">Password : {location.state.password}</li>
  
</ul>
</Card.Body>
    </Card>
    </div>
  </div>
  )
}

export default Userdata