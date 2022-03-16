
import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function CarioPage() {

    let navigate = useNavigate();
    function handleClick() {
        navigate('/allproducts')
    }
   
    return (
        <div>
            <h1>Home Page</h1>
            <Button onClick={handleClick}>
                5th settlement
            </Button>
            <br />
            <Button onClick={handleClick}>
                Mostaqbal Cirty
            </Button>
            <br />
        </div>
    );
}

