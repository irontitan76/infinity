import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Byline from './Byline';
import Headline from 'grommet/components/Headline';
import Image from 'grommet/components/Image';
import Separator from './Separator';

export default class Story extends Component {
  render() {
    const { settings } = this.props;

    return (
      <Box { ...settings.externalContainer }>
        <Box>
          <Image { ...settings.image } />
          <Box { ...settings.container }>
            {settings.date}
            <Separator settings={ settings.separator }/>
            <Headline { ...settings.subtitle }>{settings.subtitle.value}</Headline>
            <Box { ...settings.content }>
              {settings.content.value}
            </Box>
          </Box>
        </Box>
        <Box { ...settings.bylineContainer }>
          <Byline settings={ settings.byline } />
        </Box>
      </Box>
    );
  }
};
