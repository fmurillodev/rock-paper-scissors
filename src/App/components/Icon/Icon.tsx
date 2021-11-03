import React from 'react';
import { GiPaper, GiScissors, GiRock, GiTrophyCup, GiChewedSkull } from 'react-icons/gi';
import { MdSportsScore } from 'react-icons/md';

export interface IMappingsIcon {
  [key: string]: React.FC<any>;
}

export interface IIcon {
  type: string;
  className?: string;
}

const mappings: IMappingsIcon = {
  Rock: GiRock,
  Paper: GiPaper,
  Scissors: GiScissors,
  GiTrophyCup: GiTrophyCup,
  GiChewedSkull: GiChewedSkull,
  MdSportsScore: MdSportsScore,
};

const Icon: React.FC<IIcon> = ({ type, className }) => {
  const Component = mappings[type];
  if (!Component) return null;
  return <Component className={className} />;
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
