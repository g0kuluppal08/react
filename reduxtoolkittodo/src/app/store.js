import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore } from 'redux';
export const store=configureStore({

reducer: todoReducer
//  composeWithDevTools(),


})
