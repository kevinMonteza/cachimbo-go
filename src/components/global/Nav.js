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
            <Navbar className="sidebar bg-light" light>
                <Container>
                    <NavbarBrand href="/perfil" className="mr-auto">{datos}</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
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

        )
    }

}
export default NavComponent;