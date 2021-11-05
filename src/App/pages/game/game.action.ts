import { OPTIONS } from 'constants/common';

export const resultGame = (player: string, computer: string) => {
  const playerOption = OPTIONS.indexOf(player);
  const computerOpt = OPTIONS.indexOf(computer);

  const msg = `You played ${OPTIONS[playerOption]} and the computer played ${OPTIONS[computerOpt]}`;

  if (playerOption === computerOpt) return { message: `${msg} -- Tie --` };

  if (
    (playerOption === 0 && computerOpt === 2) ||
    (playerOption === 1 && computerOpt === 0) ||
    (playerOption === 2 && computerOpt === 1)
  )
    return { message: `${msg} ** Won **`, score: { win: true } };

  return { message: `${msg} You lost :(`, score: { lost: true } };
};
