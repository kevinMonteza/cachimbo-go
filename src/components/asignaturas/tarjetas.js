import React from 'react';



import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Button
} from 'reactstrap';

const tarjeta = ({data,comprar}) => {
  const datos = data;
  const compras=comprar;
  //console.log(compras);
  return (
    <Card style={{"border":"ridge"}} >
      <CardImg top width="100%" src={datos.imagen} alt="Card image cap" />
      <CardBody>
        <CardTitle>{datos.nombre}</CardTitle>
        <CardSubtitle>Repaso</CardSubtitle>
        <CardText>En este curso vas a mejorar, reforazar tus conocimientos con preguntas pasadas de examen de admision sobre <i>{datos.nombre}</i></CardText>
        <Button color="success" onClick={()=>compras(datos.id_asignatura)}>Abir</Button>
      </CardBody>
    </Card>
  )
}
export default tarjeta;