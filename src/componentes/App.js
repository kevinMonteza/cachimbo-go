import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './Login/Login';

import Header from '../contenedores/Header';
import Nav from '../contenedores/Navigator';
import Footer from '../contenedores/Footer';
import Section from '../contenedores/Section';
import PostData from '../servicios/PostData';



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
        this.handleRegistrar = this.handleRegistrar.bind(this);
    }
    static propTypes = {
        children: PropTypes.object.isRequired
    }

    /**
     * Verifica si el usuario existe 
     * para restringir el acceso a la aplicacion
     */
    componentWillMount(){
        const usuario = JSON.parse(sessionStorage.getItem('user'));
        if(usuario){
            this.setState({
                login: !this.state.login,
                modal: !this.state.modal
            });
        }
    }
    /**
     * Servicio para autenticar al usuario
     * 
     */
    handleLogin(user, contra) {
        const datos = {
            usuario: user,
            password: contra
        }
        PostData("usuarioAuth/",datos,true).then((result)=>{
            if (result.usuario) {
                sessionStorage.setItem('user', JSON.stringify(result));
                this.setState({
                    user: result,
                    login: !this.state.login,
                    modal: !this.state.modal
                })
            } else {
                alert("Usuario Incorrecto");
            }

        })

    }
    /**
     * 
     * @param {*} props 
     * @param {*} estado 
     * Registrar a un nuevo usuario
     */
    handleRegistrar(props,estado){
        console.log(props);
        PostData('usuario/',props).then((result)=>{
            if(result){
                alert('Usuario registrado con exito');
                estado();
            }
            console.log(result);
        })
    }
    /**
     * funcion para cerrar sesion
     * 
     */
    handleLogout(){
        this.setState({
            login: !this.state.login,
            modal: !this.state.modal
        });
        sessionStorage.removeItem('user');
    }
    render() {
        //https://github.com/trendmicro-frontend/react-sidenav
        const { children } = this.props;

        if (this.state.login) {
            return (
                <div className="container-fluid">
                    <Nav logout={this.handleLogout}/>
                    <div className="ml-5">
                        <Header/>
                        <Section body={children}/>
                        <Footer />  
                    </div>
                </div>
            );
        } else {
            return (
                <Login modal={this.state.modal} login={this.handleLogin} registrar={this.handleRegistrar}/>
            )
        }


    }
}

export default App;
