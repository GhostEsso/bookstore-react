import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Importez le Provider de react-redux
import store from './redux/store'; // Importez votre store Redux
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* Enveloppez votre App avec le Provider */}
      <BrowserRouter>
        <section className="main">
          <App />
        </section>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
