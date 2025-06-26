import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Explore from "../pages/Explore";
import MyPage from "../pages/MyPage";
import Write from "../pages/Write";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/aboutme",
      element: <AboutMe />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/mypage",
      element: <MyPage />,
    },
    {
      path: "/write",
      element: <Write />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Router;
