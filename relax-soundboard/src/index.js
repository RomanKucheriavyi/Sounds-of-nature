import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { ThemeProvider } from "./hooks/useTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

