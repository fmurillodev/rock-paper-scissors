import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'pages/home';
import Game from 'pages/game';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/game" component={Game} />
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
