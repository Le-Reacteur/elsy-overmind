import React from 'react';
import WaterGlasses from './WaterGlasses';
import PropTypes from 'prop-types';

const WaterRecomandation = ({ waterValue }) => {
  const waterRound = Math.floor(waterValue * 1000) / 1000;
  return (
    <div className="water-container">
      <WaterGlasses iconSize={50} waterValue={waterValue} />
      <p className="water-text">
        Recommended amount of water: <span className="water-value">{waterRound + 'L'}</span>
      </p>
    </div>
  );
};

WaterRecomandation.propTypes = {
  waterValue: PropTypes.number.isRequired,
};

export default WaterRecomandation;
