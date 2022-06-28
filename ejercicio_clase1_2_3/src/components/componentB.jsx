import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ComponentB = (status) => {

  const [connected, setConnected] = useState(status);

  return (
    <div>
      <h3> {connected === false ? 'Contacto No Disponible':'Contacto En Linea'} </h3>      
      <button onClick={() => setConnected(!connected)}>{connected === false ? 'Conectado' : 'Desconectado'}</button>
    </div>
  );
};


ComponentB.propTypes = {
  status: PropTypes.bool,
};


export default ComponentB;
