import React from 'react';
import './styles.css';

const Informacion = ({data}) => {

    const {curso,descripcion} = data;

    return (
        <div className="Informacion">
            <span class="curso">{curso}</span>
            <br/>
            <span class="descripcion">{descripcion}</span>
        </div>
    );

};

export default Informacion;