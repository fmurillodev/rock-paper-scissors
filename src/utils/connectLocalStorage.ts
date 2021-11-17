import { USERS } from 'constants/common'
import { IScore } from 'types/common';

export const getItemsLocalStorage = () => JSON.parse(localStorage.getItem(USERS) || '{}');

export const getUserScore = (currentUser: string): IScore => {
  const items = JSON.parse(localStorage.getItem(USERS) || '{}');
  return items.users[currentUser]
};

export const setItemsLocalStorage = (payload: any) => localStorage.setItem(USERS, JSON.stringify(payload));


