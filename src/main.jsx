import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { CartProvider } from './Provider/CartContext';
import { HelmetProvider } from 'react-helmet-async';
import router from './router/Router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </HelmetProvider>
  </StrictMode>,
)
