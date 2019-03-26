import React from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class RandomPlanet extends React.Component {
  swapiService = new SwapiService();

  state = {
    loading: true,
    planet: null,
    imageUrl: null,
  }

  componentDidMount() {
    this.updatePlanet();
  }

  getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  updatePlanet() {
    const id = this.getRandomInt(2, 19);
    const { getPlanet, getPlanetImg } = this.swapiService;
    getPlanet(id)
      .then((planet) => {
        const imageUrl = getPlanetImg(id);
        this.setState({ planet, imageUrl, loading: false });
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
    const { loading } = this.state;
    return (
      <div className="random-planet box">
        {loading && <Spinner />}
        {loading || this.renderPlanet()}
      </div>
    );
  }
}
