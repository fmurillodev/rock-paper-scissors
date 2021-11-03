import { all, put, takeEvery } from 'redux-saga/effects';

import { LOCAL_CONFIG } from 'constants/common';

import { homeActionTypes } from './home.actionsType';
import { fetchUserSuccessAction } from './home.actions';

export function* fetchUserSaga() {
  const users = JSON.parse(localStorage.getItem(LOCAL_CONFIG) || '');
  yield put(fetchUserSuccessAction(users));
}

export default function* gameSaga() {
  yield all([takeEvery(homeActionTypes.FETCH_USER, fetchUserSaga)]);
}
