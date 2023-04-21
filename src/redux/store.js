import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import { persistedUserReducer } from './slices/userSlice'


export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: [thunk]
})

export const persistor = persistStore(store)