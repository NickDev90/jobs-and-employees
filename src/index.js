import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { CssBaseline } from '@mui/material';
// import { ThemeProvider } from "@mui/material/styles";
// import { useTheme } from '@mui//material/styles';

window.store = store;

ReactDOM.render(
    <React.StrictMode>
    <Provider store={store}>
      <CssBaseline/>
      {/* <ThemeProvider theme={theme}> */}
      <App />
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
