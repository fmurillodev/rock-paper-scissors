import { LOCAL_CONFIG } from 'constants/common';
import { InitialScore } from './home.constants';
import { IHomeState } from './home.reducer';

export const signin = (state: IHomeState, user: string) => {
  let joinUser;

  if (!state) {
    joinUser = JSON.stringify({
      allUsers: { [user.toLowerCase()]: InitialScore },
      currentUser: user.toLowerCase(),
    });
  } else {
    if (!state.allUsers[user.toLowerCase()]) {
      joinUser = JSON.stringify({
        allUsers: { ...state.allUsers, [user.toLowerCase()]: InitialScore },
        currentUser: user.toLowerCase(),
      });
    } else {
      joinUser = JSON.stringify({
        ...state,
        currentUser: user.toLowerCase(),
      });
    }
  }
  localStorage.setItem(LOCAL_CONFIG, joinUser);
  return JSON.parse(joinUser);
};
