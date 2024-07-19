import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/home';
import Plantview from './views/Plantview/plantview';
import { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/plants:_id",
    element: <Plantview />
  },
  {
    path: "*",
    element: <h1>Page not found</h1>
  }
])

root.render((<><RouterProvider router={router} /> <Toaster /> </>))