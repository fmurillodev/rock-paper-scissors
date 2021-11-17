import { connect } from 'react-redux';

import { IStore } from 'store';
import { exitGame } from 'App/pages/home/home.actions';

import Game from './Game';

import { selectCurrentUser, selectGame } from './game.selectors';
import { playerMoveAction, resetGameAction, fetchUserScoreAction, resultGameAction } from './game.actions';



const mapStateToProps = (state: IStore) => ({
  game: selectGame(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = {
  exitGame: exitGame,
  playerMove: playerMoveAction,
  resetGame: resetGameAction,
  fetchUserScoreAction: fetchUserScoreAction,
  resultGame: resultGameAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
