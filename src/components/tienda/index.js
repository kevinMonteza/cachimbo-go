import React, { Component } from 'react';
import ComponenteTienda from './ComponenteTienda';

/*const dataIngles = {
    nombre: "Ingles",
    descripcion: "Curso de ingles: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    costo: "10$"
};

const dataCivica = {
    nombre: "Civica",
    descripcion: "Curso de civica: Donec vestibulum, sapien at dignissim mollis, dui sapien iaculis enim",
    costo: "20$"
};*/

class Tienda extends Component {

    constructor() {
        super();
        this.state = {
            articulos: []
        }
        this.handleComprar = this.handleComprar.bind(this);
    }
    componentDidMount() {
        fetch("http://cachimbogo.xyz/listarArticulo.php")
            .then(response => {
                return (response.json())
            })
            .then(responseJson => {
                this.setState({
                    articulos: responseJson
                })
            })
    }
    handleComprar(nombre, costo, id_articulo) {
        let monedasU = this.props.monedas || 150;
        console.log(id_articulo);
        if (monedasU > costo) {
            let confirmacion = window.confirm(`Desea comprar el articulo ${nombre}`);
            if (confirmacion) {
                const arreglo = {
                    id_usuario: 56,
                    id_articulo: id_articulo,
                    monedas: monedasU - costo
                }
                fetch('https://cachimbogo.herokuapp.com/servicios/usuarioArticulo/', {

                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(arreglo)
                })
                    .then(res => res.json())
                    .then(res => {
                        alert(`Compra existosa ${res}`);
                    })
            }
        }
    }
    render = () => {
        const articulos = this.state.articulos;
        return (
            <div>
                <h1>Tienda</h1>
                <h2>$ Monedas</h2>
                {articulos && articulos.map((datos, key) =>
                    <ComponenteTienda key={key} data={datos} comprar={this.handleComprar} />
                )}
            </div>
        );
    }
}


export default Tienda;