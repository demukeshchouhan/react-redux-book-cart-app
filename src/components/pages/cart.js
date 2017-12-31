import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartAction from "../../actions";
import { Well, Panel, FormControl, FormGroup, ControlLabel, Row, Col, Button } from "react-bootstrap";

class Cart extends Component {
    renderEmptyCart() {
        return(
            <div></div>
        );
    }

    renderCart() {
        console.log(this.props.cart);
        const cartItemList = this.props.cart.map((cartItem) => {
            return (
                <Panel key={cartItem.id}>
                    <Row>
                    <Col xs={12} sm={4}>
                        <h6>{cartItem.title}</h6>
                    </Col>
                    </Row>
                </Panel>
            );
        });
        return(
            <Panel header="Cart" bsStyle="primary">
                {cartItemList}
            </Panel>
        );
    }
    render() {
        if(this.props.cart.length > 0){
            return this.renderCart();
        }else {
            return this.renderEmptyCart();
        }
    }
}



const stateProps = (state) => ({
	cart : state.cartReducer.cart
});

const disptachProps = (dispatch) => ({
	actions : bindActionCreators(cartAction, dispatch)
});


export default connect(stateProps, disptachProps)(Cart);
