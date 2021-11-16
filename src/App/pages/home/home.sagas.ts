import { all, call, put, takeEvery } from 'redux-saga/effects';

import { homeActionTypes } from './home.actionsType';
import { ISetUserReturnValue, setUserAction } from './home.actions';
import { disconnectCurrentUser, getCurrentUser, makeUser } from './home.services';

export function* fetchCurrentUserSaga() {
  try {
    const currentUser: string = yield call(getCurrentUser);
    yield put(setUserAction(currentUser))
  } catch (error) {
    // handle Error
  }
}

export function* joinUserSaga(action: ISetUserReturnValue) {
  try {
    yield call(makeUser, action.payload.user);
    yield put(setUserAction(action.payload.user))
  } catch (error) {
    // handle Error
  }
}

export function* disconnectCurrentUserSaga() {
  try {
    yield call(disconnectCurrentUser);
    yield put(setUserAction(''))
  } catch (error) {
    // handle Error
  }
}

export default function* homeSaga() {
  yield all([
    takeEvery(homeActionTypes.FETCH_CURRENT_USER, fetchCurrentUserSaga),
    takeEvery(homeActionTypes.JOIN_USER, joinUserSaga),
    takeEvery(homeActionTypes.EXIT_USER, disconnectCurrentUserSaga),
  ]);
}
