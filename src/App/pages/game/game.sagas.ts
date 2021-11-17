import { all, call, put, takeEvery } from 'redux-saga/effects';

import { OPTIONS } from 'constants/common';
import { IResolutionGameReturnValue, IScores } from 'types/common';
import { getUserScore } from 'utils/connectLocalStorage';
import { computerMove } from 'utils/computerMove';
import { formatResultToScore } from 'utils/formatResultToScore';

import { gameActionTypes } from './game.actionsType';
import { updateItemsLocalStorage, gameResolution } from './game.services';
import {
  computerMoveAction,
  setDataUserAction,
  IFetchUserScoreReturnValue,
  IResultGameReturnValue,
  setMessage
} from './game.actions';

export function* fetchUserScoreSaga(action: IFetchUserScoreReturnValue) {
  const userScore: IScores = yield call(getUserScore, action.payload.currentUser);
  yield put(setDataUserAction(userScore));
}

export function* computerMoveSaga() {
  const computerOpt: number = yield call(computerMove);
  yield put(computerMoveAction(OPTIONS[computerOpt]));
}

export function* resultGameSaga(action: IResultGameReturnValue) {
  const { player, computer, scores } = action.payload;

  const result: IResolutionGameReturnValue = yield call(gameResolution, { player: player, computer: computer });
  const scoresUpdate: IScores = yield call(formatResultToScore, result, scores);

  yield call(updateItemsLocalStorage, scoresUpdate)
  yield put(setDataUserAction(scoresUpdate));
  yield put(setMessage(result.message));

}

export default function* gameSaga() {
  yield all([
    takeEvery(gameActionTypes.FETCH_USER_SCORE, fetchUserScoreSaga),
    takeEvery(gameActionTypes.PLAYER_MOVE, computerMoveSaga),
    takeEvery(gameActionTypes.RESULT_GAME, resultGameSaga)
  ]);
}
