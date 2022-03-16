
import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {

  let navigate = useNavigate();
  function handleCairo(){
    navigate('/cairo');
  }
  function handleGiza(){
    navigate('/cairo');
}
function handlefollowup(){
      navigate('/followup')
}

  return (
    <div>
        <h1>Home Page</h1>
      <Button onClick={handleCairo}>
        Cairo
      </Button>
      <br/>
      <Button onClick={handleGiza}>
        Giza
      </Button>
      <br/>
      <Button onClick={handlefollowup}>
        Follow up
      </Button>
    </div>
  );
}

