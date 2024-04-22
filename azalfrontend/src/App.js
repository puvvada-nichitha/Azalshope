import Header from "./components/common/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";

import { useDispatch } from "react-redux";
import { productRedux } from "./redux/productsslice/productslice";
import { useEffect } from "react";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const pdata = await fetch(
        "https://ecommerce-git-main-sukumarae5s-projects.vercel.app/products"
      );
      const finalProdData = await pdata.json();
      dispatch(productRedux(finalProdData));
    })();
  });

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    
    </>
  );
};

export default App;
