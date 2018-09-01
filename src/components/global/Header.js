import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

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
      <div style={{"background" : "black", "margin" : "10px", "border": "dashed"}}>
        <Navbar color="light" light>
          <NavbarBrand href="/" className="mr-auto text-muted"><h4>Cachimbo Go</h4></NavbarBrand>
        </Navbar>
      </div>
    );
  }
}