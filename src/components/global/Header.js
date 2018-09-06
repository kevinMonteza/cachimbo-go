import React from 'react';
import {Col,Row} from "reactstrap";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <header className="App-header">
          <Row className="text-sm-left">
            <Col>
                <h1 className="App-title"> CachimboGO </h1>
            </Col>
          </Row>
      </header>
  );
  }
}