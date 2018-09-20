import React, { Component } from 'react';
import ComponenteTienda from './ComponenteTienda';
import Paper from '@material-ui/core/Paper';
import { FaStore } from "react-icons/fa";

import './styles.css'; 

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
        const usuario = JSON.parse(sessionStorage.getItem('user'));
        let monedasU = usuario.monedas;
        console.log(id_articulo);
        if (monedasU > costo) {
            let confirmacion = window.confirm(`Desea comprar el articulo ${nombre}`);
            if (confirmacion) {
                const arreglo = {
                    id_usuario: usuario.id_usuario, // id del usuario del servicio
                    id_articulo: id_articulo,
                    monedas: monedasU - costo
                }
               /* fetch('https://cachimbogo.herokuapp.com/servicios/usuarioArticulo/', {

                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(arreglo)
                })*/
                fetch('http://cachimbogo.xyz/compras.php/?id_usuario='+usuario.id_usuario+'&id_articulo='+arreglo.id_articulo+'&monedas='+arreglo.monedas)

                    .then(res => res.json())
                    .then(res => {
                        alert(`Compra existosa ${res}`);
                    })
            }
        }
    }
    render = () => {
        const articulos = this.state.articulos;
        const usuario = JSON.parse(sessionStorage.getItem('user'));
        return (

            <div className="container contenedorTienda">
                <div className="row">
                    
                        <Paper elevation={3}>                     
                            
                                <h1 className="tienda"><FaStore/> Tienda ${usuario.monedas}</h1>
                                
                                
                                {articulos && articulos.map((datos, key) =>
                                    
                                    
                                        <ComponenteTienda key={key} data={datos} comprar={this.handleComprar} />
                                    
                                    
                                )}
                            
                            
                        </Paper>
                    
                </div>
            </div>
        );
    }
}


export default Tienda;