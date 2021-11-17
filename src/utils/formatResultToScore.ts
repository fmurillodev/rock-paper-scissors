import produce from 'immer';

import { IResolutionGameReturnValue, IScores } from 'types/common';


export const formatResultToScore: any = (result: IResolutionGameReturnValue, score: IScores) => produce(score, (draft) => {
  draft.lost.score = result?.score?.lost
    ? draft.lost.score + 1
    : draft.lost.score;
  draft.win.score = result?.score?.win ? draft.win.score + 1 : draft.win.score;
  draft.totalGames.score = draft.totalGames.score + 1;
})


