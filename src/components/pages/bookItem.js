import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import bookAction from "../../actions/bookAction";
import * as cartAction from "../../actions/cartAction";
import { Well, Row, Col, Button } from "react-bootstrap";


class BookItem extends Component {
    handleCart() {
        const book = [
            {
                id : this.props.id,
                title : this.props.title,
                description : this.props.description
            }
        ]
        this.props.actions.addToCart(book);
        console.log(this.props.cart);
    }
	render() {
		return (
            <Well className="cart_item">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <h6>{this.props.price}</h6>
                <Button 
                    bsStyle="primary"
                    onClick={() => this.handleCart()}
                >
                Add to cart</Button>
            </Well>
		)
	}
}

const stateProps = (state) => ({
    books : state.bookReducer.books,
    cart : state.cartReducer.cart
});

const disptachProps = (dispatch) => ({
	actions : bindActionCreators(cartAction, dispatch)
});


export default connect(stateProps, disptachProps)(BookItem);