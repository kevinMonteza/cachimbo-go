import React from "react";
import { Button } from "reactstrap";
import Informacion from "./Informacion";
import "./styles.css";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//import Button from '@material-ui/core/Button';

import imagen from "../../../img/tienda.png";

const ComponenteTienda = ({ data, comprar }) => {
  const { costo, nombre, id_articulo } = data;
  const compras = comprar;
  console.log(compras);

  return (
        <Card className="card">
          <CardActionArea>
            <CardMedia
              component="img"
              className="media"
              height="140"
              image={imagen}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Informacion data={data} />
            </CardContent>
          </CardActionArea>
          <CardActions className="botonComprar">
              <Button
                color="success"
                onClick={() => compras(nombre, costo, id_articulo)}
              >
                Comprar {costo} $
              </Button>

          </CardActions>
        </Card>
  );
};

export default ComponenteTienda;
