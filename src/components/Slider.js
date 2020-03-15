import React from "react";
import RcSlider from "rc-slider/lib/Slider";
import { useOvermind } from "../logic";

const Slider = ({
  app,
  icon,
  name,
  stateKey,
  unit = "",
  min = 0,
  max = 100
}) => {
  const { state, actions } = useOvermind();

  return (
    <div className="slider-container">
      <div className="slider-icon">
        {React.cloneElement(icon, { size: 40 })}
      </div>
      <div className="slider-content">
        <p className="slider-name">
          {name + ": "}{" "}
          <span className="slider-value">{state[stateKey] + unit}</span>
        </p>
        <div className="slider-range">
          <RcSlider
            min={min}
            max={max}
            value={state[stateKey]}
            onChange={v => {
              actions.setValue({ key: stateKey, value: v });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
