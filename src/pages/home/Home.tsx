import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { LOCAL_CONFIG } from 'constants/common';

import styleModule from './app.module.scss';

const Home = () => {
  let history = useHistory();
  const InitialScore = { score: {} };
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleJoin = () => {
    let joinUser;
    const fetchUsers = localStorage.getItem(LOCAL_CONFIG);
    if (!fetchUsers) {
      joinUser = JSON.stringify({ [inputValue.toLowerCase()]: InitialScore });
    } else {
      const users = JSON.parse(localStorage.getItem(LOCAL_CONFIG) || '');
      if (!users[inputValue]) {
        joinUser = JSON.stringify({ ...users, [inputValue.toLowerCase()]: InitialScore });
      } else {
        joinUser = JSON.stringify({ [inputValue.toLowerCase()]: InitialScore });
      }
    }
    localStorage.setItem(LOCAL_CONFIG, joinUser);
    history.push('/game');
  };

  return (
    <div className={styleModule.container}>
      <img src="/logo-game.png" alt="Logo Game" />
      <input type="text" placeholder="Enter your Name" value={inputValue} onChange={handleChange} />
      <button type="button" onClick={handleJoin}>
        Join
      </button>
    </div>
  );
};

export default Home;
