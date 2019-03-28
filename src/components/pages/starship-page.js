import React from 'react';
import Row from '../row';
import { StarshipDetails, StarshipList } from '../sw-components';

export default class StarshipPage extends React.Component {
  state = {
    selectedId: null,
  }

  onSelected = (id) => {
    this.setState({ selectedId: id });
  };

  render() {
    const { selectedId } = this.state;
    return (
      <Row
        left={<StarshipList onSelected={this.onSelected} />}
        right={selectedId && <StarshipDetails selectedId={selectedId} />}
      />
    );
  }
}
