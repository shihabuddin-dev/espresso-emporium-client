import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import AddCoffee from "../components/coffee/AddCoffee";
import UpdateCoffee from "../components/coffee/UpdateCoffee";
import Spinner from "../components/ui/Spinner";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Spinner />,
                loader: () => fetch('http://localhost:3000/coffees'),
                Component: Home
            },
            { path: '/addCoffee', Component: AddCoffee },
            { path: '/updateCoffee', Component: UpdateCoffee },

        ]
    },
]);

export default router;