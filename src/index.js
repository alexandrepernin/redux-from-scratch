import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from './redux/createStore';
import { counter } from './redux/counter';

const store = createStore(counter)

const render = () => { 
  ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

store.subscribe(render);
render();

