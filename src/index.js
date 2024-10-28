import React from 'react';
import ReactDOM from 'react-dom/client'; // Importuje nową metodę renderowania
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Tworzy root do renderowania aplikacji
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Jeśli chcesz rozpocząć pomiary wydajności, przekaż funkcję
// do logowania wyników (np. reportWebVitals(console.log))
// lub wyślij je do punktu końcowego w celu analizy.
reportWebVitals();
