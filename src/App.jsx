import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contacts from "./Pages/Contacts/Contacts";
import Nothing from "./Pages/Nothing/Nothing";
import Blog from "./Pages/Blog/Blog";
import Pricing from "./Pages/Pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Blog",
        element: <Blog />
      },
      {
        path: "/Pricing",
        element: <Pricing />
      },
      {
        path: "/Contacts",
        element: <Contacts />
      },
    ],
  },
  {
    path: "*",
    element: <Nothing />
  }
]);

function App() {
  const [count, setCount] = useState(0);

  return <>
  <RouterProvider router={router}></RouterProvider>
  </>;
}

export default App;
