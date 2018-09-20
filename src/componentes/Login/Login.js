import React, { Component } from 'react';
import { Button, Modal, Form, FormGroup, ModalHeader, ModalBody, ModalFooter, Row, Container, Input, Label, Col } from 'reactstrap';
import { FaUserAlt } from "react-icons/fa";
class ModalPreguntas extends Component {

  constructor() {
    super();
    this.state = {
      userIn: '',
      contraIn: '',
      nombres: "",
      apellidos: "",
      correo: "",
      registrar: true
    }
    this.handleInputUser = this.handleInputUser.bind(this);
    this.handleInputContra = this.handleInputContra.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleCambiarRegistro = this.handleCambiarRegistro.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleNombres = this.handleNombres.bind(this);
    this.handleApellidos = this.handleApellidos.bind(this);
    this.handleCorreo = this.handleCorreo.bind(this);
    this.handleRegistrar = this.handleRegistrar.bind(this);
    this.handleRegistro = this.handleRegistro.bind(this);
  }
  handleInputUser(data) {
    this.setState({
      userIn: data.target.value
    })
  }
  handleRegistro(){
    const obj = {
      usuario:   this.state.userIn,
      password:  this.state.contraIn,
      nombres:   this.state.nombres,
      apellidos: this.state.apellidos,
      correo:    this.state.correo,
      monedas:   0
    }
    this.props.registrar(obj,this.handleCambiarRegistro);
  }
  handleNombres(data) {
    this.setState({
      nombres:data.target.value
    });
  }
  handleCambiarRegistro(){
    this.setState({
      registrar:!this.state.registrar
    });
  }
  handleApellidos(data) {
    this.setState({
      apellidos:data.target.value
    });
  }
  handleCorreo(data) {
    this.setState({
      correo:data.target.value
    });
  }
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.login(this.state.userIn, this.state.contraIn);
    }
  }
  handleRegistrar() {
    return (
      <Modal isOpen={this.props.modal} size='md'>
        <ModalHeader toggle={this.props.toggle} charcode="X" className='text-align-center'>Registrar</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="nombre">Nombre</Label>
              <Input type="text" name="nombre" id="nombre" onChange={this.handleNombres} placeholder="nombre" value={this.state.nombres}/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Apellidos</Label>
              <Input type="text" name="contraseña" id="contraseña" onChange={this.handleApellidos} placeholder="Apellidos" />
            </FormGroup>
            <FormGroup>
              <Label for="nombre">Correo</Label>
              <Input type="email" name="email" id="nombre" onChange={this.handleCorreo} placeholder="email" />
            </FormGroup>
            <FormGroup>
              <Label for="nombre">Usuario</Label>
              <Input type="text" name="usuario" id="nombre" onChange={this.handleInputUser} placeholder="usuario" />
            </FormGroup>
            <FormGroup>
              <Label for="contraseña">Contraseña</Label>
              <Input type="password" name="contraseña" id="contraseña" onChange={this.handleInputContra} placeholder="contraseña" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Container>
            <Row className="justify-content-center">
              <Col sm="4" xs="6">
                <Button onClick={() => { this.setState({ registrar: !this.state.registrar }); }}>Login</Button>
              </Col>
              <Col sm="4" xs="6">
                <Button onClick={this.handleRegistro}>Registrar</Button>
              </Col>
            </Row>
          </Container>
        </ModalFooter>
      </Modal>
    )
  }
  handleLogin() {
    return (
      <Modal isOpen={this.props.modal} size='sm'>
        <ModalHeader toggle={this.props.toggle} charcode="X" className='text-align-center'>Iniciar Sesion</ModalHeader>
        <ModalBody>
          <Label><span><FaUserAlt /></span>Usuario</Label>
          <Input type="text" placeholder="ingrese usuario" onChange={this.handleInputUser} onKeyPress={this.handleKeyPress} value={this.state.userIn}/><br />
          <Label>Contraseña</Label>
          <Input type="password" placeholder="Contraseña" onChange={this.handleInputContra} onKeyPress={this.handleKeyPress} value={this.state.contraIn} />
        </ModalBody>
        <ModalFooter>
          <Container>
            <Row className="justify-content-center">
              <Col sm="4" xs="6">
                <Button onClick={() => { this.props.login(this.state.userIn, this.state.contraIn) }}>Login</Button>
              </Col>
              <Col sm="4" xs="6">
                <Button onClick={() => { this.setState({ registrar: !this.state.registrar }); }}>Registrar</Button>
              </Col>
            </Row>
          </Container>
        </ModalFooter>
      </Modal>
    )
  }
  handleInputContra(data) {
    this.setState({
      contraIn: data.target.value
    })
  }

  render() {
    if (!this.props.modal) {
      return null;
    } if (!this.state.registrar) {
      return (this.handleRegistrar())
    }
    if (this.handleRegistrar) {
      return (this.handleLogin())
    }
  }
}

export default ModalPreguntas;