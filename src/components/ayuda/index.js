import React,{Component} from 'react';
import {Label,Col} from 'reactstrap';



class registrar extends Component{
    constructor(){
        super();
        this.calcular=this.calcular.bind(this);
    }
    calcular(){
        let date = new Date();
        let fecha=date.getFullYear()-17;
        return fecha+"-01-01";
    }
    render(){ 
        return(
            <div className="container registrar-section">
                <div className="row">
                    <Col sm={8}>
                        <Label for="titulo" sm={6} size="lg">Componente Ayuda</Label>
                    </Col>
                </div>
            </div>
        )
    
    }
}
export default registrar;