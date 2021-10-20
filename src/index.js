import App from './App';
import ReactDOM from 'react-dom';
import './components/style.css';
import React from 'react';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
