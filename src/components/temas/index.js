import React, { Component } from 'react';
import Tema from './Tema';
import SubTema from '../subtemas/';
import { Row, Col } from 'reactstrap';
import Modal from '../preguntas/modal';


class Temas extends Component {

    constructor() {
        super();
        this.state = {
            open: true,
            subtemas:[],
            idSubtema:0,
            id_tema:0,
            modal: false,     // flag para abrir o cerrar el modal
            pregunta: [],    // Array que almacena las preguntas que llegandesde el API
            rpta: 0,      //varaiable que almacena la respuesta, que recibe desde el componente mondal
            respuesta: "",//se almacena la infomacion de la pregunta (explicacion de la pregunta)
            msj: null,    // mensjae que se envia al modal "Respuesta correcta o incorrecta"
            respuestas: [], //se almacena las respuesta de cada pregunta para guardarlas al final del analisis 
            errorPregunta: false // flag para saber si respondió correctamente o se equivocó
        }
        this.handleGetSubTemas = this.handleGetSubTemas.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleresponder = this.handleresponder.bind(this);
        this.handleCalificar = this.handleCalificar.bind(this);
        this.handleGetPreguntas = this.handleGetPreguntas.bind(this);
    }
    handleGetSubTemas(props) {
        console.log('abrir subtemas');
       /*const datos={
           id_asignatura:props,
           id_usuario:55
       }*/
       fetch("https://cachimbogo.herokuapp.com/servicios/subtema-tema/"+props)//this.props.user.id_usuario)
        .then(response => {
            return (response.json())
        })
        .then(responseJson => {
            //console.log(responseJson);
            this.setState({
                subtemas:responseJson
            })
        })
        this.setState({
            id_tema:props,
            open:!this.state.open
        });
    }
    handleGetPreguntas(props){
        console.log("esta abriendo el modal ..."+props);
        fetch(`https://cachimbogo.herokuapp.com/servicios/preguntaR/${props}/1`)
            .then(response => {
                return (response.json())
            })
            .then(responseJson => {
                this.setState({
                    pregunta: responseJson,
                    modal: !this.state.modal,
                    rpta: 0,
                    respuesta: "",
                    respuestas: [],
                    correcta: false,
                    msj: null,
                    idSubtema:props
                })
            })
    }
    crearObj(id_usuario, id_pregunta, acertada) {
        this.id_usuario = id_usuario;
        this.id_pregunta = id_pregunta;
        this.acertada = acertada;
    }

    handleCalificar() {
        let preguntas = this.state.pregunta;
        let respuesta = {};
        const usuario = JSON.parse(sessionStorage.getItem('user'));

        if (this.state.rpta === preguntas[0].correcta_num) {
            if (this.state.respuestas.find(pregunta => pregunta.id_pregunta === preguntas[0].id_pregunta)) {
                console.log('en el if');
                this.setState({
                    respuesta: preguntas[0].informacion,
                    correcta: true,
                    msj: "Tu respuesta es Correcta"
                })
            } else {
                respuesta = new this.crearObj(usuario.id_usuario, preguntas[0].id_pregunta, 1);//falta id 
                this.setState({
                    respuesta: preguntas[0].informacion,
                    respuestas: this.state.respuestas.concat(respuesta),
                    correcta: true,
                    msj: "Tu respuesta es Correcta"
                })
            }
        } else {
            if (this.state.respuestas.find(pregunta => pregunta.id_pregunta === preguntas[0].id_pregunta)) {
                //console.log('en el if');
                this.setState({
                    respuesta: preguntas[0].informacion,
                    correcta: false,
                    errorPregunta: true,
                    msj: "Tu respuesta es Incorrecta"
                })
            } else {
                respuesta = new this.crearObj(usuario.id_usuario, preguntas[0].id_pregunta, 0); // id falta
                this.setState({
                    respuesta: preguntas[0].informacion,
                    respuestas: this.state.respuestas.concat(respuesta),
                    correcta: false,
                    errorPregunta: true,
                    msj: "Tu respuesta es Incorrecta"
                })
            }

        }
    }
    //codigo para leer el radio button presionado
    handleresponder(props) {
        console.log(props);
        console.log("Clave correcta" + this.state.pregunta[0].correcta_num);
        console.log(this.state.respuestas);
        this.setState({
            rpta: props
        })
    }


    // codigo para abrir el modal
    toggle() {
        if (this.state.pregunta.length !== 0) {
            console.log(`Enotro`);
            this.setState({
                modal: !this.state.modal
            });
        } else {
            alert(`No se cargaron las preguntas del tema`);
        }

    }
    //#########################

    //pasar a la siguiente pregunta
    handleNext() {
        let preguntas = this.state.pregunta;
        const usuario = JSON.parse(sessionStorage.getItem('user'));
        console.log('id subtema'+this.state.idSubtema);
        if (preguntas.length !== 1) {
            if (this.state.rpta === preguntas[0].correcta_num) {
                //console.log(preguntas.shift());
                //console.log(preguntas);
                preguntas.shift();
                this.setState({
                    pregunta: preguntas,
                    respuesta: "",
                    correcta: false,
                    msj: ""
                })
            } else {
                //console.log(preguntas);
                let pre = preguntas.shift();
                preguntas.push(pre);
                // console.log(preguntas);
                this.setState({
                    pregunta: preguntas,
                    respuesta: "",
                    correcta: false,
                    msj: ""
                })
            }
        } else {
            console.log(JSON.stringify(this.state.respuestas));
            alert('termniaste');
            //ganancia de monedas
            const arreglo = {
                monedas: usuario.monedas, // monedas que se extrae del perfil del usuario
                id_usuario: usuario.id_usuario //el codigo de usuario que se extrae del perfil de usuario
            }
            const arregloEstadistica={
                id_usuario:usuario.id_usuario, // el id del usuario
                id_subtema:this.state.idSubtema, //el id del subtem
                completado:0
            }
            if (this.state.errorPregunta) {
                arreglo.monedas = arreglo.monedas + 2;
            } else {
                arregloEstadistica.completado = 1;
                arreglo.monedas = arreglo.monedas + 3;
            }
            fetch('http://cachimbogo.xyz/ganancia_moneda.php?id_usuario=55&monedas=' + arreglo.monedas) //FALTA
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                })
            fetch('https://cachimbogo.herokuapp.com/servicios/respuesta/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.respuestas)
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                })
            fetch('http://cachimbogo.xyz/insertar_usuario_subtema.php/?id_usuario=55&id_subtema='+this.state.idSubtema+'&completado='+arregloEstadistica.completado)//FALTA
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                })
            this.setState({
                modal:!this.state.modal
            })
        }
    }
    render() {
        const temas = this.props.temas;
        //console.log(temas);
        if (this.state.open) {
            return (
                <Row>
                    {
                        temas && temas.map((valor, key) =>
                            <div key={key}><Tema data={valor} getSubtemas={this.handleGetSubTemas}/></div>
                        )
                    }
                </Row>
            )
        } else {
            console.log(this.state.subtemas)
            return (
                <Row>
                    {
                        this.state.subtemas && this.state.subtemas.map((valor, key) =>
                            <Col sm='4' key={key}><SubTema data={valor} getPreguntas={this.handleGetPreguntas} /></Col>
                        )
                    }
                    <Modal titulo="Gestion de preguntas" modal={this.state.modal} calificar={this.handleCalificar} toggle={this.toggle}
                    pregunta={this.state.pregunta[0]} responder={this.handleresponder} respuesta={this.state.respuesta} correcta={this.state.correcta}
                    mensaje={this.state.msj} next={this.handleNext} />
                </Row>
            )
        }

    }
}
export default Temas;