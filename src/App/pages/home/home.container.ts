import { connect } from 'react-redux';

import { IStore } from 'store';

import Home from './Home';
import { fetchUser, setUserAction } from './home.actions';
import { selectAllUsersData, selectCurrentUser } from './home.selectors';

const mapStateToProps = (state: IStore) => ({
  allUsers: selectAllUsersData(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = {
  setUser: setUserAction,
  fetchUser: fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
