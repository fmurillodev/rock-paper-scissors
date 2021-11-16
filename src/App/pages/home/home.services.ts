import { getItemsLocalStorage, setItemsLocalStorage } from 'utils/connectLocalStorage';

import { InitialScore } from './home.constants';

export const getCurrentUser = (): string => {
  const items = getItemsLocalStorage();
  return items.currentUser
}

export const makeUser = (user: string): void => {
  const items = getItemsLocalStorage();
  if (!items.users || !items.users[user]) {
    setItemsLocalStorage({
      users: {
        ...items.users,
        [user]: InitialScore
      },
      currentUser: user
    });
  } else {
    setItemsLocalStorage({
      ...items,
      currentUser: user
    });
  }
}

export const disconnectCurrentUser = () => {
  const items = getItemsLocalStorage();
  setItemsLocalStorage({
    ...items,
    currentUser: ""
  });
}
