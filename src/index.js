import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {call, put, takeEvery} from 'redux-saga/effects'
import axios from 'axios';
import 'typeface-alegreya-sans-sc';
import 'typeface-nothing-you-could-do';
import 'typeface-syncopate';
import 'typeface-abel';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
   yield takeEvery('GET_PORTFOLIO', getPortfolioSaga);
   yield takeEvery('POST_PROJECT', postProjectSaga);
   yield takeEvery('DELETE_PROJECT', deleteProjectSaga)
}

function* getPortfolioSaga(action){
   try{
      const response = yield call(axios.get, '/portfolio');
      yield put({type: 'SET_PORTFOLIO', payload: response.data})
   }
   catch (error) {
      console.log('GET request to /portfolio UNSUCCESSFUL:', error);
   }
}

function* postProjectSaga(action) {
   try {
      yield call(axios.post, '/portfolio/', action.payload);
      yield put({type: 'GET_PORTFOLIO'});
  }
  catch (error) {
      console.log('POST request to /portfolio UNSUCCESSFUL:', error);
  }
}

function* deleteProjectSaga(action) {
   try {
       yield call(axios.delete, `/portfolio/?id=${action.payload}`);
       yield put({type: 'GET_PORTFOLIO'});  
   }
   catch (error) {
       console.log('DELETE request to /portfolio/?id= UNSUCCESSFUL:', error);
   }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const portfolio = (state = [], action) => {
    switch (action.type) {
        case 'SET_PORTFOLIO':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
      portfolio,
      tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
