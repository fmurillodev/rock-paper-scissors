import { all, put, takeEvery } from 'redux-saga/effects';

import { gameActionTypes } from './game.actionsType';
import {
  computerMoveAction,
  resultGameAction,
  persistResultAtLocalStorageAction,
} from './game.actions';

export function* computerMoveSaga() {
  const computerOpt = Math.floor(Math.random() * 3);
  yield put(computerMoveAction(computerOpt));
}

export function* resultGameSaga() {
  yield put(resultGameAction());
}

export function* persistResultAtLocalStorageSaga() {
  yield put(persistResultAtLocalStorageAction());
}

export default function* gameSaga() {
  yield all([takeEvery(gameActionTypes.PLAYER_MOVE, computerMoveSaga)]);
  yield all([takeEvery(gameActionTypes.COMPUTER_MOVE, resultGameSaga)]);
  yield all([takeEvery(gameActionTypes.RESULT_GAME, persistResultAtLocalStorageSaga)]);
}
