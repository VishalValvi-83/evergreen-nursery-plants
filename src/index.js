import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/home';
import { Toaster } from 'react-hot-toast'
import Addplant from './views/Addplant/Addplant';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/add",
    element: <Addplant />
  },
  {
    path: "*",
    element: <h1>Page not found</h1>
  }
])

root.render((<><RouterProvider router={router} /> <Toaster /> </>))