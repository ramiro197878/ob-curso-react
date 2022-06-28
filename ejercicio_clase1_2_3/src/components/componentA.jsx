import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';
import ComponentB from './componentB';


const ComponentA = ( {contact} ) => {
  return (
    <div>
      <h3>Nombre: {contact.name} </h3>
      <h3>Apellido: {contact.lastname} </h3>
      <h3>Email: {contact.email} </h3>
      <ComponentB status={true} />
    </div>
  );
};


ComponentA.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};


export default ComponentA;
