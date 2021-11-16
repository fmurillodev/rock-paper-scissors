import { Action } from 'redux';

import { homeActionTypes } from './home.actionsType';


export interface IFetchCurrentUserReturnValue extends Action<homeActionTypes.FETCH_CURRENT_USER> { }
export type IFetchCurrentUserAction = () => IFetchCurrentUserReturnValue;
export const fetchCurrentUser = (): IFetchCurrentUserReturnValue => ({
  type: homeActionTypes.FETCH_CURRENT_USER,
});

export type IJoinUserArguments = string;
export interface IJoinUserPayload {
  user: IJoinUserArguments;
}
export interface IJoinUserReturnValue extends Action<homeActionTypes.JOIN_USER> {
  payload: IJoinUserPayload;
}
export type IJoinUserAction = (user: IJoinUserArguments) => IJoinUserReturnValue;
export const joinUserAction = (user: IJoinUserArguments): IJoinUserReturnValue => ({
  type: homeActionTypes.JOIN_USER,
  payload: { user },
});

export type ISetUserArguments = string;
export interface ISetUserPayload {
  user: ISetUserArguments;
}
export interface ISetUserReturnValue extends Action<homeActionTypes.SET_USER> {
  payload: ISetUserPayload;
}
export type ISetUserAction = (user: ISetUserArguments) => ISetUserReturnValue;
export const setUserAction = (user: ISetUserArguments): ISetUserReturnValue => ({
  type: homeActionTypes.SET_USER,
  payload: { user },
});



export interface IExitGameReturnValue extends Action<homeActionTypes.EXIT_USER> { }
export type IExitGame = () => IExitGameReturnValue;
export const exitGame = (): IExitGameReturnValue => ({
  type: homeActionTypes.EXIT_USER,
});

export type IHomeActions =
  | IFetchCurrentUserReturnValue
  | ISetUserReturnValue
  | IExitGameReturnValue;
