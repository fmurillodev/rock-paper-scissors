import { useState } from 'react';
import { useHistory } from 'react-router';
import classNames from 'classnames';

import Header from 'components/Header';
import Icon from 'components/Icon';

import { OPTIONS } from 'constants/common';
import { cumputerAction } from './game.action';

import styleModule from './game.module.scss';

const Game = () => {
  const history = useHistory();

  const [player, setPlayer] = useState<string>('');
  const [computer, setComputer] = useState<string>('');
  const [play, setPlay] = useState<boolean>(false);
  const [message, setMessage] = useState<string | boolean>(false);
  const [score, setScore] = useState({
    win: { score: 0, icon: 'GiTrophyCup' },
    lost: { score: 0, icon: 'GiChewedSkull' },
    totalGame: { score: 0, icon: 'MdSportsScore' },
  });

  const handleClickExit = () => {
    history.push('/');
  };

  const handleGame = (opt: number) => () => {
    setPlayer(OPTIONS[opt]);
    const { pcOpt, message, score } = cumputerAction(opt);
    setPlay(true);
    setComputer(pcOpt);
    setMessage(message);
    setPlay(true);
    setScore((prevScore) => ({
      ...prevScore,
      lost: {
        ...prevScore.lost,
        score: score?.lost ? prevScore.lost.score + 1 : prevScore.lost.score,
      },
      win: {
        ...prevScore.win,
        score: score?.win ? prevScore.win.score + 1 : prevScore.win.score,
      },
      totalGame: {
        ...prevScore.totalGame,
        score: prevScore.totalGame.score + 1,
      },
    }));
  };

  const resetPlayer = () => {
    setComputer('');
    setPlayer('');
    setMessage(false);
    setPlay(false);
  };

  return (
    <div className={styleModule.rootGame}>
      <Header greeting="Hi, Francisco" onClick={handleClickExit} />

      <div className={styleModule.container}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {Object.values(score).map((item) => (
            <div className={styleModule.containerScore}>
              <Icon type={item.icon} className={styleModule.icon} />
              <h1>{item.score}</h1>
            </div>
          ))}
        </div>
        <div className={styleModule.containerCardsGame}>
          <div
            className={classNames(styleModule.card, {
              [styleModule.back]: play,
            })}
          >
            <Icon
              type={player}
              className={classNames(styleModule.iconSelectGame, styleModule.iconBack, {
                [styleModule.iconNotHidden]: player,
                [styleModule.iconHidden]: !player,
              })}
            />
          </div>

          <div className={classNames(styleModule.card, { [styleModule.back]: play })}>
            <Icon
              type={computer}
              className={classNames(styleModule.iconSelectGame, styleModule.iconBack, {
                [styleModule.iconNotHidden]: computer,
                [styleModule.iconHidden]: !computer,
              })}
            />
          </div>
        </div>

        <div className={styleModule.containerMessage}>
          {message && <p className={styleModule.message}>{message}</p>}
        </div>
        {play && (
          <div className={styleModule.contanierButton}>
            <button className={styleModule.resetPlayer} onClick={resetPlayer}>
              Again
            </button>
          </div>
        )}
        <div className={styleModule.containerGame}>
          {!play &&
            OPTIONS.map((option) => (
              <div
                className={styleModule.containerSelectIconGame}
                onClick={handleGame(OPTIONS.indexOf(option))}
              >
                <Icon type={option} className={styleModule.iconSelectGame} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
