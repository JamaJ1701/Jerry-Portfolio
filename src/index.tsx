import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material';
import { themeOptions } from './Theme';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Landing from './Landing';
import Projects from './Projects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/projects",
    element: <Projects/>
  }
])

root.render(
  <React.StrictMode>
    <ThemeProvider theme={themeOptions}>
      <Header />
      
      <App>
        <RouterProvider router={router}/>
      </App>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
