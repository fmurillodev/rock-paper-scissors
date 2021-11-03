import { createSelector } from 'reselect';

import { IStore } from 'store';

export const selectUser = (state: IStore) => state.users;

export const selectAllUsersData = createSelector([selectUser], (users) => users.allUsers);
export const selectCurrentUser = createSelector([selectUser], (users) => users.currentUser);
