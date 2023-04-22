import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import { persistedUserReducer } from './slices/userSlice';
import moviesReducer from './slices/moviesSlice';

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    movies: moviesReducer,
  },
  middleware: [thunk]
})

export const persistor = persistStore(store);