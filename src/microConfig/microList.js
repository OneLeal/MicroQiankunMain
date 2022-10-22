import { actions } from "./actions";

// 配置微应用路由
export const microApp = [
  {
    name: "Vue子应用1",
    entry: "//localhost:3001",
    container: "#microContainer",
    activeRule: "/appVue1",
    props: { actions, MainApp: "React-Main-APP" },
  },

  {
    name: "Vue子应用2",
    entry: "//localhost:3002",
    container: "#microContainer",
    activeRule: "/appVue2",
    props: { actions, MainApp: "React-Main-APP" },
  },
];
