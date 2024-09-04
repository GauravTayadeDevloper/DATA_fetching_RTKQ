import { combineReducers } from 'redux';
import {thunk } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import repoReducer from './reducer';
import favoritesReducer from './favRuducer';
import { fetchRepos } from './action';

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    repos: repoReducer,
    [fetchRepos.reducerPath]: fetchRepos.reducer, // Add RTK Query reducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, fetchRepos.middleware), // Add RTK Query middleware
});

store.subscribe(() => {
    localStorage.setItem('favorites', JSON.stringify(store.getState().favorites));
});

export default store;
