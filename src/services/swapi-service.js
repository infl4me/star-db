import axios from 'axios';

export default class {
  _apiBase = 'https://swapi.co/api/';

  _imgBase = 'https://starwars-visualguide.com/assets/img/';

  getResource = async (url) => {
    const res = await axios.get(`${this._apiBase}${url}`);
    return res.data;
  }

  getPlanet = async (id) => {
    const data = await this.getResource(`planets/${id}/`);
    return this._parsePlanet(data);
  }

  getPerson = async (id) => {
    const data = await this.getResource(`people/${id}/`);
    return this._parsePerson(data);
  }

  getStarship = async (id) => {
    const data = await this.getResource(`starships/${id}/`);
    return this._parseStarship(data);
  }

  getAllPeople = async () => {
    const { results } = await this.getResource('people');
    return results.map(this._parsePerson);
  };

  getAllStarships = async () => {
    const { results } = await this.getResource('starships');
    return results.map(this._parseStarship);
  };

  getAllPlanets = async () => {
    const { results } = await this.getResource('planets');
    return results.map(this._parsePlanet);
  };

  getPersonImg = id => `${this._imgBase}characters/${id}.jpg`;

  getStarshipImg = id => `${this._imgBase}starships/${id}.jpg`;

  getPlanetImg = id => `${this._imgBase}planets/${id}.jpg`;


  _extractId = ({ url }) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return url.match(idRegExp)[1];
  }

  _parsePlanet = planet => ({
    id: this._extractId(planet),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  })

  _parseStarship = starship => ({
    id: this._extractId(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity,
  })

  _parsePerson = person => ({
    id: this._extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
  })
}
