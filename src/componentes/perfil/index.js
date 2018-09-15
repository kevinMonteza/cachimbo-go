import React from 'react';
import { Redirect } from 'react-router-dom';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col, Container
} from 'reactstrap';
import profile from '../../img/image.png';
import { FaCoins } from "react-icons/fa";


const perfil = () => {

    //const {usuario,nombres,apellidos,correo,monedas} = data;
    const usuario = JSON.parse(sessionStorage.getItem('user'));
    if (usuario) {
        return (
            <Container>
                <Row>
                    <Col sm='6'>
                        <Card >
                            <CardImg className="CardImg" height='200px' src={profile} alt="Card image cap" />
                            <CardBody className="text-center">
                                <CardTitle className="text-capitalize">{usuario.nombres + "  " + usuario.apellidos}</CardTitle>
                                <CardSubtitle>{usuario.correo}</CardSubtitle>
                                <CardText className="font-italic">{usuario.monedas} <FaCoins /></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        );
    } else {
        return (
            <Redirect to="/login" />
        )
    }

}
export default perfil;