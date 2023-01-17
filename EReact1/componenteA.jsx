import React, { Component } from 'react';
 
import PropTypes from 'prop-types';
 


class Contacto extends Component {
 
  render() {
    const { nombre, apellido, email, conectado } = this.props;
 
          return (
            <div>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Email: {email}</p>
        <p>Conectado: {conectado ? true : false}</p>
                 
            </div>
        );
      }



}


Contacto.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email:  PropTypes.string, 
    

};


export default Contacto;


// -------