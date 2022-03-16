import React from "react";
import { userProducts } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function FollowUpPage() {
    // let history = useHistory();
    let navigate = useNavigate();
    let params = useParams();
    function handleclick(index) {

        navigate(`/card/${index}`);
    }
    function getHistory(index) {
        return (

            <button onClick={(e) => { handleclick(index) }}>
                Card {index}

            </button>

        );
    }
    return (
        <div>
            <h3>Your History</h3>
            {/* {all_products} */}

            {userProducts.map((object, i) => getHistory(i))}
            {/* {all_products.map((object, i) => <p>{object.client_name}</p>)} */}
        </div>
    );
}