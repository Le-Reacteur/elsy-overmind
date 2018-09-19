import React from 'react';
import Drink from './icons/Drink';
import PropTypes from 'prop-types';

// range(3) => [0, 1, 2]
function range(size) {
  return Array.apply(null, Array(size)).map(function(x, i) {
    return i;
  });
}

const WaterGlasses = ({ iconSize, waterValue, maxGlasses = 5 }) => {
  const clampedValue = Math.max(0, Math.min(maxGlasses, waterValue));
  const padding = 5;
  const iconSizeWithPadding = iconSize + padding * 2;
  const part = clampedValue - Math.floor(clampedValue);
  const overflowWidth = Math.floor(clampedValue) * iconSizeWithPadding + (part === 0 ? 0 : padding + part * iconSize);
  return (
    <div className="glasses-container" style={{ width: maxGlasses * iconSizeWithPadding, height: iconSizeWithPadding }}>
      <div className="glasses-inside">
        {range(5).map(i => (
          <div key={i} style={{ padding }}>
            <Drink color="#E0E0E0" size={iconSize} />
          </div>
        ))}
      </div>
      <div className="glasses-overflow" style={{ width: overflowWidth, height: iconSizeWithPadding }}>
        <div className="glasses-inside">
          {range(maxGlasses).map(i => (
            <div key={i} style={{ padding }}>
              <Drink color="#29B6F6" size={iconSize} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

WaterGlasses.propTypes = {
  iconSize: PropTypes.number.isRequired,
  waterValue: PropTypes.number.isRequired,
  maxGlasses: PropTypes.number,
};

export default WaterGlasses;
