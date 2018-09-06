import React from 'react';



import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,Button,Progress 
} from 'reactstrap';

const tarjeta = ({data,comprar}) => {
  const datos = data;
  const compras=comprar;
  console.log(data.porcentaje);
  return (
    <Card style={{"border":"ridge"}} >
      <CardImg top width="100%" src={datos.imagen} alt="Card image cap" height="100px"/>
      <CardBody className="text-justify">
        <CardTitle>{datos.nombre}</CardTitle>
        <CardSubtitle><div className="text-center">{data.porcentaje}</div>
        <Progress value={data.porcentaje} /></CardSubtitle>
        <CardText>En este curso vas a mejorar, reforazar tus conocimientos con preguntas pasadas de examen de admision sobre <i> {datos.nombre}</i></CardText>
        <Button color="success" onClick={()=>compras(datos.id_asignatura)}>Entrar</Button>
      </CardBody>
    </Card>
  )
}
export default tarjeta;