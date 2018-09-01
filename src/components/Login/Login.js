import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Row,Container,Input,Label,Col } from 'reactstrap';

class ModalPreguntas extends Component {
  
  constructor(){
    super();
    this.state={
      userIn:' ',
      contraIn:'  '
   }
    this.handleInputUser = this.handleInputUser.bind(this);
    this.handleInputContra = this.handleInputContra.bind(this);

    
  }
  handleInputUser(data){
    this.setState({
      userIn:data.target.value
    })
  }
  handleInputContra(data){
    this.setState({
      contraIn:data.target.value
    })
  }
  
  render() {
    const titulo = this.props.titulo || "LOGIN";
    if(!this.props.modal){
      return null;
    }
    return (
      <div>
        <Modal isOpen={this.props.modal} size='lg'>
          <ModalHeader toggle={this.props.toggle} charcode="X">{titulo}</ModalHeader>
          <ModalBody>
            <Label>Usuario</Label>
            <Input type="text"  placeholder="ingrese usuario" onChange={this.handleInputUser} value={this.state.userIn}/><br/>
            <Label>Contraseña</Label>
            <Input type="password"  placeholder=".........." onChange={this.handleInputContra} value={this.state.contraIn}/>
          </ModalBody>
          <ModalFooter>
            <Container> 
              <Row>
                <Col>
                  <Button onClick={()=>{this.props.login(this.state.userIn,this.state.contraIn)}}>Login</Button>
                </Col>
                <Col sm='4'>
                  <Button>Registrar</Button>
                </Col>
              </Row>
            </Container>
           
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalPreguntas;