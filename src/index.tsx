import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    root: rootReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
