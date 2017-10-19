import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';

import Insight from './../components/Insight';

import { insights } from './../config/insights';

export default class Insights extends Component {
  render() {
    return (
      <Box colorIndex='light-2'>
        <Insight settings={ insights[0] }/>
      </Box>
    );
  }
};
