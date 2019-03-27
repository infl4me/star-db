import React from 'react';
import { withHandlers } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import './item-details.css';

const { getPerson, getPersonImg } = new SwapiService();

const ItemDetails = ({ data }) => {
  const {
    name, gender, birthYear, eyeColor, id,
  } = data;
  return (
    <div className="item-details">
      <img className="item-details__img" src={getPersonImg(id)} alt="person" />
      <div className="item-details__block">
        <h2 className="item-details__title">{name}</h2>
        <ul className="item-details__list">
          <li className="item-details__list-item">{`Gender ${gender}`}</li>
          <li className="item-details__list-item">{`Birth year ${birthYear}`}</li>
          <li className="item-details__list-item">{`Eye color ${eyeColor}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default withHandlers(ItemDetails, getPerson);
