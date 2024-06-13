import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Users } from "./pages/users";
import { NotFound } from "./pages/NotFound";
import { LoginInformation } from "./pages/loginInformation";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {

                index: true,
                element: <Home />

            },
            {

                path: "/login",
                element: <LoginInformation />
            },
            {
                path: "/users",
                element: <Users />
            },
            {
                path: '/*',
                element: <NotFound />,
            }

        ]
    }
])