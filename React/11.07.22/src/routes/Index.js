import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Layout from './Layout';
import App from '../App';

const Index = () => {
  return (
   <BrowserRouter>
     <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<App/>} />
         </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default Index