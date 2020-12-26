import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './Component/App';
import store from './Store';

const app = <Provider store={store}>
              <App />
            </Provider>

ReactDOM.render(app, document.getElementById('root')
);


