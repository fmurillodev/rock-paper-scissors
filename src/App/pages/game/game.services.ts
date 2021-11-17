import produce from "immer"

import { getItemsLocalStorage, setItemsLocalStorage } from 'utils/connectLocalStorage';
import { IScores } from 'types/common';
import { OPTIONS } from 'constants/common';
import { IResolutionGameReturnValue } from 'types/common';

export interface IResultGameArguments {
  player: string;
  computer: string
}

export type IResultGameAction = (arg: IResultGameArguments) => IResolutionGameReturnValue

export const gameResolution = (arg: IResultGameArguments): IResolutionGameReturnValue => {
  const playerOption = OPTIONS.indexOf(arg.player);
  const computerOpt = OPTIONS.indexOf(arg.computer);

  let msg = `You played ${OPTIONS[playerOption]} and the computer played ${OPTIONS[computerOpt]}`;
  if (playerOption === computerOpt) return { message: `${msg} -- Tie --` };

  if (
    (playerOption === 0 && computerOpt === 2) ||
    (playerOption === 1 && computerOpt === 0) ||
    (playerOption === 2 && computerOpt === 1)
  )
    return { message: `${msg} ** Won **`, score: { win: true } };

  return { message: `${msg} You lost :(`, score: { lost: true } };

};


interface IDraft {
  currentUser: string;
  users: IScores
}

export const updateItemsLocalStorage = (scores: any): void => {
  const { currentUser, users }: IDraft = getItemsLocalStorage();
  const usersUpdate = produce(users, (draft) => {
    draft[currentUser] = scores
  })
  setItemsLocalStorage({ currentUser, users: usersUpdate })
}

