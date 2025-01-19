/* eslint-disable react/prop-types */
import React from 'react';
import { items } from './Menuitems';
import './Menu.css';
const Menu = ({ isOpen, onChange, menuOpen, menuChange }) => {
  const hoverSound = new Audio('/hover.mp3');
  const clickSound = new Audio('/click.mp3');
  function handleHoverSound() {
    hoverSound.play();
  }
  function handleClickSound() {
    clickSound.play();
  }
  hoverSound.volume = 0.6;
  return (
    <div className={`Menu ${isOpen && 'open'}`}>
      <span
        className="material-icons btn-close"
        onClick={() => {
          onChange(false);
          menuChange(false);
          handleClickSound();
        }}
        onMouseOver={handleHoverSound}
      >
        close
      </span>
      <div className="Menu-items">
        {items.map((item, index) => (
          <a
            href={item.itemLink}
            key={index}
            onClick={handleClickSound}
            onMouseOver={handleHoverSound}
          >
            <span className="material-icons" style={{ fontSize: '36px' }}>
              {item.icon}
            </span>
            {item.itemText}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
