import React, { lazy } from "react";
import Loading from "../src/components/Loading";
import { createBrowserRouter }  from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const AboutMain = lazy(() => import("./Pages/AboutMain"));

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Home />
            </React.Suspense>
        ),
    },
    {
        path: "/About",
        element: (
            <React.Suspense fallback={<Loading />}>
                <AboutMain />
            </React.Suspense>
        ),
    },
]);

export default BrowserRouter;
