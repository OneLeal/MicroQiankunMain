// import logo from "./logo.svg";
import "./App.css";
import { Menu, Button } from "antd";
import { BrowserRouter } from "react-router-dom";
import { routerList } from "./microConfig/route";
import { actions } from "./microConfig/actions";

// 监听全局状态变化: state | 当前状态, prev | 上一次的状态
actions.onGlobalStateChange((state, prev) => {
  console.log("主应用监听器-prev: ", prev);
  console.log("主应用监听器-state: ", state);
});

// 消息配置
const messageMap = {
  1: "I unstoppable today!",
  2: "kick your ass fly away!",
  3: "far away from home.",
};

function App() {
  // 点击按钮发送消息
  function sendMessage(type) {
    const message = messageMap[type] || "nonthing to send!";
    actions.setGlobalState({ message });
  }

  return (
    <BrowserRouter>
      <div className="App app-layout">
        {/* 左侧导航 */}
        <Menu className="menu-style" theme="dark" items={routerList} />

        {/* 右侧布局 */}
        <div className="main-layout">
          {/* 主应用内容 */}
          <div className="app-content">
            <p className="main-app-title">主应用</p>

            <Button
              type="primary"
              className="btn"
              onClick={() => sendMessage(1)}
            >
              发送消息1
            </Button>

            <Button
              type="primary"
              danger
              className="btn"
              onClick={() => sendMessage(2)}
            >
              发送消息2
            </Button>

            <Button className="btn" onClick={() => sendMessage(3)}>
              发送消息3
            </Button>
          </div>

          {/* 子应用的挂载容器 */}
          <div id="microContainer" className="micro-layout"></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
