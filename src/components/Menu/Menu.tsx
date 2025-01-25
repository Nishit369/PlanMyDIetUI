import React from 'react';
import { items } from './Menuitems';

interface MenuProps {
  isOpen: boolean;
  onChange: (value: boolean) => void;
  menuOpen: boolean;
  menuChange: (value: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ isOpen, onChange, menuOpen, menuChange }) => {
  const hoverSound = React.useMemo(() => new Audio('/hover.mp3'), []);
  const clickSound = React.useMemo(() => new Audio('/click.mp3'), []);

  function handleHoverSound() {
    hoverSound.volume = 0.6;
    hoverSound.play();
  }

  function handleClickSound() {
    clickSound.volume = 0.6;
    clickSound.play();
  }

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
            <span className="material-icons" style={{ fontSize: '27px' }}>
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