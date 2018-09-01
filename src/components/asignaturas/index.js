import React,{Component} from 'react';
import {Row,Col} from 'reactstrap';
import Tarjetas from './tarjetas';
import Temas from '../temas/';
class Asignaturas extends Component{

    constructor(){
        super();
        this.state={
            asignaturas:[],
            open:true,
            id_asignatura:null,
            temas:[]
        }
        this.handleGetTemas=this.handleGetTemas.bind(this);
    }

    componentDidMount(){
        fetch("http://cachimbogo.xyz/usuario_asignatura.php/?id_usuario=55")//this.props.user.id_usuario)
        .then(response => {
            return (response.json())
        })
        .then(responseJson => {
            console.log(responseJson);
            this.setState({
                asignaturas:responseJson
            })
        })
    }
    handleGetTemas(props){
       console.log('abrir temas');
       /*const datos={
           id_asignatura:props,
           id_usuario:55
       }*/
       fetch("https://cachimbogo.herokuapp.com/servicios/tema-asignatura/"+props)//this.props.user.id_usuario)
        .then(response => {
            return (response.json())
        })
        .then(responseJson => {
            console.log(responseJson);
            this.setState({
                temas:responseJson
            })
        })
        this.setState({
            id_asignatura:props,
            open:!this.state.open
        });
    }
    
    render(){
        const asignaturas = this.state.asignaturas;
        if(this.state.open){
            return(
                <Row>
                    {
                     asignaturas && asignaturas.map((valor,key)=>
                        <Col sm='3' key={key}><Tarjetas data={valor} comprar={this.handleGetTemas}/></Col>
                    )
                }
                </Row>
            )
        }else{
            return(
                <Row>
                    <Temas temas={this.state.temas}/>
                </Row>
            )
        }
       
    }
        
}
export default Asignaturas;