import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Explore from "../pages/Explore";
import MyPage from "../pages/MyPage";
import Post from "../pages/Post";

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
      path: "/post",
      element: <Post />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Router;
