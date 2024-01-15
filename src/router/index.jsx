import Home from "../pages/home.jsx";
import ShopPage from "../pages/shop-page.jsx";
import CartPage from "../pages/cart-page.jsx";
import LoginPage from "../pages/login-page.jsx";
import ContactPage from "../pages/contact-page.jsx";
import { PathConstants } from "./path-constants.jsx";

const routes = [
  { path: PathConstants.HOME, element: <Home /> },
  { path: PathConstants.LOG_IN, element: <LoginPage /> },
  { path: PathConstants.CONTACT, element: <ContactPage /> },
  { path: PathConstants.SHOP, element: <ShopPage /> },
  { path: PathConstants.CART_PAGE, element: <CartPage /> },
];
export default routes;
