import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles.css';
import '@progress/kendo-theme-default/dist/all.css';
import { worker } from './mocks/browser';

import App from './app/app';

// `worker.start()` returns a Promise that resolves
// once the Service Worker is up and ready to intercept requests.
worker.start();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
