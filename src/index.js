import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cheeses from './components/cheese-list'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
      <Cheeses />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
