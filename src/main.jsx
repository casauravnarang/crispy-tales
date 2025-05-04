import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this points to your App component

const root = ReactDOM.createRoot(document.getElementById('app')); // This should match the ID in index.html
root.render(<App />);
