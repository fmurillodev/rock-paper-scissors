import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { IUsers, ICurrentUser } from 'types/common';
import { IStore } from 'store';

import { fetchUser, IFetchUserAction, ISetUserAction, setUserAction } from './home.actions';
import { selectAllUsersData, selectCurrentUser } from './home.selectors';

import styleModule from './app.module.scss';

interface IProps {
  allUsers: IUsers;
  currentUser: ICurrentUser;
  setUser: ISetUserAction;
  fetchUser: IFetchUserAction;
}

const Home = (props: IProps) => {
  let history = useHistory();
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const { fetchUser } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleJoin = () => {
    props.setUser(inputValue);
  };

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (props.currentUser) {
      setTimeout(() => {
        history.push('/game');
      }, 1500);
    } else {
      setLoading(false);
    }
  }, [props.currentUser, history]);

  return (
    <div className={styleModule.container}>
      {loading && <h1>loading...</h1>}
      {!loading && (
        <>
          <img src="/logo-game.png" alt="Logo Game" />
          <input
            type="text"
            placeholder="Enter your Name"
            value={inputValue}
            onChange={handleChange}
          />
          <button type="button" onClick={handleJoin}>
            Join
          </button>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  allUsers: selectAllUsersData(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = {
  setUser: setUserAction,
  fetchUser: fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
