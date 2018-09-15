import React from 'react';



import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,Button,Progress
} from 'reactstrap';

const Tema = ({data,getSubtemas}) => {
  const datos = data;
  const subtemas=getSubtemas;
  //console.log(data);
  return (
    <Card className="text-justify">
      <CardBody>
        <CardTitle>{datos.nombre}</CardTitle>
        <CardSubtitle><Progress value={data.porcentaje || 0} /></CardSubtitle>
        <CardText>En este tema vas a mejorar, reforazar tus conocimientos con preguntas pasadas de examen de admisión
           sobre el tema relacionado a <i>{datos.nombre}</i></CardText>
        <Button color="success" onClick={()=>subtemas(datos.id_tema)}>Empezar</Button>
      </CardBody>
    </Card>
  )
}
export default Tema;