import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { userProducts } from "../App"


export default function ProductCard({ product }) {

    const [open, setIsOpen] = React.useState(false);

    const openForm = () => setIsOpen(true);

    const [clientName, setClientName] = useState("");
    const [clientNumber, setClientNumber] = useState("");
    const [comment, setComment] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let pro = {
            product_id: product['id'],
            client_name: clientName,
            client_number: clientNumber,
            comment: [{content:comment, time:Date()}]
        };
        userProducts.push(pro);
        console.log(userProducts);
    }

    return (
        <div>
            <hr />
            {product['name']}
            <br />
            {product['price']}
            <br />
            <h4>Comments</h4>
            {product['comments'].map((object, i) => <p>{object}</p>)}
            <button onClick={openForm}>
                add
            </button>
            <hr />

            {open && (<Form onSubmit={handleSubmit}>
                <Form.Group size="lg">
                    <Form.Label>Client name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg">
                    <Form.Label>Client number</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={clientNumber}
                        onChange={(e) => setClientNumber(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg">
                    <Form.Label>Add comment</Form.Label>
                    <Form.Control
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit">
                    buy
                </Button>
                <Button block size="lg" onClick={() => { setIsOpen(false) }}>
                    hide
                </Button>
            </Form>)}
        </div >
    );
}