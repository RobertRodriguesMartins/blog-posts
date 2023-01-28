import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer';
import { composeWithDevTools } from '@redux-devtools/extension';

// const store = createStore(rootReducer, applyMiddleware(reduxThunk));

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
)

export default store;
