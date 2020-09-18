import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/datePicker.css';
import './assets/styles/field.css';
import './assets/styles/headerLine.css';
import './assets/styles/info.css';
import './assets/styles/input.css';
import './assets/styles/item.css';
import './assets/styles/jog.css'
import './assets/styles/list.css';
import './assets/styles/login.css';
import './assets/styles/menu.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import * as serviceWorker from './serviceWorker';
import { RootRouter } from './route';
import history from './route/history';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { AppDispatch } from './store';
import store from './store/appStore';
import { actions } from './actions';

(store.dispatch as AppDispatch)(actions.auth.init()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RootRouter />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root"),
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
