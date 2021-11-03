import React from 'react';
import { BiExit } from 'react-icons/bi';

import styleModule from './header.module.scss';

interface IHeader {
  greeting: string;
  onClick: () => void;
}

const Header = (props: IHeader) => {
  return (
    <div className={styleModule.headerContainer}>
      <h3>{props.greeting}</h3>
      <BiExit onClick={props.onClick} className={styleModule.icon} />
    </div>
  );
};

export default Header;
