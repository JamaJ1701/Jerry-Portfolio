import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import { themeOptions } from './Theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './ErrorPage';
import Landing from './Landing';
import Projects from './Projects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Landing />
      },
      {
        path: "projects",
        element: <Projects />
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
        <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
