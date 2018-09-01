import React from 'react';



import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,Button
} from 'reactstrap';

const Tema = ({data,getSubtemas}) => {
  const datos = data;
  const subtemas=getSubtemas;
  //console.log(data);
  return (
    <Card>
      <CardBody>
        <CardTitle>{datos.nombre}</CardTitle>
        <CardSubtitle>Repaso</CardSubtitle>
        <CardText>En este tema vas a mejorar, reforazar tus conocimientos con preguntas pasadas de examen de admision sobre el tema relacionado a<i>{datos.nombre}</i></CardText>
        <Button color="success" onClick={()=>subtemas(datos.id_tema)}>Abir</Button>
      </CardBody>
    </Card>
  )
}
export default Tema;