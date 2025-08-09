import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.scss'
import { BrowserRouter } from "react-router-dom";
import { Store } from './context/Store.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Store>
        <App />
      </Store>
    </BrowserRouter>  
  </StrictMode>,
)
//all done secessfully ...store ha ha