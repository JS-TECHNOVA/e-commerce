import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from './pages/Login';
import MainLayout from './layouts/MainLayout';
import ProductList from './components/ProductList';


const router = createBrowserRouter([
  
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        "path":"/",
        element:"homepage"
      },
      {
        'path':"/products",
        element:<ProductList/>
      },

       {
        path: "/login",
        Component: Login
      },
      
    ]
  },
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
