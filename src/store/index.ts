import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

import { IGameState } from 'App/pages/game/game.reducer';
import { IHomeState } from 'App/pages/home/home.reducer';
import { fetchCurrentUser } from 'App/pages/home/home.actions';

const sagaMiddleware = createSagaMiddleware();

export interface IStore {
  user: IHomeState,
  game: IGameState;
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

store.dispatch(fetchCurrentUser());

export default store;
