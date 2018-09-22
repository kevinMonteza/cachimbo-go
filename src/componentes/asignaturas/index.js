import React, { Component } from 'react';
import { Row, Col,Container } from 'reactstrap';
import Tarjetas from './tarjetas';
import Temas from '../temas/';
import GetData from '../../servicios/getData';
class Asignaturas extends Component {

    constructor() {
        super();
        this.state = {
            asignaturas: [],
            open: true,
            id_asignatura: null,
            temas: [],
            usuario:JSON.parse(sessionStorage.getItem('user'))
        }
        this.handleGetTemas = this.handleGetTemas.bind(this);
        this.handleData = this.handleData.bind(this);
    }
/**
 * Carga las asignaturas en las que esta matriculado 
 * el usuario
 */
    componentWillMount() {
        const dir='usuario_asignatura.php';
        const data=`?id_usuario=${this.state.usuario.id_usuario}`;
        GetData(dir,data).then((result)=>{
            this.setState({
                asignaturas: result
            })
        })
    }
    handleData() {
        const imagenes = [
            { imagen: 'aritmetica.jpg' },
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
            { imagen: 'http://materialparaprofesores.ga/wp-content/uploads/2018/03/razonamientoverbal.png' },
            { imagen: 'http://img.webme.com/pic/r/recreomatematico/LOGO_BLOG_MATEMATICA.png' },
            { imagen: 'https://static.iris.net.co/semana/upload/images/2017/12/30/552173_1.jpg' }
        ];

        let a = 0;
        const datitos = this.state.asignaturas;
        if(datitos){ 
        for (a = 0; a < datitos.length; a++) {
            datitos[a].imagen = imagenes[a].imagen;
        }
    }
    }
    /**
     * funcion para obtener los temas por asignatura  
     */
    handleGetTemas(props) {
        //console.log(props);
        const dir='tema-asignatura';
        const data=props;
        GetData(dir,data,true).then((result)=>{
            this.setState({
                temas: result,
                id_asignatura: props,
                open: !this.state.open
            })
        })
    }

    render() {
        const asignaturas = this.state.asignaturas;
        this.handleData();
        if (this.state.open) {
            return (
                <Container style={{overflowX:"auto"}}>
                    <Row>
                    {
                        asignaturas && asignaturas.map((valor, key) =>
                            <Col sm='4' className="mt-4" key={key}><Tarjetas data={valor} comprar={this.handleGetTemas}/></Col>
                        )
                    }
                </Row>
                </Container>
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