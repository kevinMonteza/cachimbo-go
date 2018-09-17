import React, { Component } from 'react';
import ComponenteTienda from './ComponenteTienda';
import GetData from '../../servicios/getData';
class Tienda extends Component {

    constructor() {
        super();
        this.state = {
            articulos: []
        }
        this.handleComprar = this.handleComprar.bind(this);
    }
    /**
     * obtener los articulos 
     * que se muestran en tienda
     */
    componentDidMount() {
        GetData('listarArticulo.php').then((result)=>{
            console.log(result);
            this.setState({
                articulos: result
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
                //FALTA     
                fetch('http://cachimbogo.xyz/compras.php/?id_usuario='+usuario.id_usuario+'&id_articulo='+arreglo.id_articulo+'&monedas='+arreglo.monedas)

                    .then(res => res.json())
                    .then(res => {
                        alert(`Compra existosa ${res}`);
                    })
            }
        }else{
            alert('No tiene las monedas suficientes');
        }
    }
    render = () => {
        const articulos = this.state.articulos;
        const usuario = JSON.parse(sessionStorage.getItem('user'));
        return (
            <div>
                <h1>Tienda</h1>
                <h2>${usuario.monedas}</h2>
                {articulos && articulos.map((datos, key) =>
                    <ComponenteTienda key={key} data={datos} comprar={this.handleComprar} />
                )}
            </div>
        );
    }
}


export default Tienda;