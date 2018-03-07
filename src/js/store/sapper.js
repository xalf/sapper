import Redux from 'redux';
import { sapperReducer } from '../reducers/sapper';

export const sapperStore = Redux.createStore(
  sapperReducer
)