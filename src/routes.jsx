import React, { lazy } from "react";
import Loading from "../src/components/Loading";
import { createBrowserRouter }  from "react-router-dom";

const Home = lazy(() => import("./Pages/Home"));
const AboutMain = lazy(() => import("./Pages/AboutMain"));
const Partner = lazy(() => import("./Pages/Partner"));

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
        path: "/about",
        element: (
            <React.Suspense fallback={<Loading />}>
                <AboutMain />
            </React.Suspense>
        ),
    },
    {
        path: "/partner-with-us",
        element: (
            <React.Suspense fallback={<Loading />}>
                <Partner />
            </React.Suspense>
        ),
    },
]);

export default BrowserRouter;
