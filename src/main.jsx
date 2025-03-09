import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>
  </StrictMode>
);