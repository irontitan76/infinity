import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

export default class HomeSlider extends Component {

  render() {
    const { settings } = this.props;

    return (
      <Box { ...settings.container }>
        <Heading { ...settings.heading }>{settings.heading.value}</Heading>
        <div style={{...settings.line}}></div>
      </Box>
    );
  }
}
