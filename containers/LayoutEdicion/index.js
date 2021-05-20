import React from 'react';
import PropTypes from 'prop-types';

import { NavbarEdicion } from '../../components';
import { ContainerBody } from './styled';

function LayoutEdicion({ children }) {
  return (
    <ContainerBody>
      <NavbarEdicion />
      {children}
       {/* <Footer /> */}
    </ContainerBody>
  );
}

LayoutEdicion.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LayoutEdicion;