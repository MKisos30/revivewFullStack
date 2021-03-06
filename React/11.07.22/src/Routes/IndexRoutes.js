import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from '../App';
import Layout from './Layout';

const IndexRoutes = () => {
  return (
   <BrowserRouter>
     <Routes>
         <Route path="/" element={<Layout/>}>
            <Route index element={<App/>} />
         </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default IndexRoutes;