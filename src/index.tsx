import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { themeOptions } from './Theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './pages/ErrorPage';
import Landing from './Landing';
import ProjectCollection from './pages/ProjectCollection';
import projectContents from './pages/content/projectContents'
import ProjectDetail from './pages/ProjectDetail';

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
        element: <ProjectCollection />,
      },
      {
        path:"projects/Spark",
        element: <ProjectDetail content={projectContents["spark"]} />
      },
      {
        // about page is still rendered using the project Content template.
        path: "about",
        element:<ProjectDetail content={projectContents["about"]} />
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
