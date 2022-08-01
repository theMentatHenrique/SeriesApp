import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import rootReducer from './Reducers/Index';
import { configureStore,applyMiddleware} from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';
const store=configureStore({reducer:rootReducer},applyMiddleware(reduxThunk))


const SeriesApp= props=> (


<Provider store={store}>
  <Router/>
</Provider>

);


export default SeriesApp;