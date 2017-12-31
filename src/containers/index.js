import React, { Component } from 'react';
import BooksList from "../components/pages/booksList";
import { Grid, Row, Col, Button } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <Grid>
       <Row>
        <h1>App Container Component</h1>
        <BooksList />
       </Row>
      </Grid>
    )
  }
}
