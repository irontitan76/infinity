import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Animate from 'grommet/components/Animate';
import Card from 'grommet/components/Card';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

class Grid extends Component {
  constructor(props) {
    super(props);

    this._onClick = this._onClick.bind(this);
  }
  _onClick(path) {
    const { router } = this.context;
    return router.history.push(path);
  }
  render() {
    const { settings } = this.props;

    const tiles = settings.tiles.map((tile) => {
      return (
        <Tile { ...tile.container } onClick={(path) => this._onClick(tile.url)}>
          <Animate { ...tile.animate }>
            <Card { ...tile.card } />
          </Animate>
        </Tile>
      );
    });

    return (
      <Tiles { ...settings.tilesContainer }>
        {tiles}
      </Tiles>
    );
  }
};

Grid.propTypes = {
  error: PropTypes.object,
  settings: PropTypes.object.isRequired
};

Grid.contextTypes = {
  intl: PropTypes.object,
  router: PropTypes.object.isRequired,
};

export default Grid;
