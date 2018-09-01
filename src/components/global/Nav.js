import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Nav, Container, NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';


class NavComponent extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            collapsed: false
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        const datos = this.props.datos || "nombre completo";
        return (
            <div style={{"background" : "black", "margin" : "10px", "border": "dashed", "heigh" : "5px"}}>
            <Navbar className="sidebar bg-light" light style={{"background" : "black", "margin" : "10px", "border": "dashed", "heigh" : "5px"}}>
                <Container>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                    <NavbarBrand href="/perfil" className="mr-auto">{datos}</NavbarBrand>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link to="/perfil">Perfil</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/tienda">Tienda</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/ayuda">Ayuda</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/asignaturas">Asignaturas</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/nosotros">Nosotros</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            </div>

        )
    }

}
export default NavComponent;