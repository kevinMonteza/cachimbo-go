import React from 'react';
import './styles.css';

const Informacion = ({data}) => {

    const {nombre,descripcion} = data;

    return (
        <div className="Informacion">
            <span className="curso">{nombre}</span>
            <br/>
            <span className="descripcion">{descripcion}</span>
        </div>
    );

};

export default Informacion;