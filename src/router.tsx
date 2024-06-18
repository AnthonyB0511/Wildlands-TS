import { createBrowserRouter } from "react-router-dom";
// import { lazy } from 'react'
import App from './App'
import Home from "./pages/Home";
import Billetterie from "./pages/Billetterie";
import Contact from "./pages/Contact";
import Forest from "./pages/Forest";
import Water from "./pages/Water";
import Wind from "./pages/Wind";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [{
            path: "/",
            element: <Home />
        }, {
            path: "/Billetterie",
            element: <Billetterie />
        }, {
            path: "/Contact",
            element: <Contact />
        }, {
            path: "/Au-coeur-de-la-forêt",
            element: <Forest />
        }, {
            path: "/Les-pieds-dans-l-eau",
            element: <Water />
        }, {
            path: "/La-tête-dans-les-airs",
            element: <Wind />
        }]
    }
])