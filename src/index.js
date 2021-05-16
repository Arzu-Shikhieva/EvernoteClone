import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import {
    ReactReduxFirebaseProvider,
    getFirebase
} from "react-redux-firebase";
import {createFirestoreInstance, getFirestore, reduxFirestore} from "redux-firestore";
import firebase from "firebase/app";
import fbconfig from './config/fbConfig';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
    reduxFirestore(fbconfig)
)
)

const rrfProps = {
    firebase,
    config: fbconfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
          <React.StrictMode>
              <App />
          </React.StrictMode>
      </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

