import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Home from "./components/Home";
import Layout from "./components/Layout";


export const routes = [
    {
        path:"/",
        element:<Layout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>
            },
        ]
    }
]

