import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//NOTE: for an app that need a login, try to preload in the dashboard after user login, don't preload in the beginning like this
import { preload } from 'swr';
import { getTodos, todosUrlEndpoint as cacheKey } from './api/todosApi';

preload(cacheKey, getTodos);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
