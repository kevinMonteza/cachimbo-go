import React,{Component} from 'react';
import {Row,Col} from 'reactstrap';
import Tarjetas from './tarjetas';
class Asignaturas extends Component{

    constructor(){
        super();
        this.state={
            asignaturas:[]
        }
    }
    componentWillMount(){
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

    
    render(){
        const asignaturas = this.state.asignaturas;
        return(
            <Row>
                {
                 asignaturas && asignaturas.map((valor,key)=>
                    <Col sm='3' key={key}><Tarjetas data={valor}/></Col>
                )
            }
            </Row>
        )
    }
        
}
export default Asignaturas;