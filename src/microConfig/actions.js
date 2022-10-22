import { initGlobalState } from "qiankun";

let state = { message: "初始化全局状态" };
const actions = initGlobalState(state); // 初始化全局状态

export { actions };
