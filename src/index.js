import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
ReactDOM.render(
  // strict mode allows to show multiple components if not strict mode only one component is exported
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render(<App />, document.getElementById("root"));