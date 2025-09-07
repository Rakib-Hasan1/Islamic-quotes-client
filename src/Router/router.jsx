import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import LandingPage from "../Pages/LandingPage";
import QuotesList from "../Pages/QuotesList";
import AddQuotes from "../Pages/AddQuotes";

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
                Component: QuotesList
            },
            {
                path: "add-quote",
                Component: AddQuotes
            },
        ]
    },
]);