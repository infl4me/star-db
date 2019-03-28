import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

export default mapMethodsToProps => Wrapped => props => (
  <SwapiServiceConsumer>
    {(swapiService) => {
      const serviceProps = mapMethodsToProps(swapiService);
      return <Wrapped {...props} {...serviceProps} />;
    }}
  </SwapiServiceConsumer>
);
