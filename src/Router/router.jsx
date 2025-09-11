import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import LandingPage from "../Pages/LandingPage";
import QuotesList from "../Pages/QuotesList";
import AddQuotes from "../Pages/AddQuotes";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/AuthLayout/Login";
import Register from "../Pages/AuthLayout/Register";
import PrivateRoute from "@/Routes/PrivateRoute";
import MyQuotes from "@/Pages/MyQuotes";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: LandingPage
            },
            {
                path: "quotes",
                Component: QuotesList,
            },
            {
                path: "add-quote",
                element: <PrivateRoute><AddQuotes /></PrivateRoute>
            },
            {
                path: "my-quotes",
                element: <PrivateRoute><MyQuotes/></PrivateRoute>
            },
        ],
    },
    {
        path: "/dashboard",
        Component: DashboardHome
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            }
        ]
    }
]);