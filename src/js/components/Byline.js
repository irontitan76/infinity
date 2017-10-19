import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

export default class Byline extends Component {
  render() {
    const { settings } = this.props;

    return (
      <Box { ...settings.externalContainer }>
        <Box { ...settings.internalContainer }></Box>
        <Box { ...settings.bioContainer }>
          <Heading { ...settings.heading }>{settings.heading.value}</Heading>
          {settings.bio}
        </Box>
      </Box>
    );
  }
};
