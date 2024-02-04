import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import BarcodePage from "./Pages/BarcodePage/BarcodePage.jsx";
import ResearchPage from './Pages/ResearchPage/ResearchPage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<BarcodePage/>
      },
      {
        path:"/research",
        element:<ResearchPage/>,
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
