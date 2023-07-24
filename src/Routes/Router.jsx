import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'about',
            element: <About></About>
        },
        {
            path: 'contact',
            element: <Contact></Contact>
        },
        {
          path: 'login',
          element: <Login></Login>
        }
      ]
    },
  ]);

