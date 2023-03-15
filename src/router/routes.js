import Home from "../pages/home/home";
import Weapons from "../pages/weapons/weapons";
import Character from '../pages/character/character'
import Wizardry from "../pages/wizardry/wizardry";
import Dlc from "../pages/dlc/dlc";

import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/weapons",
    element: <Weapons />,
  },
  {
    path: "/characters",
    element: <Character />,
  },
  {
    path: "/wizardry",
    element: <Wizardry />,
  },
  {
    path: "/dlc",
    element: <Dlc />,
  },
  {
    path: "/*",
    element: <Navigate to="/home" />,
  },
];
export default routes