import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../Ecommerce/frontend/src/Redux";
import Homescreen from './screens/Homescreen'
import Productscreen from './screens/Productscreen'
import Cartscreen from './screens/Cartscreen'
import Checkoutscreen from './screens/Checkoutscreen'
import Orderhistoryscreen from './screens/Orderhistoryscreen'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homescreen />}/>
      <Route path="/productscreen" element={<Productscreen />}/>
      <Route path="/cartscreen" element={<Cartscreen />}/>
      <Route path="/checkoutscreen" element={<Checkoutscreen />}/>
      <Route path="/orderhistoryscreen" element={<Orderhistoryscreen />}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
