import React from 'react';
import { withHandlers } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';
import './item-list.css';

const ItemList = ({ data, onSelected }) => {
  const items = data.map((item) => {
    const { name, id } = item;
    return (
      <li key={id} className="item-list__item">
        <button
          type="button"
          onClick={() => onSelected(id)}
          className="item-list__btn btn"
        >
          {name}
        </button>
      </li>
    );
  });
  return (
    <ul className="item-list box">
      {items}
    </ul>
  );
};

const { getAllPeople } = new SwapiService();

export default withHandlers(ItemList, getAllPeople);
