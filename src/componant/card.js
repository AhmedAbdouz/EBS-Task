import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { userProducts } from "../App";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CardPage() {
    let params = useParams();
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState(userProducts[params.cardIdx]['comment']);

    function handleSubmit(e){
        setComments(userProducts[params.cardIdx]['comment']);
        userProducts[params.cardIdx]['comment'] = [...comments, {content:newComment, time:Date()}]
        e.preventDefault();
    }
    return (
        <div>
            <h3>Card {params.cardIdx}</h3>

            <hr />
            Client Name : {userProducts[params.cardIdx]['client_name']}
            <br />
            Client Number :{userProducts[params.cardIdx]['client_number']}
            <br />
            Product ID: {userProducts[params.cardIdx]['product_id']}
            <br />
            Your comment(s):
            {userProducts[params.cardIdx]['comment'].map((object, i) => <p>{object['content']}/{object['time']}</p>)}
            <hr></hr>


            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg">
                    <Form.Label>Add  new comment</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit">
                    Save
                </Button>
            </Form>
        </div>
    );
}