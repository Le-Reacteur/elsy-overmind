import createConnect from 'overmind-react';
import App from 'overmind';
import { RUN_MIN, HEART_MIN, METEO_MIN, RUN_MAX, METEO_MAX, HEART_MAX } from './config';

// Mutations

const setValueMutation = (state, { key, value }) => {
  state[key] = value;
};

// Actions

const setValue = ({ mutate }) => mutate(setValueMutation);

// Utils

const toPercent = (v, min, max) => 0.5 + ((v - min) / (max - min)) * 0.5;

// App

export const app = new App(
  {
    state: {
      run: RUN_MIN,
      meteo: METEO_MIN,
      heart: HEART_MIN,
      water: currentStateate => {
        return (
          toPercent(currentStateate.run, RUN_MIN, RUN_MAX) *
          toPercent(currentStateate.meteo, METEO_MIN, METEO_MAX) *
          toPercent(currentStateate.heart, HEART_MIN, HEART_MAX) *
          5
        );
      },
    },
    actions: {
      setValue,
    },
  },
  {
    devtools: 'localhost:4002',
  }
);

export const connect = createConnect(app);
