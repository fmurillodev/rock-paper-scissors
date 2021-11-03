import { all, spawn } from 'redux-saga/effects';

import homeSagas from 'App/pages/home/home.sagas';
import gameSagas from 'App/pages/game/game.sagas';

export default function* root() {
  yield all([spawn(homeSagas)]);
  yield all([spawn(gameSagas)]);
}
