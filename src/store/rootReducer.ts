import { combineReducers } from 'redux';

import users from 'App/pages/home/home.reducer';
import game from 'App/pages/game/game.reducer';

const combinedReducers = combineReducers({
  users,
  game,
});

export default combinedReducers;
