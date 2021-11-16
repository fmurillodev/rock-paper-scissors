import { connect } from 'react-redux';

import { IStore } from 'store';

import Home from './Home';
import { joinUserAction } from './home.actions';
import { selectCurrentUser } from './home.selectors';

const mapStateToProps = (state: IStore) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = {
  joinUserAction: joinUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
