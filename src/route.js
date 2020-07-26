import React from "react";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductAction from "./pages/ProductAction/ProductAction";
const routes = [
    {
        path: "/",
        exact: true,
        main: ()=> <Home />
    },
    {
        path: "/product-list",
        exact: false,
        main: ()=><ProductListPage />
    },
    
    {
        path: "/product/add",
        exact: false,
        main :({history})=> <ProductAction history={history}/>
    },
    {
        path: "/product/:id/edit",
        exact: false,
        // match đễ đọc tham số trên url
        main: ({history, match})=> <ProductAction match={match} history={history}/>
    },
    {
        path: "",
        exact: false,
        main: ()=><NotFound />
    }
];

export default routes;