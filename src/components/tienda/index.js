import React, {Component} from 'react';
import ComponenteTienda from './ComponenteTienda';

const dataIngles = {
    curso: "Ingles",
    descripcion: "Curso de ingles: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    costo: "10$"
};

const dataCivica = {
    curso: "Civica",
    descripcion: "Curso de civica: Donec vestibulum, sapien at dignissim mollis, dui sapien iaculis enim",
    costo: "20$"
};

class Tienda extends Component {

    render = () => {
        return(
            <div>
            <h1>Tienda</h1>
            <h2>$ Monedas</h2>
            <ComponenteTienda data={dataIngles}></ComponenteTienda>
            <ComponenteTienda data={dataCivica}></ComponenteTienda>
            <ComponenteTienda data={dataIngles}></ComponenteTienda>
            </div>                
        );
    }
}
    

export default Tienda;