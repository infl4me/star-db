import React from 'react';
import './random-planet.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withSwapiService } from '../hoc-helpers';
import { getRandomInt } from '../../utils';

class RandomPlanet extends React.Component {
  state = {
    loading: true,
    planet: null,
    imageUrl: null,
    error: false,
  }

  componentDidMount() {
    this.updatePlanet();
  }

  updatePlanet() {
    const id = getRandomInt(2, 19);
    const { getPlanet, getPlanetImg } = this.props;
    getPlanet(id)
      .then((planet) => {
        const imageUrl = getPlanetImg(id);
        this.setState({ planet, imageUrl, loading: false });
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }


  renderPlanet() {
    const {
      imageUrl,
      planet: {
        name, population, rotationPeriod, diameter,
      },
    } = this.state;
    return (
      <React.Fragment>
        <img src={imageUrl} alt="planet" className="random-planet__img" />
        <div className="random-planet__descr">
          <h2 className="random-planet__title">{name}</h2>
          <ul className="random-planet__list">
            <li className="random-planet__list-item">{`Population ${population}`}</li>
            <li className="random-planet__list-item">{`Rotation period ${rotationPeriod}`}</li>
            <li className="random-planet__list-item">{`Diameter ${diameter}`}</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }

  render() {
    const { loading, error } = this.state;
    return (
      <div className="random-planet box">
        {loading && <Spinner />}
        {error && <ErrorIndicator />}
        {!loading && !error && this.renderPlanet()}
      </div>
    );
  }
}
const mapMethodsToProps = ({ getPlanet, getPlanetImg }) => ({ getPlanet, getPlanetImg });

export default withSwapiService(mapMethodsToProps)(RandomPlanet);
