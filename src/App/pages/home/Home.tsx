import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { IUsers, ICurrentUser } from 'types/common';
import { IStore } from 'store';
import LoadingHook from 'hooks/loadingHook';

import { fetchUser, IFetchUserAction, ISetUserAction, setUserAction } from './home.actions';
import { selectAllUsersData, selectCurrentUser } from './home.selectors';

import styleModule from './app.module.scss';
import Icon from 'App/components/Icon';

interface IProps {
  allUsers: IUsers;
  currentUser: ICurrentUser;
  setUser: ISetUserAction;
  fetchUser: IFetchUserAction;
}

const Home = (props: IProps) => {
  let history = useHistory();
  const { loading, setLoading } = LoadingHook();
  const [inputValue, setInputValue] = useState('');
  const { fetchUser } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleJoin = () => {
    if (inputValue.length) {
      return props.setUser(inputValue);
    }
    alert('Remember write your Name');
  };

  useEffect(() => {
    fetchUser();
    setLoading((prevLoading) => !prevLoading);
  }, [fetchUser, setLoading]);

  useEffect(() => {
    if (props.currentUser) {
      history.push('/game');
    }
  }, [props.currentUser, history]);

  return (
    <div className={styleModule.container}>
      {loading && <h1>loading...</h1>}
      {!loading && (
        <>
          <div className="container-logo">
            <Icon className="rock" type="Rock" />
            <Icon className="paper" type="Paper" />
            <Icon className="sicssors" type="Scissors" />
          </div>
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
