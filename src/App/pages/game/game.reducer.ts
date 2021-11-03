import produce, { current } from 'immer';

import { LOCAL_CONFIG, OPTIONS } from 'constants/common';

import { resultGame } from './game.action';
import { IGameActions } from './game.actions';
import { gameActionTypes } from './game.actionsType';
import { InitialScore } from '../home/home.constants';

export interface IScore {
  score: number;
  icon: string;
}

export interface IScores {
  [key: string]: IScore;
}

export interface IGameState {
  player: string;
  computer: string;
  play: boolean;
  message: boolean | string;
  scores: IScores;
}

export const gameInitialState: IGameState = {
  player: '',
  computer: '',
  play: false,
  message: false,
  scores: InitialScore,
};

export const gameReducer = (state = gameInitialState, action: IGameActions) =>
  produce(state, (draft) => {
    const copy = current(draft);
    const player = copy.player;
    const computer = copy.computer;

    switch (action.type) {
      case gameActionTypes.SET_DATA_USER:
        draft.scores = InitialScore;
        break;

      case gameActionTypes.PLAYER_MOVE:
        draft.player = action.payload.opt;
        break;

      case gameActionTypes.COMPUTER_MOVE:
        draft.computer = OPTIONS[action.payload.opt];
        draft.play = true;
        break;

      case gameActionTypes.RESULT_GAME:
        const { message, score } = resultGame(player, computer);
        draft.message = message;
        draft.scores.lost.score = score?.lost
          ? draft.scores.lost.score + 1
          : draft.scores.lost.score;
        draft.scores.win.score = score?.win ? draft.scores.win.score + 1 : draft.scores.win.score;
        draft.scores.totalGames.score = draft.scores.totalGames.score + 1;
        break;

      case gameActionTypes.PERSIST_RESULT:
        const usersOfStorage = JSON.parse(localStorage.getItem(LOCAL_CONFIG) || '');
        const resultSave = { [usersOfStorage.currentUser]: copy.scores };
        const dataBySave = {
          currentUser: usersOfStorage.currentUser,
          allUsers: { ...usersOfStorage.allUsers, ...resultSave },
        };
        localStorage.setItem(LOCAL_CONFIG, JSON.stringify(dataBySave));
        break;

      case gameActionTypes.RESET_GAME:
        draft.play = false;
        draft.player = '';
        draft.computer = '';
        draft.message = false;
        break;
    }
  });

export default gameReducer;
