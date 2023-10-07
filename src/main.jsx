import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import { Mycontext } from './Mycontext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Mycontext>
   <RouterProvider router={router} />
   </Mycontext>
  </React.StrictMode>,
)
