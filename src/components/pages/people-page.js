import React from 'react';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

export default class PeoplePage extends React.Component {
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
        left={<PersonList onSelected={this.onSelected} />}
        right={selectedId && <PersonDetails selectedId={selectedId} />}
      />
    );
  }
}
