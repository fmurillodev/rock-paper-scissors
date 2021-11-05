export interface IScore {
  [key: string]: string | number;
}

export interface IScores {
  [key: string]: IScore;
}

export type ICurrentUser = string;
export type IUsers = IScores;

export interface IIcons {
  [key: string]: string;
}
