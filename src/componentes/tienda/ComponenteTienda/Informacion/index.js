import React from 'react';
import './styles.css';
import Typography from '@material-ui/core/Typography';

const Informacion = ({data}) => {

    const {nombre,descripcion} = data;

    return (

                <div>
                    <Typography gutterBottom variant="headline" component="h2">
                        {nombre}
                    </Typography>
                    <Typography component="p">
                        {descripcion}
                    </Typography>
                </div>

    );

};

export default Informacion;