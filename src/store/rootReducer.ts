import { combineReducers } from 'redux';

import user from 'App/pages/home/home.reducer';
import game from 'App/pages/game/game.reducer';

const combinedReducers = combineReducers({
  user,
  game,
});

export default combinedReducers;
