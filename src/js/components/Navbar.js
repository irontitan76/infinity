import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import SCIcon from 'grommet/components/icons/base/StandardsConnectivity';
import Anchor from 'grommet/components/Anchor';

import SessionMenu from './SessionMenu';
import { navActivate } from '../actions/nav';

class Navbar extends Component {
  constructor() {
    super();
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    this.props.dispatch(navActivate(false));
  }

  render() {
    const { nav: { items } } = this.props;

    const links = items.map(page => (
      <Anchor key={page.label} path={page.path} label={page.label} />
    ));

    return (
      <Header colorIndex='neutral-1' fixed={true} pad='medium'>
        <Title onClick={this._onClose} a11yTitle='Close Menu'>
          <SCIcon />
          <span>INFINITY Innovation</span>
        </Title>
        <Box direction='row' responsive={false} flex={true} justify='center'>
          <Menu direction='row'>
            {links}
          </Menu>
        </Box>
      </Header>
    );
  }
}

Navbar.defaultProps = {
  nav: {
    active: true, // start with nav active
    enabled: true, // start with nav disabled
    responsive: 'multiple'
  }
};

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string,
      label: PropTypes.string
    }))
  })
};

const select = state => ({
  nav: state.nav
});

export default connect(select)(Navbar);
