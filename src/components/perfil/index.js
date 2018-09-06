import React from 'react';
import {Redirect} from 'react-router-dom';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, Col 
} from 'reactstrap';
import "./styles.css";
import profile from '../../img/image.png';
import { FaCoins } from "react-icons/fa";


const perfil = () => {

    //const {usuario,nombres,apellidos,correo,monedas} = data;
    const usuario = JSON.parse(sessionStorage.getItem('user'));
    if (usuario) {
        return (
            <div>
                <Row>
                    <Col>
                        <Card className="Card" >
                            <CardImg className="CardImg" height="400" src={profile} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{usuario.nombres + "  " + usuario.apellidos}</CardTitle>
                                <CardSubtitle>{usuario.correo}</CardSubtitle>
                                <CardText>{usuario.monedas} <FaCoins /></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    } else {
        return(
            <Redirect to="/login"/>
        )
    }

}
export default perfil;