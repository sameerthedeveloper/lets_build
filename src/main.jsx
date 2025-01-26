import  { StrictMode } from 'react'; // Ensure React is imported
import { createRoot } from 'react-dom/client'; // New method to create a root in React 18
import './index.css'; // Make sure the index.css file exists
import App from './App.jsx'; // Ensure App.jsx exists

// Create a root and render the app
const root = createRoot(document.getElementById('root')); // Get the root element
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
