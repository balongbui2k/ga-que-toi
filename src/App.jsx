import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
import ErrorPage from "./pages/error-page";
import Layout from "./components/layout";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: routes,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
