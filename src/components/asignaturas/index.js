import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Tarjetas from './tarjetas';
import Temas from '../temas/';
class Asignaturas extends Component {

    constructor() {
        super();
        this.state = {
            asignaturas: [],
            open: true,
            id_asignatura: null,
            temas: []
        }
        this.handleGetTemas = this.handleGetTemas.bind(this);
        this.handleData = this.handleData.bind(this);
    }

    componentDidMount() {
        fetch("http://cachimbogo.xyz/usuario_asignatura.php/?id_usuario=55")//this.props.user.id_usuario)
            .then(response => {
                return (response.json())
            })
            .then(responseJson => {
                console.log(responseJson);
                this.setState({
                    asignaturas: responseJson
                })
            })
    }
    handleData() {
        const imagenes = [
            { imagen: 'https://www.definicionabc.com/wp-content/uploads/2009/11/aritmetica.jpg' },
            { imagen: 'https://kinuma.com/17434-large_default/geostix-juego-de-construccion-y-geometria-con-palitos-.jpg' },
            { imagen: 'https://www.intmath.com/basic-algebra/img/basic-algebra2.jpg' },
            { imagen: 'http://contenidosdigitales.ulp.edu.ar/exe/matematica2/seno_y_coseno.gif' },
            { imagen: 'https://3.bp.blogspot.com/-2ynUrJf5Dl4/WdaKthJatGI/AAAAAAAABL4/xckf29IXgGwQvkA15j8xZCpaR2hg-R6xgCLcBGAs/s400/S%25C3%25ADlaba%2Bt%25C3%25B3nica.jpg' },
            { imagen: 'http://lapiedradesisifo.com/wp-content/uploads/2016/11/foto-principal2.jpg' },
            { imagen: 'https://scontent.flim16-2.fna.fbcdn.net/v/t1.0-9/25396288_1131146207022246_2943219832006870978_n.jpg?_nc_cat=1&oh=a69c6042d594712a24676f7f087c98a8&oe=5C377F66' },
            { imagen: 'http://media.cubadebate.cu/wp-content/uploads/2017/07/Mujer-dando-a-luz-con-cinco-otras-mujeres-ayud%C3%A1ndola.-egipto-580x326.jpg' },
            { imagen: 'https://historiaperuana.pe/wp-content/uploads/proclamacion-independencia-peru.jpg' },
            { imagen: 'https://conceptodefinicion.de/wp-content/uploads/2011/02/geografia.jpg' },
            { imagen: 'https://conceptodefinicion.de/wp-content/uploads/2015/05/economia.jpg' },
            { imagen: 'https://www.biografiasyvidas.com/biografia/p/fotos/platon_2.jpg' },
            { imagen: 'http://www.abcpedia.com/wp-content/uploads/2015/09/que-es-la-fisica.jpg' },
            { imagen: 'https://ztfnews.files.wordpress.com/2013/12/choco.jpg' },
            { imagen: 'https://1.bp.blogspot.com/-xH7rNRpTk1M/VbpJfOWnXHI/AAAAAAAASBk/h9RifXmJgQ4/s1600/Biologia.jpg' },
            { imagen: 'http://img.webme.com/pic/r/recreomatematico/LOGO_BLOG_MATEMATICA.png' },
            { imagen: 'http://materialparaprofesores.ga/wp-content/uploads/2018/03/razonamientoverbal.png' }
        ];

        let a = 0;
        const datitos = this.state.asignaturas;
        for (a = 0; a < datitos.length; a++) {
            datitos[a].imagen = imagenes[a].imagen;
        }
        console.log(datitos);
    }
    handleGetTemas(props) {
        console.log('abrir temas');
        /*const datos={
            id_asignatura:props,
            id_usuario:55
        }*/
        fetch("https://cachimbogo.herokuapp.com/servicios/tema-asignatura/" + props)//this.props.user.id_usuario)
            .then(response => {
                return (response.json())
            })
            .then(responseJson => {
                console.log(responseJson);
                this.setState({
                    temas: responseJson
                })
            })
        this.setState({
            id_asignatura: props,
            open: !this.state.open
        });
    }

    render() {
        const asignaturas = this.state.asignaturas;
        this.handleData();
        if (this.state.open) {
            return (
                <Row style={{alignContent:"justify"}}>
                    {
                        asignaturas && asignaturas.map((valor, key) =>
                            <Col sm='3' key={key}><Tarjetas data={valor} comprar={this.handleGetTemas} /></Col>
                        )
                    }
                </Row>
            )
        } else {
            return (
                <Row>
                    <Temas temas={this.state.temas} />
                </Row>
            )
        }

    }

}
export default Asignaturas;