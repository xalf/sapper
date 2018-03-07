import ReactRedux from 'react-redux';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {
	createGame
} from './actions/sapper';
import Sapper from './components/supper';
import { sapperStore } from './store/sapper';

const mapStateToProps = state => ({
	bombsList: state.bombsList,
	isStartGame: state.isStartGame
});

const mapDispatchToProps = {
	createGame
};

const sapperConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sapper);



const SapperApp = () => (
	<ReactRedux.Provider store={sapperStore}>
    <sapperConnected />
  </ReactRedux.Provider>
); 

ReactDOM.render(
  <SapperApp />,
  document.getElementById('root')
);
