import { Action } from 'redux';

import { homeActionTypes } from './home.actionsType';
import { ICurrentUser, IUsers } from 'types/common';

export interface IFetchUserReturnValue extends Action<homeActionTypes.FETCH_USER> {}
export type IFetchUserAction = () => IFetchUserReturnValue;
export const fetchUser = (): IFetchUserReturnValue => ({
  type: homeActionTypes.FETCH_USER,
});

export type IFetchUserSuccessArguments = { allUsers: IUsers; currentUser: ICurrentUser };
export interface IFetchUserSuccessPayload {
  data: { allUsers: IUsers; currentUser: ICurrentUser };
}
export interface IFetchUserSuccessActionReturnValue
  extends Action<homeActionTypes.FETCH_USER_SUCCESS> {
  payload: IFetchUserSuccessPayload;
}

export const fetchUserSuccessAction = (
  data: IFetchUserSuccessArguments,
): IFetchUserSuccessActionReturnValue => ({
  type: homeActionTypes.FETCH_USER_SUCCESS,
  payload: { data },
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

export interface IExitGameReturnValue extends Action<homeActionTypes.EXIT_USER> {}
export type IExitGame = () => IExitGameReturnValue;
export const exitGame = (): IExitGameReturnValue => ({
  type: homeActionTypes.EXIT_USER,
});

export type IHomeActions =
  | IFetchUserReturnValue
  | IFetchUserSuccessActionReturnValue
  | ISetUserReturnValue
  | IExitGameReturnValue;
