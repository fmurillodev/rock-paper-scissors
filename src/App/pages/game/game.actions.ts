import { Action } from 'redux';

import { IScores } from 'types/common';

import { gameActionTypes } from './game.actionsType';



export type IUserScoreArguments = string;
export interface IUserScorePayload {
  currentUser: IUserScoreArguments;
}
export interface IFetchUserScoreReturnValue extends Action<gameActionTypes.FETCH_USER_SCORE> {
  payload: IUserScorePayload
}
export type IFetchUserScoreAction = (currentUser: IUserScoreArguments) => IFetchUserScoreReturnValue;
export const fetchUserScoreAction = (currentUser: IUserScoreArguments): IFetchUserScoreReturnValue => ({
  type: gameActionTypes.FETCH_USER_SCORE,
  payload: { currentUser },
});



export type ISetUserScoreArguments = IScores;
export interface ISetDataUserPayload {
  scores: ISetUserScoreArguments;
}
export interface ISetDataUserReturnValue extends Action<gameActionTypes.SET_DATA_USER> {
  payload: ISetDataUserPayload;
}
export type ISetDataUserAction = (scores: ISetUserScoreArguments) => ISetDataUserReturnValue;
export const setDataUserAction = (scores: ISetUserScoreArguments): ISetDataUserReturnValue => ({
  type: gameActionTypes.SET_DATA_USER,
  payload: { scores },
});



export interface IResetGameReturnValue extends Action<gameActionTypes.RESET_GAME> { }
export type IResetGameAction = () => IResetGameReturnValue;
export const resetGameAction = (): IResetGameReturnValue => ({
  type: gameActionTypes.RESET_GAME,
});


export type IPlayerMoveArguments = string;
export interface ISetPlayerMovePayload {
  opt: IPlayerMoveArguments;
}
export interface ISetPlayerMoveReturnValue extends Action<gameActionTypes.PLAYER_MOVE> {
  payload: ISetPlayerMovePayload;
}
export type ISetPlayerMoveAction = (opt: IPlayerMoveArguments) => ISetPlayerMoveReturnValue;
export const playerMoveAction = (opt: IPlayerMoveArguments): ISetPlayerMoveReturnValue => ({
  type: gameActionTypes.PLAYER_MOVE,
  payload: { opt },
});

export type IComputerMoveArguments = string;
export interface ISetComputerMovePayload {
  opt: IComputerMoveArguments;
}
export interface ISetComputerMoveReturnValue extends Action<gameActionTypes.COMPUTER_MOVE> {
  payload: ISetComputerMovePayload;
}
export const computerMoveAction = (opt: IComputerMoveArguments): ISetComputerMoveReturnValue => ({
  type: gameActionTypes.COMPUTER_MOVE,
  payload: { opt },
});


export interface IResultGamePayload {
  scores: any;
  player: string;
  computer: string
}
export interface IResultGameReturnValue extends Action<gameActionTypes.RESULT_GAME> {
  payload: IResultGamePayload
}
export type IResultGameAction = (result: IResultGamePayload) => IResultGameReturnValue;
export const resultGameAction = (result: IResultGamePayload): IResultGameReturnValue => ({
  type: gameActionTypes.RESULT_GAME,
  payload: { ...result }
});


export type INewMessageArguments = string;
export interface INewMessagePayload {
  message: INewMessageArguments;
}
export interface ISetNewMessageeReturnValue
  extends Action<gameActionTypes.SET_MESSAGE> {
  payload: INewMessagePayload
}
export type ISetNewScoreAction = (message: INewMessageArguments) => ISetNewMessageeReturnValue;
export const setMessage = (message: INewMessageArguments): ISetNewMessageeReturnValue => ({
  type: gameActionTypes.SET_MESSAGE,
  payload: { message }
});

export type IGameActions =
  | ISetDataUserReturnValue
  | ISetPlayerMoveReturnValue
  | ISetComputerMoveReturnValue
  | IResetGameReturnValue
  | IResultGameReturnValue
  | ISetNewMessageeReturnValue;
