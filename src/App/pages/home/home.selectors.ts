import { createSelector } from 'reselect';

import { IStore } from 'store';

export const selectUser = (state: IStore) => state;

export const selectCurrentUser = createSelector([selectUser], (state) => state.user.currentUser);
