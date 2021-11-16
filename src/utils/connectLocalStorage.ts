import { USERS } from 'constants/common'

export const getItemsLocalStorage = () => JSON.parse(localStorage.getItem(USERS) || '{}');

export const setItemsLocalStorage = (payload: any) => localStorage.setItem(USERS, JSON.stringify(payload));




