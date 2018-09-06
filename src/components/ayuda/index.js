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
                        <p>
                        ¿QUÉ ES MI PERFIL?, Aquí se puede visualizar la información del usuario.;
       CÓMO RESOLVER PREGUNTAS?,Primero se debe ir a Resolver Test, luego seleccionamos la asignatura, luego el tema y finalmente el subtema. Haciendo esto podremos resolver las preguntas de acuerdo al subtema elegido.
        ¿QUÉ ES UNA RONDA?, Es una colección de preguntas, para finalizar una ronda se deben responder todas las preguntas correctamente. Al finalizar una ronda se muestran los resultados correspondientes.
        RONDA NORMAL, Esta ronda cuenta con 7 preguntas.
       RONDA DE REPASO, Esta ronda cuenta con 10 preguntas.
        ¿CÓMO GANAR MONEDAS?, Debe finalizar una ronda completa para ganar monedas, 2 monedas por ronda normal y 3 por ronda de repaso.
        ¿QUÉ ES EL HISTORIAL?, Son los resultados que obtuvo en el subtema la última vez que lo resolvió.
        ¿QUÉ ES LA TIENDA?, Una vez que haya reunido monedas suficientes, puede comprar asignaturas nuevas en la tienda.

                        </p>
                    </Col>
                </div>
            </div>
        )
    
    }
}
export default registrar;