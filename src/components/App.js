import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Login from './Login/Login';

import Header from './global/Header';
import Nav from './global/Nav';
import Footer from './global/Footer';



class App extends Component {
    
    constructor(){
        super();
        this.state={
            login:false,
            modal:true,
            user:{}
        }
        this.handleLogin = this.handleLogin.bind(this);
    }
    static propTypes={
        children:PropTypes.object.isRequired
    }
    handleLogin(user,contra){
        console.log(user+ contra);
        const datos ={
            usuario:user,
            password:contra
        }
        fetch("https://cachimbogo.herokuapp.com/servicios/usuarioAuth/",{

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
                if(res.usuario){
                    sessionStorage.setItem('user',JSON.stringify(res));
                    this.setState({
                        user:res,
                        login:!this.state.login,
                        modal:!this.state.modal
                    })
                }else{
                    alert("Usuario incorrecto");
                }
                
            })
        
    }
    

  render() {
     const {children} = this.props;

     if(this.state.login){
        return (
            <div className="App">
                <Header/>
                <Nav/>  
                <div>{children}</div>
                <Footer/>
            </div>
          );
     }else{
        return (
            <Login modal={this.state.modal} login={this.handleLogin}/>
        )
     }
      
    
  }
}

export default App;
