import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Spinner from "../components/ui/Spinner";
import UpdateCoffee from "../pages/updateCoffee/UpdateCoffee";
import AddCoffee from "../pages/addCoffee/AddCoffee";
import DetailsCoffee from "../pages/detailsCoffee/DetailsCoffee";
import NotFound from "../pages/404/NotFound";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import Users from "../pages/users/Users";
import UpdateUser from "../components/user/UpdateUser";
import DetailsUser from "../components/user/Detailsuser";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Spinner />,
        loader: () =>
          fetch("https://espresso-emporium-server-psi.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "/addCoffee",
        element: (
          <PrivateRoutes>
            <AddCoffee />
          </PrivateRoutes>
        ),
      },
      {
        path: "/detailsCoffee/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-psi.vercel.app/coffees/${params.id}`
          ),
        Component: DetailsCoffee,
      },
      {
        path: "/updateCoffee/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-psi.vercel.app/coffees/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <UpdateCoffee />
          </PrivateRoutes>
        ),
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/users",
        hydrateFallbackElement: <Spinner />,
        loader: () =>
          fetch("https://espresso-emporium-server-psi.vercel.app/users"),
        element: (
          <PrivateRoutes>
            <Users />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateUser/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-psi.vercel.app/users/${params.id}`
          ),
        Component: UpdateUser,
      },
      {
        path: "/detailsUser/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-psi.vercel.app/users/${params.id}`
          ),
        Component: DetailsUser,
      },

      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
