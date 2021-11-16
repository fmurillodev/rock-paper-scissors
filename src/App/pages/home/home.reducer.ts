import produce from 'immer';

import { ICurrentUser } from 'types/common';

import { IHomeActions } from './home.actions';
import { homeActionTypes } from './home.actionsType';

export interface IHomeState {
  currentUser: ICurrentUser;
}

export const homeInitialState: IHomeState = {
  currentUser: '',
};

const homeReducer = (state = homeInitialState, action: IHomeActions) =>
  produce(state, (draft) => {

    switch (action.type) {
      case homeActionTypes.SET_USER:
        draft.currentUser = action.payload.user
        break;
    }
  });

export default homeReducer;
