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

const App = ({ app }) => {
  return (
    <div className="container">
      <Card>
        <Title />
        <WaterRecomandation waterValue={app.state.water} />
        <CardSplitter />
        <Slider icon={<Run color="#F44336" />} name="Distance" unit="m" stateKey="run" />
        <Slider icon={<Sun color="#FF9800" />} name="Météo" unit="°C" stateKey="meteo" />
        <Slider icon={<Heart color="#2196F3" />} name="Cardio" unit=" BPM" stateKey="heart" />
      </Card>
    </div>
  );
};

export default connect(App);
