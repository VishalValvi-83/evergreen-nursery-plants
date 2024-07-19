import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './views/Home/home';
import { Toaster } from 'react-hot-toast'
import Addplant from './views/Addplant/Addplant';
import UpdatePlant from './views/Update/UpdatePlant';

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
    path: "/update/:id",
    element: <UpdatePlant />
  },
  {
    path: "*",
    element: <h1>Page not found</h1>
  }
])

root.render((<><RouterProvider router={router} /> <Toaster /> </>))