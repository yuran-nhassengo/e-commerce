import { createBrowserRouter } from "react-router-dom";
import { Contact } from "./components/pages/contact";
import { Home } from "./components/pages/home";
import { Products } from "./components/pages/products";
import { About } from "./components/pages/about";
import {Faq} from "./components/pages/faq";



export const route = createBrowserRouter([

    {
        path:"/",
        element:<Home/>

    },
    {
        path:"contact",
        element: <Contact/>,
    },
    {
        path:"products",
        element: <Products/>
    },
    {
        path: "about",
        element:< About/>

    },
    {
        path:"faq",
        element:<Faq/>,
    },

])