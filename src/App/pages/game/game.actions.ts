import { Action } from 'redux';
import { IScore } from 'types/common';

import { gameActionTypes } from './game.actionsType';

export type ISetDataUserArguments = IScore;
export interface ISetDataUserPayload {
  user: ISetDataUserArguments;
}
export interface ISetDataUserReturnValue extends Action<gameActionTypes.SET_DATA_USER> {
  payload: ISetDataUserPayload;
}
export type ISetDataUserAction = (user: ISetDataUserArguments) => ISetDataUserReturnValue;
export const setDataUserAction = (user: ISetDataUserArguments): ISetDataUserReturnValue => ({
  type: gameActionTypes.SET_DATA_USER,
  payload: { user },
});

export interface IResetGameReturnValue extends Action<gameActionTypes.RESET_GAME> {}
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

export type IComputerMoveArguments = number;
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

export interface IResultGameReturnValue extends Action<gameActionTypes.RESULT_GAME> {}
export type IResultGameAction = () => IResultGameReturnValue;
export const resultGameAction = (): IResultGameReturnValue => ({
  type: gameActionTypes.RESULT_GAME,
});

export interface IPersistResultAtLocalStorageReturnValue
  extends Action<gameActionTypes.PERSIST_RESULT> {}
export type IPersistResultAtLocalStorageAction = () => IPersistResultAtLocalStorageReturnValue;
export const persistResultAtLocalStorageAction = (): IPersistResultAtLocalStorageReturnValue => ({
  type: gameActionTypes.PERSIST_RESULT,
});

export type IGameActions =
  | ISetDataUserReturnValue
  | ISetPlayerMoveReturnValue
  | ISetComputerMoveReturnValue
  | IResetGameReturnValue
  | IResultGameReturnValue
  | IPersistResultAtLocalStorageReturnValue;
