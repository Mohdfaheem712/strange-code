
import Home from './views/Home';
import About from './views/About';
import Blog from './views/Blog';
import Contact from './views/Contact';
import Signup from './views/Signup';
import Login from './views/Login';

const routes = [
  {
    name: "home",
    key: "home",
    route: "/",
    component: Home,
  },
  {
    name: "home",
    key: "home",
    route: "/index",
    component: Home,
  },
  {
    name: "About",
    key: "about",
    route: "/about",
    component: About,
  },
  {
    name: "Blog",
    key: "blog",
    route: "/blog",
    component: Blog,
  },
  {
    name: "Contact",
    key: "contact",
    route: "/contact",
    component: Contact,
  },
  {
    name: "Sign Up",
    key: "signup",
    route: "/signup",
    component: Signup,
  },
  {
    name: "Login",
    key: "login",
    route: "/login",
    component: Login,
  }
];

export default routes;
