import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DressPage from "./pages/DressPage";
import { NavbarDefault } from "./components/NavbarDefault";
import NavbarNew from "./components/NavbarNew";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/dresses",
    element: <DressPage />,
  },
]);

function App() {
  return (
    <>
      <NavbarDefault />
      {/* <NavbarNew /> */}
      <div className="w-screen h-screen">
        <RouterProvider router={router} />;
      </div>
    </>
  );
}

export default App;
