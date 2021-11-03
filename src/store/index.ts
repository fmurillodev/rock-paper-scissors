import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

import { IGameState } from 'App/pages/game/game.reducer';
import { IHomeState } from 'App/pages/home/home.reducer';

const sagaMiddleware = createSagaMiddleware();

export interface IStore {
  users: IHomeState;
  game: IGameState;
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
