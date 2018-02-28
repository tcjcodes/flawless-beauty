import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ items }) => (
  <div className="carousel">
    {items.map(({ name }, index) => {
      const checked = index === 0 ? { checked: true, onChange: () => {} } : {};
      return (
        <input
          type="radio"
          key={name}
          id={name}
          name="carousel-radio"
          hidden="hidden"
          className="carousel-locator"
          {...checked}
          value={index === 0 ? 'on' : 'off'}
        />
      );
    })}
    <div className="carousel-container">
      {items.map(({ name, img }, index) => (
        <figure key={name} className="carousel-item">
          {index > 0 && (
            <label
              className="item-prev btn btn-action btn-lg"
              htmlFor={items[index - 1].name}
            >
              <i className="icon icon-arrow-left" />
            </label>
          )}
          {index < items.length - 1 && (
            <label
              className="item-next btn btn-action btn-lg"
              htmlFor={items[index + 1].name}
            >
              <i className="icon icon-arrow-right" />
            </label>
          )}
          <img
            src={img}
            className="img-responsive rounded"
            alt="macOS Yosemite Wallpaper"
          />
        </figure>
      ))}
      <div className="carousel-nav">
        {items.map(({ name }, index) => (
          <label
            key={name}
            className="nav-item text-hide c-hand"
            htmlFor={name}
          >
            {name}
          </label>
        ))}
      </div>
    </div>
  </div>
);

export default Carousel;
