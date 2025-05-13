import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import AddCoffee from "../components/coffee/AddCoffee";
import UpdateCoffee from "../components/coffee/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            { index: true, Component: Home },
            {path: '/addCoffee', Component: AddCoffee },
            {path: '/updateCoffee', Component: UpdateCoffee },
          
        ]
    },
]);

export default router;