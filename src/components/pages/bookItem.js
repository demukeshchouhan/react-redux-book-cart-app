import React from 'react';
import { Well, Row, Col, Button } from "react-bootstrap";

export default (props) => {
    return (
        <Well className="cart_item">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <h6>{props.price}</h6>
            <Button bsStyle="primary">Add to cart</Button>
        </Well>
    )
}
