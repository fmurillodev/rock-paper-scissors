import { OPTIONS } from 'constants/common';

export const cumputerAction = (opt: number) => {
  const pcOpt = Math.floor(Math.random() * 3);
  const msg = `Tu jugaste ${OPTIONS[opt]} y la compu jugó ${OPTIONS[pcOpt]}`;

  if (opt === pcOpt) return { pcOpt: OPTIONS[pcOpt], message: `${msg} -> Empate` };

  if ((opt === 0 && pcOpt === 2) || (opt === 1 && pcOpt === 0) || (opt === 2 && pcOpt === 1))
    return { pcOpt: OPTIONS[pcOpt], message: `${msg} -> Ganaste`, score: { win: true } };

  return {
    pcOpt: OPTIONS[pcOpt],
    message: `${msg} -> Perdiste`,
    score: { lost: true },
  };
};
