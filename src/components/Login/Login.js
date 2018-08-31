import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Section from '../global/Section';
import Asignaturas from '../asignaturas';
import './Login.css';

class Login extends Component {

  constructor(){
    super();
   
    this.state = {
     usuario: '',
     password: '',
     redirectToReferrer: false
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  

  login() {
    if(this.state.usuario && this.state.password){
      const User={
        id_ususario:55,
        nombre:'kevin'
      }
      sessionStorage.setItem('user',User);
      this.setState({
        redirectToReferrer:true
      })
    }
    
   }

  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   }

  
  

  render() {

     if (this.state.redirectToReferrer) {
      return (<Section body={Asignaturas}/>)
    }
   
    if(sessionStorage.getItem('user')){
      return (<Redirect to={'/asignaturas'}/>)
    }

     return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
        <h4>Login</h4>
        <label>Username</label>
        <input type="text" name="usuario" placeholder="Username" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
        <input type="submit" className="button success" value="Login" onClick={this.login}/>
        <a href="/signup">Registrar</a>
        </div>
      </div>
    );
  }
}

export default Login;