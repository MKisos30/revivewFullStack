import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Orders from "../Orders";
import Loyout from "../Layout";

const RoutePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<App />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
