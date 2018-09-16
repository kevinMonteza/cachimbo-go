import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Row,Container,Input,Label,Col } from 'reactstrap';

class ModalPreguntas extends Component {
  
  constructor(){
    super();
    this.state={
      userIn:'',
      contraIn:'',
      registrar:false
   }
    this.handleInputUser = this.handleInputUser.bind(this);
    this.handleInputContra = this.handleInputContra.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    
    
  }
  handleInputUser(data){
    this.setState({
      userIn:data.target.value
    })
  }
  handleKeyPress=(event)=>{
    if(event.key==='Enter'){
      this.props.login(this.state.userIn,this.state.contraIn);
    }
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
        <Modal isOpen={this.props.modal} size='sm'>
          <ModalHeader toggle={this.props.toggle} charcode="X" className='text-align-center'>{titulo}</ModalHeader>
          <ModalBody>
            <Label>Usuario</Label>
           <Input type="text"  placeholder="ingrese usuario" onChange={this.handleInputUser} onKeyPress={this.handleKeyPress}/><br/>
            <Label>Contraseña</Label>
            <Input type="password"  placeholder="Contraseña" onChange={this.handleInputContra} onKeyPress={this.handleKeyPress} value={this.state.contraIn}/>
          </ModalBody>
          <ModalFooter>
            <Container> 
              <Row  className="justify-content-center">
                <Col sm="4" xs="6">
                  <Button onClick={()=>{this.props.login(this.state.userIn,this.state.contraIn)}}>Login</Button>
                </Col>
                <Col sm="4" xs="6">
                  <Button type='submit'>Registrar</Button>
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