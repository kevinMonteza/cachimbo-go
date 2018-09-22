
import React,{Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Label,Row,Col,Container } from 'reactstrap';

class ModalPreguntas extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      estado:false,
      nombreClase:'',
      radio:false,
      radioIn:false
    }
  }
  componentWillMount(){
   // console.log("will");
    this.setState({
      estado:false
    })
  }
  componentWillReceiveProps(props){
   // console.log("receive");
    if(props.mensaje){
      //console.log(this.radios.current);
      //this.radios.current.disable = true;
      this.setState({
        estado:false
      })
    }
    
  }
  render() {
    const titulo = this.props.titulo || "Ronda de preguntas generico";
    const pregunta = this.props.pregunta;
    if(!this.props.modal){
      return null;
    }
    return (
      <div>
        <Modal isOpen={this.props.modal} size='lg'>
          <ModalHeader toggle={this.props.toggle} charcode="X">{titulo}</ModalHeader>
          <ModalBody>
            <div className="pregunta">
                <span>
                    {pregunta.enunciado}
                 </span>
            </div>
            <div>
                <ul>
                  <li className="listar-pregunta"><Label><input type="radio" disabled={this.state.radio}  onChange={()=>{this.props.responder(1);this.setState({estado:true})}} name='clave' className='radio'/> {pregunta.clave1}</Label></li>
                  <li className="listar-pregunta"><Label><input type="radio" disabled={this.state.radio}  onChange={()=>{this.props.responder(2);this.setState({estado:true})}} name='clave' className='radio'/> {pregunta.clave2}</Label></li>
                  <li className="listar-pregunta"><Label><input type="radio" disabled={this.state.radio}  onChange={()=>{this.props.responder(3);this.setState({estado:true})}} name='clave' className='radio'/> {pregunta.clave3}</Label></li>
                  <li className="listar-pregunta"><Label><input type="radio" disabled={this.state.radio}  onChange={()=>{this.props.responder(4);this.setState({estado:true})}} name='clave' className='radio'/> {pregunta.clave4}</Label></li>
                  <li className="listar-pregunta"><Label><input type="radio" disabled={this.state.radio}  onChange={()=>{this.props.responder(5);this.setState({estado:true})}} name='clave' className='radio'/> {pregunta.clave5}</Label></li>
                </ul>
            </div>

          </ModalBody>
          <ModalFooter>
            <Container>
                <div className={this.state.nombreClase}>
                  <div><h2>{this.props.mensaje}</h2></div>
                  <div className='respuesta'><Label>{this.props.respuesta || null}</Label></div>
                </div>
                <Row>
                  <Col>
                    <Button id="saltar" onClick={this.props.saltar}>Saltar</Button>{' '}
                  </Col>
                  <Col>
                    {(this.state.estado)?(<Button color="primary" className="button-principal" onClick={()=>{this.props.calificar();this.setState({radio:!this.state.radio})}}>Calificar</Button>):(null)}
                  </Col>
                  <Col>
                    {(this.props.correcta || this.props.mensaje)?(<Button color="primary" className="button-principal" onClick={()=>{this.props.next();this.setState({radio:!this.state.radio})}}>Siguiente</Button>):(null)}
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