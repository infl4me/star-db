import React from 'react';
import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';

export default class PlanetsPage extends React.Component {
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
        left={<PlanetList onSelected={this.onSelected} />}
        right={selectedId && <PlanetDetails selectedId={selectedId} />}
      />
    );
  }
}
