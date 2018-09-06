import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import {FaUser,FaStore,FaHandsHelping,FaReadme,FaBook} from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Nav, Container, NavItem, Navbar, NavbarToggler, Collapse } from 'reactstrap';


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
        return (
            <Navbar className="sidebar bg-light" light>
                <Container style={{textAlign:"justify"}}>
                    <NavbarToggler onClick={this.toggleNavbar}  className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="/perfil"><FaUser/>  Perfil </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/asignaturas"><FaBook/>Practicar</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/tienda"><FaStore/>  Tienda</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/ayuda"><FaHandsHelping/> Ayuda</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/nosotros"><FaReadme/> Nosotros</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/#" onClick={this.props.logout}><span><IoIosLogOut/></span>Cerrar Sesion</Link>
                        </NavItem>
                    </Nav> 
                </Collapse>     
                </Container> 
            </Navbar>

    )
    }

}
export default NavComponent;