// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App/>
//   </StrictMode>
// );




// import ReactDOM from 'react-dom/client'

// import { Provider } from 'react-redux'
// import store from './app/store'

// import App from './App.jsx'

// // As of React 18
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// )


// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store.js';
import App from './App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
