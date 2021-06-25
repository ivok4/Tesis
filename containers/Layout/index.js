import React from 'react';
import PropTypes from 'prop-types';

import { Navbar } from '../../components';
import { ContainerBody } from './styled';

function Layout({ children, handleLogout, isUser }) {
  return (
    <ContainerBody>
      <Navbar handleLogout={handleLogout} isUser={isUser}/>
      {children}
       {/* <Footer /> */}
    </ContainerBody>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;