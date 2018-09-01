import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import {Row,Col} from "reactstrap";
import "./styles.css";
import profile from '../../img/image.png';
import {FaCoins} from "react-icons/fa"

const perfil =()=>{

    //const {usuario,nombres,apellidos,correo,monedas} = data;
    const usuario = JSON.parse(sessionStorage.getItem('user'));
    return(
    <div>
        <Row>
            <Col>
                <Card className="Card" >
                    <CardImg className="CardImg" height="400" src={profile} alt="Card image cap" />
                    <CardBody>
                    <CardTitle><h2>{usuario.nombres +"  "+ usuario.apellidos}</h2></CardTitle>
                    <CardSubtitle>{usuario.correo}</CardSubtitle>
                    <CardText>{usuario.monedas} <FaCoins/></CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        
    </div>
    );
}
export default perfil;