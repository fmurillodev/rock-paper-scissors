import { createSelector } from 'reselect';

import { IStore } from 'store';

export const selectUser = (state: IStore) => state;

export const selectGame = createSelector([selectUser], (state) => state.game);
export const selectDataUsers = createSelector([selectUser], (state) => state.users.allUsers);
export const selectCurrentUser = createSelector([selectUser], (state) => state.users.currentUser);
