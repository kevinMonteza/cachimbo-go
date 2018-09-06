import React, { Component } from 'react';
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FaUser, FaStore, FaHandsHelping, FaReadme, FaBook } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Navigator extends Component {
    render() {
        return (
            <SideNav
                onSelect={(selected) => {
                   
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/perfil"><FaUser style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/asignaturas">Perfil</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/"><FaBook style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/">Practicar</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/tienda"><FaStore style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/tienda">Tienda</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/ayuda"><FaHandsHelping style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/ayuda"> Ayuda</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            
                            <Link to="/nosotros"><FaReadme style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                             <Link to="/nosotros"> Nosotros</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <Link to="/#" onClick={this.props.logout}><IoIosLogOut style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/#" onClick={this.props.logout}>Cerrar Sesion</Link>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

        );
    }
}

export default Navigator;
