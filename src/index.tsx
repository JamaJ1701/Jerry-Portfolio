import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme} from './Theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './pages/ErrorPage';
import Landing from './Landing';
import ProjectCollection from './pages/ProjectCollection';
import projectContents from './pages/content/json/projectContents'
import ProjectDetail from './pages/ProjectDetail';

// Static page content imports
import Spark from './pages/content/static/Spark';
import About from './pages/content/static/About';
import Isbar from './pages/content/static/Isbar';
import Portfolio from './pages/content/static/Portfolio';

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
        // about page is still rendered using the project Content template.
        path: "about",
        element:<ProjectDetail content={projectContents["about"]}>
          <About />
        </ProjectDetail>
      },
      {
        path: "projects",
        element: <ProjectCollection />,
      },
      {
        path: "projects/Portfolio",
        element:<ProjectDetail content={projectContents["portfolio"]}>
          <Portfolio />
        </ProjectDetail>
      },
      {
        path:"projects/Spark",
        element: <ProjectDetail content={projectContents["spark"]}>
          <Spark />
        </ProjectDetail>
      },
      {
        path: "projects/ISBAR",
        element:<ProjectDetail content={projectContents["isbar"]}>
          <Isbar />
        </ProjectDetail>
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
