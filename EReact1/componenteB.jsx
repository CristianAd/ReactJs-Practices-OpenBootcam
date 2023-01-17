import React, { Component } from 'react';

class EstadoContacto extends Component {
    constructor(props) {
      super(props);
      this.state = {
        conectado: props.contacto.conectado
      };
    }
  
    cambiarEstado = () => {
      this.setState(prevState => ({
        conectado: !prevState.conectado
      }));
    }
  
    render() {
      return (
        <div>
          {this.state.conectado ? <p>Contacto En Línea</p> : <p>Contacto No Disponible</p>}
          <button onClick={this.cambiarEstado}>Cambiar Estado</button>
        </div>
      );
    }
  }
  
  export default EstadoContacto;