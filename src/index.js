import React from 'react';
import ReactDoM from 'react-dom';

import { ContextProvider } from './contexts/ContextProvider';
import './index.css';
import App from './App';

ReactDoM.render(
  <ContextProvider>
    <App />
  </ContextProvider>
  , document.getElementById('root')
);
