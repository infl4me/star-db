import React from 'react';
import './item-list.css';

const ItemList = ({ data, onSelected, renderItem }) => {
  const items = data.map((item) => {
    const { id } = item;
    return (
      <li key={id} className="item-list__item">
        <button
          type="button"
          onClick={() => onSelected(id)}
          className="item-list__btn btn"
        >
          {renderItem(item)}
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

export default ItemList;
