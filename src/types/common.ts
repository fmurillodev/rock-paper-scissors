export interface IScore {
  icon: string;
  score: number;
}

export interface IScores {
  [key: string]: IScore;
}

export type ICurrentUser = string;
export type IUsers = IScores;

export interface IIcons {
  [key: string]: string;
}

export interface IResolutionGameReturnValue {
  message: string;
  score?: { [key: string]: boolean };
}
