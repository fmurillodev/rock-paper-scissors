import { icons, scoresDefault } from 'constants/common';

export const InitialScore = scoresDefault.reduce(
  (acc, score) => ({
    ...acc,
    [score]: { score: 0, icon: icons[score] },
  }),
  {},
);
