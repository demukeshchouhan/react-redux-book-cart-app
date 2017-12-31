import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import cartAction from "../../actions";
import { findDOMNode } from "react-dom";
import { Well, Panel, FormControl, FormGroup, ControlLabel, Row, Col, Button } from "react-bootstrap";

class BooksForm extends Component {
    handleSubmit() {
        const book = [{
            id : +new Date(),
            title : findDOMNode(this.title).value,
            description : findDOMNode(this.description).value,
            price : findDOMNode(this.price).value
        }];
        this.props.actions.addNewBook(book);
        console.log();
    }
    render() {
        return (
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl 
                            type="text"
                            placeholder="Enter your Book Title"
                            ref={(input) => this.title = input}
                        />
                    </FormGroup>


                    <FormGroup controlId="description">
                            <ControlLabel>Description</ControlLabel>
                            <FormControl 
                                type="text"
                                placeholder="Enter your Book description"
                                ref={(input) => this.description = input}
                            />
                    </FormGroup>

                    <FormGroup controlId="price">
                            <ControlLabel>Price</ControlLabel>
                            <FormControl 
                                type="number"
                                placeholder="Enter your Book price"
                                ref={(input) => this.price = input}
                            />
                    </FormGroup>
                    <Button bsStyle="primary" onClick={() => this.handleSubmit()}>Add Book</Button>
                </Panel>
            </Well>
        )
    }
}


// const stateProps = (state) => ({
// 	books : state.bookReducer.books
// });

const disptachProps = (dispatch) => ({
	actions : bindActionCreators(cartAction, dispatch)
});


export default connect(null, disptachProps)(BooksForm);