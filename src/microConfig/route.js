import { Menu } from "antd";
import { Link } from "react-router-dom";

export const routerList = [
  {
    key: "home",
    title: "主 页",
    path: "/",
    label: (
      <Menu.Item>
        <Link to="/">React-主应用</Link>
      </Menu.Item>
    ),
  },

  {
    key: "subVue1",
    title: "Vue子应用1",
    path: "/appVue1",
    label: (
      <Menu.Item>
        <Link to="/appVue1">Vue-子应用1</Link>
      </Menu.Item>
    ),
  },

  {
    key: "subVue2",
    title: "Vue子应用2",
    path: "/appVue2",
    label: (
      <Menu.Item>
        <Link to="/appVue2">Vue-子应用2</Link>
      </Menu.Item>
    ),
  },
];
