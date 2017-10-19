import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Byline from './../components/Byline';
import Grid from './../components/Grid';
import Slider from './../components/Slider';
import Separator from './../components/Separator';

import { home } from './../config/home';

export default class Home extends Component {
  render() {

    return (
      <Box>
        <Slider settings={ home.slider[0] }/>
        <Separator settings={ home.separator[0] }/>
        <Grid settings={ home.grid[0] }/>
      </Box>
    );
  }
};
