import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Spinner from "../components/ui/Spinner";
import UpdateCoffee from "../pages/updateCoffee/UpdateCoffee";
import AddCoffee from "../pages/addCoffee/AddCoffee";
import DetailsCoffee from "../pages/detailsCoffee/DetailsCoffee";
import NotFound from "../pages/404/NotFound";

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
            {
                path: '/detailsCoffee/:id',
                hydrateFallbackElement: <Spinner />,
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
                Component: DetailsCoffee
            },
            {
                path: '/updateCoffee/:id',
                hydrateFallbackElement: <Spinner />,
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
                Component: UpdateCoffee
            },
            {
                path: '*',
                Component: NotFound
            }

        ]
    },

]);

export default router;