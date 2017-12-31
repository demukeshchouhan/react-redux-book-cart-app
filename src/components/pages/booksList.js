import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import cartAction from "../../actions";
import { Row, Col, Button } from "react-bootstrap";

import BookItem from "./bookItem";
import BooksForm from "./booksForm";


class BooksList extends Component {
	componentDidMount(){
		this.props.actions.getAllBooks();
	}
	render() {
		const booksList = this.props.books.map((book) => {
			return(
				<Col key={book.id} sm={12} md={3}>
					<BookItem 
						id={book.id} 
						title={book.title}
						description={book.description}
						price={book.price}
					/>
				</Col>	
			);	
		});
		return (
		<div>
			<h1>BooksList</h1>
			<Row>
				<Col xs={12} sm={6}>
					<BooksForm />
				</Col>
			</Row>
			<Row>
				{booksList}
			</Row>
		</div>
		)
	}
}

const stateProps = (state) => ({
	books : state.bookReducer.books
});

const disptachProps = (dispatch) => ({
	actions : bindActionCreators(cartAction, dispatch)
});


export default connect(stateProps, disptachProps)(BooksList);