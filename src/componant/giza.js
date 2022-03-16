
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function GizaPage() {

  let navigate = useNavigate();
  function handleCairo(){

  }
  function handleGiza(){
      
}
function handlefollowup(){
      
}

  return (
    <div>
        <h1>Home Page</h1>
      <Button onClick={handleCairo}>
      Sheikh Zayed
      </Button>
      <br/>
      <Button onClick={handleCairo}>
      6th of October
      </Button>
    </div>
  );
}

