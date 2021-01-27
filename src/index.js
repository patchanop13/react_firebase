import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import {Provider, useSelector} from'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore,createFirestoreInstance} from 'redux-firestore'
import {ReactReduxFirebaseProvider,getFirebase, reactReduxFirebase,isLoaded } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'

const store = createStore(rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
      reduxFirestore(firebase,fbConfig),
    )
  )

  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
  }

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
