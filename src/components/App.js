import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './Login/Login';

import Header from './global/Header';
import Nav from './global/Nav';
import Footer from './global/Footer';
import Section from './global/Section';



class App extends Component {

    constructor() {
        super();
        this.state = {
            login: false,
            modal: true,
            user: {}
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    static propTypes = {
        children: PropTypes.object.isRequired
    }
    componentWillMount(){
        const usuario = JSON.parse(sessionStorage.getItem('user'));
        if(usuario){
            console.log("Usuario de la app"+usuario);
            this.setState({
                login: !this.state.login,
                modal: !this.state.modal
            });
        }
    }
    handleLogin(user, contra) {
        console.log(user + contra);
        const datos = {
            usuario: user,
            password: contra
        }
        fetch("https://cachimbogo.herokuapp.com/servicios/usuarioAuth/", {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.usuario) {
                    sessionStorage.setItem('user', JSON.stringify(res));
                    this.setState({
                        user: res,
                        login: !this.state.login,
                        modal: !this.state.modal
                    })
                } else {
                    alert("Usuario Incorrecto");
                }

            })

    }
    handleLogout(){
        this.setState({
            login: !this.state.login,
            modal: !this.state.modal
        });
        sessionStorage.removeItem('user');
    }


    render() {
        const { children } = this.props;

        if (this.state.login) {
            return (
                <div style={{width:"100%"}}className="container-fluid">
                    <Header />
                    <Nav logout={this.handleLogout}/>
                    <Section body={children}/>
                    <Footer />
                </div>
            );
        } else {
            return (
                <Login modal={this.state.modal} login={this.handleLogin}/>
            )
        }


    }
}

export default App;
