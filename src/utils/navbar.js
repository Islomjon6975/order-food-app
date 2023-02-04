import Login from "../components/Login";
import { Product } from "../components/Product";
import Register from "../components/Register";
import { CartPage } from "../pages/CartPage";
import { ContactPage } from "../pages/Contact";
import { FoodsPage } from "../pages/FoodsPage";
import { HomePage } from "../pages/HomePage";

export const navbar = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    element: <HomePage />,
    isPrivate: false,
    hidden: false,
  },
  {
    id: 2,
    title: 'Foods',
    path: '/foods',
    element: <FoodsPage /> ,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 8,
    title: 'Product',
    path: '/foods/:id',
    element: <Product />,
    isPrivate: true,
    hidden: true,
  },
  {
    id: 3,
    title: 'Cart',
    path: '/cart',
    element: <CartPage />,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 4,
    title: 'Contact',
    path: '/contact',
    element: <ContactPage />,
    isPrivate: true,
    hidden: false,
  },
  {
    id: 5,
    title: 'Login',
    path: '/login',
    element: <Login />,
    isPrivate: false,
    hidden: true,
  },
  {
    id: 6,
    title: 'Register',
    path: '/Register',
    element: <Register />,
    isPrivate: false,
    hidden: true,
  },
]