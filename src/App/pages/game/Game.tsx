import classNames from 'classnames';
import { capitalize } from 'lodash';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { ICurrentUser } from 'types/common';
import { IExitGame } from 'App/pages/home/home.actions';
import Header from 'App/components/Header';
import Icon from 'App/components/Icon';
import { OPTIONS } from 'constants/common';

import { IGameState } from './game.reducer';
import {
  IFetchUserScoreAction,
  IResetGameAction,
  ISetPlayerMoveAction,
  IResultGameAction,
} from './game.actions';

import gameModule from './game.module.scss';

interface IProps {
  currentUser: ICurrentUser;
  exitGame: IExitGame;
  game: IGameState;
  playerMove: ISetPlayerMoveAction;
  resetGame: IResetGameAction;
  fetchUserScoreAction: IFetchUserScoreAction;
  resultGame: IResultGameAction;
}

const Game = (props: IProps) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const { currentUser, fetchUserScoreAction, game, resultGame } = props;

  const handleClickExit = () => {
    props.resetGame();
    props.exitGame();
    history.push('/');
  };

  useEffect(() => {
    if (currentUser) {
      const init = () => {
        fetchUserScoreAction(currentUser);
        setLoading((prevLoading) => !prevLoading);
      };
      init();
    }
    return () => {
      !currentUser && history.push('/');
    };
  }, [currentUser, history, fetchUserScoreAction, setLoading]);

  useEffect(() => {
    if (game.computer && game.player) {
      resultGame({ player: game.player, computer: game.computer, scores: game.scores });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game.computer, game.player, resultGame]);

  return (
    <div className={gameModule.rootGame}>
      {!loading && (
        <>
          <Header greeting={`Hi, ${capitalize(props.currentUser)}`} onClick={handleClickExit} />

          <div className={gameModule.container}>
            <div className={gameModule.rootScore}>
              {Object.values(props.game.scores).map((item) => (
                <div className={gameModule.containerScore}>
                  <Icon type={item.icon} className={gameModule.icon} />
                  <h1>{item.score}</h1>
                </div>
              ))}
            </div>
            <div className={gameModule.containerCardsGame}>
              <div className={classNames(gameModule.card, { [gameModule.back]: props.game.play })}>
                <Icon
                  type={props.game.player}
                  className={classNames(gameModule.iconBack, {
                    [gameModule.iconNotHidden]: props.game.player,
                    [gameModule.iconHidden]: !props.game.player,
                  })}
                />
              </div>

              <div className={classNames(gameModule.card, { [gameModule.back]: props.game.play })}>
                <Icon
                  type={props.game.computer}
                  className={classNames(gameModule.iconBack, {
                    [gameModule.iconNotHidden]: props.game.computer,
                    [gameModule.iconHidden]: !props.game.computer,
                  })}
                />
              </div>
            </div>

            <div className={gameModule.containerMessage}>
              {props.game.message && <p className={gameModule.message}>{props.game.message}</p>}
            </div>

            {props.game.play && (
              <div className={gameModule.containerButton}>
                <button className={gameModule.resetGame} onClick={props.resetGame}>
                  Again
                </button>
              </div>
            )}

            <div className={gameModule.containerGame}>
              {!props.game.play &&
                OPTIONS.map((option, i) => (
                  <div
                    className={gameModule.containerSelectIconGame}
                    onClick={() => props.playerMove(OPTIONS[i])}
                  >
                    <Icon type={option} className={gameModule.iconSelectGame} />
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
