import React, { Component } from 'react';
import Modal from '../preguntas/modal';

class Section extends Component {
    constructor() {
        super();
        this.state = {
            modal: false,     // flag para abrir o cerrar el modal
            pregunta: [],    // Array que almacena las preguntas que llegandesde el API
            rpta: 0,      //varaiable que almacena la respuesta, que recibe desde el componente mondal
            respuesta: "",//se almacena la infomacion de la pregunta (explicacion de la pregunta)
            msj: null,    // mensjae que se envia al modal "Respuesta correcta o incorrecta"
            respuestas: [], //se almacena las respuesta de cada pregunta para guardarlas al final del analisis 
            errorPregunta: false // flag para saber si respondió correctamente o se equivocó
        };

        this.toggle = this.toggle.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleresponder = this.handleresponder.bind(this);
        this.handleCalificar = this.handleCalificar.bind(this);
    }
    componentDidMount() {
        console.log('did mount');
    }
    componentWillMount() {
        fetch("https://cachimbogo.herokuapp.com/servicios/preguntaR/9/0")
            .then(response => {
                return (response.json())
            })
            .then(responseJson => {
                this.setState({
                    pregunta: responseJson,
                    modal: false,
                    rpta: 0,
                    respuesta: "",
                    respuestas: [],
                    correcta: false,
                    msj: null
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

        if (this.state.rpta === preguntas[0].correcta_num) {
            if (this.state.respuestas.find(pregunta => pregunta.id_pregunta === preguntas[0].id_pregunta)) {
                console.log('en el if');
                this.setState({
                    respuesta: preguntas[0].informacion,
                    correcta: true,
                    msj: "Tu respuesta es Correcta"
                })
            } else {
                respuesta = new this.crearObj(55, preguntas[0].id_pregunta, 1);
                this.setState({
                    respuesta: preguntas[0].informacion,
                    respuestas: this.state.respuestas.concat(respuesta),
                    correcta: true,
                    msj: "Tu respuesta es Correcta"
                })
            }
        } else {
            if (this.state.respuestas.find(pregunta => pregunta.id_pregunta === preguntas[0].id_pregunta)) {
                console.log('en el if');
                this.setState({
                    respuesta: preguntas[0].informacion,
                    correcta: false,
                    errorPregunta: true,
                    msj: "Tu respuesta es Incorrecta"
                })
            } else {
                respuesta = new this.crearObj(55, preguntas[0].id_pregunta, 0);
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
                monedas: 70, // monedas que se extrae del perfil del usuario
                id_usuario: 55 //el codigo de usuario que se extrae del perfil de usuario
            }
            if (this.state.errorPregunta) {
                arreglo.monedas = arreglo.monedas + 2;
            } else {
                arreglo.monedas = arreglo.monedas + 3;
            }
            fetch('http://cachimbogo.xyz/ganancia_moneda.php?id_usuario=55&monedas=' + arreglo.monedas) //falta
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
        }
    }
    //##################

    render() {
        const { body } = this.props;
        // console.log(body);
        return (
            <div className="container-fluid">
                {body}
                <button onClick={this.toggle}>Mostrar preguntas</button>
                <Modal titulo="Gestion de preguntas" modal={this.state.modal} calificar={this.handleCalificar} toggle={this.toggle}
                    pregunta={this.state.pregunta[0]} responder={this.handleresponder} respuesta={this.state.respuesta} correcta={this.state.correcta}
                    mensaje={this.state.msj} next={this.handleNext}/>
            </div>
        );
    }
}
export default Section;

