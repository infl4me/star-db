import React from 'react';
import './item-details.css';

const ItemDetails = ({ data, children, getImgUrl }) => {
  const { name, id } = data;
  const items = React.Children.map(children, item => (
    React.cloneElement(item, { data, cn: 'item-details__list-item' })
  ));
  return (
    <div className="item-details box">
      <div className="item-details__imb-wrap">
        <img className="item-details__img" src={getImgUrl(id)} alt="person" />
      </div>
      <div className="item-details__block">
        <h2 className="item-details__title">{name}</h2>
        <ul className="item-details__list">
          {items}
        </ul>
      </div>
    </div>
  );
};

export default ItemDetails;
