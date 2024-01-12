import ContactPage from "../pages/contact-page.jsx";
import Home from "../pages/home.jsx";
import LoginPage from "../pages/login-page.jsx";
import { PathConstants } from "./path-constants.jsx";

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.LOG_IN, element: <LoginPage /> },
  { path: PathConstants.CONTACT, element: <ContactPage /> },
];
export default routes;
