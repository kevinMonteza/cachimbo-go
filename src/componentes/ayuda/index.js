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
            <Container className="ayuda-contenedor">
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <div>
                             <Row className="ayuda-pregunta">
                                <Col className="ayuda-columna">¿QUÉ ES MI PERFIL?</Col>
                            </Row>
                            <Row className="ayuda-respuesta">
                                <Col className="ayuda-columna">Aquí se puede visualizar la información del usuario.</Col>
                            </Row>
                            <Row className="ayuda-pregunta">
                            <Col className="ayuda-columna">¿CÓMO RESOLVER PREGUNTAS?</Col>
                            </Row>
                            <Row className="ayuda-respuesta">
                                <Col className="ayuda-columna">Primero se debe ir a Resolver Test, luego seleccionamos la asignatura, luego el tema y finalmente el subtema.
                                Haciendo esto podremos resolver las preguntas de acuerdo al subtema elegido.</Col>
                            </Row>
                            <Row className="ayuda-pregunta">
                            <Col className="ayuda-columna">¿QUÉ ES UNA RONDA?</Col>
                            </Row>
                            <Row className="ayuda-respuesta">
                                <Col className="ayuda-columna">Es una colección de preguntas, para finalizar una ronda se deben responder todas las preguntas correctamente. Al finalizar una ronda se muestran los resultados correspondientes.</Col>
                            </Row>
                            <Row className="ayuda-pregunta">
                            <Col className="ayuda-columna">¿RONDA NORMAL?</Col>
                            </Row>
                            <Row className="ayuda-respuesta">
                                <Col className="ayuda-columna">Esta ronda cuenta con 7 preguntas.</Col>
                            </Row>
                            <Row className="ayuda-pregunta">
                            <Col className="ayuda-columna">¿RONDA DE REPASO?</Col>
                            </Row>
                            <Row className="ayuda-respuesta">
                                <Col className="ayuda-columna">Esta ronda cuenta con 10 preguntas.</Col>
                            </Row>
                            <Row className="ayuda-pregunta">
                            <Col className="ayuda-columna">¿CÓMO GANAR MONEDAS?</Col>
                            </Row>
                            <Row className="ayuda-respuesta">
                                <Col className="ayuda-columna">Debe finalizar una ronda completa para ganar monedas, 2 monedas por ronda normal y 3 por ronda de repaso.</Col>
                            </Row>
                            <Row className="ayuda-pregunta">
                            <Col className="ayuda-columna">¿QUÉ ES EL HISTORIAL?</Col>
                            </Row>
                            <Row className="ayuda-respuesta">
                                <Col className="ayuda-columna">Son los resultados que obtuvo en el subtema la última vez que lo resolvió.</Col>
                            </Row>
                            <Row className="ayuda-pregunta">
                            <Col className="ayuda-columna">¿QUÉ ES LA TIENDA?</Col>
                            </Row>
                            <Row className="ayuda-respuesta">
                                <Col className="ayuda-columna">Una vez que haya reunido monedas suficientes, puede comprar asignaturas nuevas en la tienda.</Col>
                            </Row>

                        </div>
                    </Col>
                </Row>
            </Container>
        )

    }
}
export default registrar;