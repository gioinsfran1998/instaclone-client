import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import App from './App';
import Theme from './theme/Theme';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
