import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = responsiveFontSizes(createTheme({
  spacing: (spacing) => `${spacing * 0.25}rem`,
}));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
