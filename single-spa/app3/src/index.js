import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function render(el) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(el)
  );
}

if (!window.__SINGLE_SPA__) {
  render('root')
}

export function bootstrap () {
  console.log('app3 bootstrap')
  return Promise.resolve().then(() => {

  });
}

export function mount (props) {
  debugger
  console.log('app3 mount', props)
  return Promise.resolve().then(() => {
    render('microApp')
  })
}

export function unmount () {
  console.log('app3 unmount')
  return Promise.resolve().then(() => {
    debugger
    ReactDOM.unmountComponentAtNode(document.getElementById('microApp'))
  })
}

export function update () {
  console.log('app3 update');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
