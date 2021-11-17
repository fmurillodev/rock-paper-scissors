import produce from 'immer';

import { scoresDefault } from 'constants/common';

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
    switch (action.type) {
      case gameActionTypes.SET_DATA_USER:
        draft.scores = scoresDefault.reduce(
          (acc, score) => ({ ...acc, [score]: action.payload.scores[score] }),
          {},
        );
        break;

      case gameActionTypes.PLAYER_MOVE:
        draft.player = action.payload.opt;
        break;

      case gameActionTypes.COMPUTER_MOVE:
        draft.computer = action.payload.opt;
        draft.play = true;
        break;

      case gameActionTypes.SET_MESSAGE:
        draft.message = action.payload.message;
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
