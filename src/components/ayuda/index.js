import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';



class registrar extends Component {
    constructor() {
        super();
        this.calcular = this.calcular.bind(this);
    }
    calcular() {
        let date = new Date();
        let fecha = date.getFullYear() - 17;
        return fecha + "-01-01";
    }
    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <p>
                            <p>¿QUÉ ES MI PERFIL?</p>
                            <p>Aquí se puede visualizar la información del usuario.</p>
                            <p>¿CÓMO RESOLVER PREGUNTAS?</p>
                             <p>Primero se debe ir a Resolver Test, luego seleccionamos la asignatura, luego el tema y finalmente el subtema.
                                Haciendo esto podremos resolver las preguntas de acuerdo al subtema elegido.</p>
                            <p>¿QUÉ ES UNA RONDA?</p> 
                            <p>Es una colección de preguntas, para finalizar una ronda se deben responder todas las preguntas correctamente. Al finalizar una ronda se muestran los resultados correspondientes.</p>
                            <p>¿RONDA NORMAL?</p>
                            <p>Esta ronda cuenta con 7 preguntas.</p>
                            <p>¿RONDA DE REPASO?</p>
                            <p>Esta ronda cuenta con 10 preguntas.</p>
                            <p>¿CÓMO GANAR MONEDAS?</p>
                            <p>Debe finalizar una ronda completa para ganar monedas, 2 monedas por ronda normal y 3 por ronda de repaso.</p>
                            <p>¿QUÉ ES EL HISTORIAL?</p>
                            <p>Son los resultados que obtuvo en el subtema la última vez que lo resolvió.</p> 
                            <p>¿QUÉ ES LA TIENDA?</p> 
                            <p>Una vez que haya reunido monedas suficientes, puede comprar asignaturas nuevas en la tienda.</p>

                        </p>
                    </Col>
                </Row>
            </Container>
        )

    }
}
export default registrar;