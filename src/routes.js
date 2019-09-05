import Dashboard from "./views/Dashboard.jsx";
import CoinsPage from "./views/CoinsPage.jsx";
import NewsPage from "./views/NewsPage.jsx";
import Portfolio from "./views/Portfolio.jsx";
//import Settings from "./views/Settings.jsx";
import Login from "./views/pages/Login.jsx";
import Register from "./views/pages/Register.jsx";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/portal"
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: "tim-icons icon-wallet-43",
    component: Portfolio,
    layout: "/portal"
  },
  {
    path: "/news",
    name: "News",
    icon: "tim-icons icon-paper",
    component: NewsPage,
    layout: "/portal"
  },
  {
    path: "/login",
    name: "Login",
    icon: "tim-icons icon-settings-gear-63",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "tim-icons icon-settings-gear-63",
    component: Register,
    layout: "/auth"
  }
];

export default routes;
