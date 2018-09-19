import App from 'overmind-react';
import { derive } from 'overmind';

// Mutations

const setValueMutation = (state, { key, value }) => {
  state[key] = value;
};

// Actions

const setValue = action => action().mutate(setValueMutation);

const demo = action =>
  action()
    .map(effects => effects.api.getRandom())
    .map((_, value) => Math.floor(value * 50))
    .map((effects, value) => {
      console.log(value);
      return value * 2;
    })
    .mutate((state, value) => {
      state.run = value;
    });

// effects

const api = {
  getRandom: () => {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve(Math.random());
      }, 3000);
    });
  },
};

// Utils

const toPercent = v => 0.5 + (v / 100) * 0.5;

// App

export const app = new App(
  {
    state: {
      run: 50,
      meteo: 100,
      heart: 0,
      water: derive(stateYolo => {
        return toPercent(stateYolo.run) * toPercent(stateYolo.meteo) * toPercent(stateYolo.heart) * 5;
      }),
    },
    actions: {
      setValue,
      demo,
    },
    effects: {
      api,
    },
  },
  {
    devtools: 'localhost:4002',
  }
);

export const connect = app.connect;
