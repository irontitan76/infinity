import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Anchor from 'grommet/components/Anchor';
import Animate from 'grommet/components/Animate';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Carousel from 'grommet/components/Carousel';
import Heading from 'grommet/components/Heading';
import InspectIcon from 'grommet/components/icons/base/Inspect';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import WorkshopIcon from 'grommet/components/icons/base/Workshop';

export default class Slider extends Component {
  renderButton(slide) {
    if ( slide.button ) {
      return <Box size='xlarge' pad='medium'>
        <Button {...slide.button} />
      </Box>
    }
  }
  renderTiles(slide) {
    let result = [];

    if ( slide.tiles ) {
      slide.tiles.forEach((tile) => {
        if ( tile.type === 'anchor' ) {
          result.push(
            <Tile key={tile.key}>
              <Anchor {...tile.value}/>
            </Tile>
          );
        } else if ( tile.type === 'text' ) {
          result.push(<Tile key={tile.key}>{tile.value}</Tile>)
        }
      });

      return <Tiles fill={true} flush={false}>{result}</Tiles>;
    } else {
      return;
    }
  }
  renderSlides(slides) {
    const result = [];

    slides.forEach((slide) => {
      let button = null;
      let tiles = null;

      button = this.renderButton(slide);
      tiles = this.renderTiles(slide);

      result.push(
        <Box { ...slide.externalContainer }>
          <Box { ...slide.internalContainer }>
            <Animate { ...slide.animate }>
              <Box { ...slide.box }>
                <Heading { ...slide.heading }>{slide.heading.value}</Heading>
                <Heading { ...slide.description }>{slide.description.value}</Heading>
                {button}
                {tiles}
              </Box>
            </Animate>
          </Box>
        </Box>
      )
    });

    return result;
  }
  render() {
    const { settings } = this.props;

    return (
      <Carousel { ...settings.carousel }>
        {this.renderSlides(settings.slides)}
      </Carousel>
    );
  }
};
