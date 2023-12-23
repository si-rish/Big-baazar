import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css";
import Home from "./views/Home/Home";
import Signup from "./views/Signup/Signup";
import Login from "./views/Login/Login";
import Buy from './views/Buy/Buy';
import MyOrders from './views/MyOrders/MyOrders';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import Blogs from './views/Blogs/Blogs';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Home />
  },
  {
    "path": "/signup",
    "element": <Signup />
  },
  {
    "path": "/login",
    "element": <Login />
  },
  {
    "path": "/buy/:id",
    "element": <Buy />
  },
  {
    "path": "/my-orders",
    element: <MyOrders />
  },
  {
    "path": "/contact",
    element: <Contact/>
  },
  {
    "path": "/blogs",
    element: <Blogs />
  },
  {
    "path": "/about",
    element: <About />
  }
])

root.render(<RouterProvider router={router} />);