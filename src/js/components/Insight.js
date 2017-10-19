import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Split from 'grommet/components/Split';
import Story from './Story';

import { insights } from './../config/insights';

export default class Insight extends Component {
  renderSidebar(items) {
    return items.map((item) => {
      return <Card { ...item } />
    });
  }
  render() {
    const { settings } = this.props;

    return (
      <Split fixed={false} flex='left' priority='left'>
        <Story settings={ settings }/>
        <Box basis='1/3' pad={{ between: 'medium' }} margin='large'>
          {this.renderSidebar(settings.cards)}
        </Box>
      </Split>
    );
  }
};
