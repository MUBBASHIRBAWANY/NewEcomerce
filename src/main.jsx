import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./tailwind.output.css";
import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';
import { store } from './Redux/store.js';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store} >
    <App />
    </Provider>
  </BrowserRouter>,
)
