import React, { Fragment } from "react";
import Hoom from "./pages/Hoom"
import Header from "./component/header/Header";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration} from "react-router-dom";
import Footer from "./component/footer/Footer";
import Cart from "./component/header/Cart";
import { productsData } from "./api/Api";
import ProductDetails from "./component/productDetails/ProductDetails";

const Layout = ()=>{
    return(
      <div>
        <Header/>
        <ScrollRestoration/>
        <Outlet/>
        <Footer/>
      </div>
    )
}

const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Hoom/>,
          loader: productsData
        },
        {
          path:'/product/:id',
          element:<ProductDetails/>
        },
        {
          path:"/cart",
          element:<Cart/>
        }
      ]
    }
])
function App( ) {
    return(
      <Fragment>
          <RouterProvider router={router}/>
      </Fragment>
    )
}

export default App;
