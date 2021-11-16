import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { ICurrentUser } from 'types/common';
import Icon from 'App/components/Icon';

import { IJoinUserAction } from './home.actions';

import styleModule from './home.module.scss';

interface IProps {
  currentUser: ICurrentUser;
  joinUserAction: IJoinUserAction;
}

const Home = (props: IProps) => {
  let history = useHistory();
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState<boolean | string>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleJoin = () => {
    if (inputValue.length) {
      return props.joinUserAction(inputValue.toLowerCase());
    }
    setMessage('Remember write your Name');
  };

  useEffect(() => {
    if (props.currentUser) {
      history.push('/game');
    }
  }, [props.currentUser, history]);

  return (
    <div className={styleModule.container}>
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
        {message && <p className="error-message">{message}</p>}
      </>
    </div>
  );
};
export default Home;
