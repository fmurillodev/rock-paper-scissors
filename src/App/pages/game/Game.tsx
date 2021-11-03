import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { IStore } from 'store';
import { ICurrentUser, IScores } from 'types/common';
import { exitGame, IExitGame } from 'App/pages/home/home.actions';
import Header from 'App/components/Header';
import Icon from 'App/components/Icon';
import { OPTIONS } from 'constants/common';

import { selectCurrentUser, selectDataUsers, selectGame } from './game.selectors';
import { IGameState } from './game.reducer';
import { IResetGameAction, ISetDataUserAction, ISetPlayerMoveAction } from './game.actions';
import { playerMoveAction, resetGameAction, setDataUserAction } from './game.actions';

import gameModule from './game.module.scss';

interface IProps {
  currentUser: ICurrentUser;
  dataUser: IScores;
  exitGame: IExitGame;
  game: IGameState;
  playerMove: ISetPlayerMoveAction;
  resetGame: IResetGameAction;
  setDataUser: ISetDataUserAction;
}

const Game = (props: IProps) => {
  const history = useHistory();
  const { dataUser, currentUser, setDataUser } = props;
  const [loading, setLoading] = useState<boolean>(true);

  const handleClickExit = () => {
    props.resetGame();
    props.exitGame();
    history.push('/');
  };

  useEffect(() => {
    !currentUser && history.push('/');
    if (currentUser) {
      const init = () => {
        setDataUser(dataUser[currentUser.toLowerCase()]);
        setLoading(false);
      };
      init();
    }
  }, [currentUser, history, dataUser, setDataUser]);

  return (
    <div className={gameModule.rootGame}>
      {!loading && (
        <>
          <Header greeting={`Hi, ${props.currentUser}`} onClick={handleClickExit} />

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
                  className={classNames(gameModule.iconSelectGame, gameModule.iconBack, {
                    [gameModule.iconNotHidden]: props.game.player,
                    [gameModule.iconHidden]: !props.game.player,
                  })}
                />
              </div>

              <div className={classNames(gameModule.card, { [gameModule.back]: props.game.play })}>
                <Icon
                  type={props.game.computer}
                  className={classNames(gameModule.iconSelectGame, gameModule.iconBack, {
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
              <div className={gameModule.contanierButton}>
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

const mapStateToProps = (state: IStore) => ({
  dataUser: selectDataUsers(state),
  game: selectGame(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = {
  exitGame: exitGame,
  playerMove: playerMoveAction,
  resetGame: resetGameAction,
  setDataUser: setDataUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
