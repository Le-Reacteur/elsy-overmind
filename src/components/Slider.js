import React from 'react';
import RcSlider from 'rc-slider/lib/Slider';
import { connect } from '../logic';

const Slider = ({ app, icon, name, stateKey, unit = '', min = 0, max = 100 }) => {
  return (
    <div className="slider-container">
      <div className="slider-icon">{React.cloneElement(icon, { size: 40 })}</div>
      <div className="slider-content">
        <p className="slider-name">
          {name + ': '} <span className="slider-value">{app.state[stateKey] + unit}</span>
        </p>
        <div className="slider-range">
          <RcSlider
            min={min}
            max={max}
            value={app.state[stateKey]}
            onChange={v => {
              app.actions.setValue({ key: stateKey, value: v });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default connect(Slider);
