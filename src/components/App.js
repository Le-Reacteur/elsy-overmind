import React from 'react';
import Title from './Title';
import Card from './Card';
import Slider from './Slider';
import CardSplitter from './CardSplitter';
import WaterRecomandation from './WaterRecomandation';
import Run from './icons/Run';
import Heart from './icons/Heart';
import Sun from './icons/Sun';
import { connect } from '../logic';
import { RUN_MIN, HEART_MIN, METEO_MIN, RUN_MAX, METEO_MAX, HEART_MAX } from '../config';

const App = ({ app }) => {
  return (
    <div className="container">
      <Card>
        <Title />
        <WaterRecomandation waterValue={app.state.water} />
        <CardSplitter />
        <Slider icon={<Run color="#F44336" />} name="Distance" unit="m" stateKey="run" min={RUN_MIN} max={RUN_MAX} />
        <Slider
          icon={<Sun color="#FF9800" />}
          name="Temperature"
          unit="°C"
          stateKey="meteo"
          min={METEO_MIN}
          max={METEO_MAX}
        />
        <Slider
          icon={<Heart color="#2196F3" />}
          name="Cardio"
          unit=" BPM"
          stateKey="heart"
          min={HEART_MIN}
          max={HEART_MAX}
        />
      </Card>
    </div>
  );
};

export default connect(App);
