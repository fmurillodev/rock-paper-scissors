import { LOCAL_CONFIG } from 'constants/common';
import produce, { current } from 'immer';

import { ICurrentUser, IUsers } from 'types/common';

import { IHomeActions } from './home.actions';
import { homeActionTypes } from './home.actionsType';
import { signin } from './home.services';

export interface IHomeState {
  allUsers: IUsers;
  currentUser: ICurrentUser;
}

export const homeInitialState: IHomeState = {
  allUsers: {},
  currentUser: '',
};

const homeReducer = (state = homeInitialState, action: IHomeActions) =>
  produce(state, (draft) => {
    const currentState = current(draft);

    switch (action.type) {
      case homeActionTypes.FETCH_USER_SUCCESS:
        draft.allUsers = action.payload.data.allUsers;
        draft.currentUser = action.payload.data.currentUser;
        break;

      case homeActionTypes.SET_USER:
        const data = signin(currentState, action.payload.user);
        draft.currentUser =
          action.payload.user[0].toUpperCase() + action.payload.user.toLowerCase().slice(1);
        draft.allUsers = data.allUsers;
        break;

      case homeActionTypes.EXIT_USER:
        draft.currentUser = '';
        const storage = JSON.parse(localStorage.getItem(LOCAL_CONFIG) || '');
        localStorage.setItem(
          LOCAL_CONFIG,
          JSON.stringify({ allUsers: storage.allUsers, currentUser: undefined }),
        );
        break;
    }
  });

export default homeReducer;
