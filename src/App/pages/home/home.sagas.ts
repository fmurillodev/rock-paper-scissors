import { all, put, takeEvery } from 'redux-saga/effects';

import { LOCAL_CONFIG } from 'constants/common';

import { homeActionTypes } from './home.actionsType';
import { fetchUserSuccessAction } from './home.actions';

export function* fetchUserSaga() {
  try {
    const users = JSON.parse(localStorage.getItem(LOCAL_CONFIG) || '');
    yield put(fetchUserSuccessAction(users));
  } catch (error) {
    // handle Error
  }
}

export default function* homeSaga() {
  yield all([takeEvery(homeActionTypes.FETCH_USER, fetchUserSaga)]);
}
