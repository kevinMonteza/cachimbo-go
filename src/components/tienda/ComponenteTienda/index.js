import React from 'react';
import { Button } from 'reactstrap';
import { FiGift } from "react-icons/fi";
import Informacion from './Informacion';
import { IconContext } from "react-icons";
import './styles.css';


const ComponenteTienda = ({data,comprar}) => {

        const {costo,nombre,id_articulo} = data;
        const compras =comprar;
    
        return(
            <div className="componenteTienda">

                <IconContext.Provider  value={{ color: "black", size: "5em"}}>
                <div className="icono">
                    <FiGift/>
                </div>
                </IconContext.Provider>

                <Informacion data={data}></Informacion>

                <Button color="success" onClick={()=>compras(nombre,costo,id_articulo)}>Comprar {costo}</Button>
            </div>                
        );
    
}

export default ComponenteTienda;