import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';

const tarjeta =(data)=>{
    const datos=data.data;
    return( 
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{datos.nombre}</CardTitle>
          <CardSubtitle>Repaso</CardSubtitle>
          <CardText>En este curso vas a mejorar, reforazar tus conocimientos con preguntas pasadas de examen de admision sobre <i>{datos.nombre}</i></CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    )
}
export default tarjeta;