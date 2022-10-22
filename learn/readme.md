# 微前端框架-乾坤使用: https://qiankun.umijs.org/zh/guide/getting-started

## 搭建主应用

1. npx create-react-app [主应用名称]
2. npm install react-router-dom antd qiankun -S
3. 编写主应用路由: microConfig/route.js
4. 设置全局状态 state 并初始化供主应用与子应用之间通信: microConfig/actions.js
5. 配置子应用路由: microConfig/microList.js
6. 主应用入口文件注册子应用并启动乾坤
7. 主应用中的任意组件均可监听并设置 state: App.js

## 搭建子应用

1. vue create [子应用名称]
2. src 目录下新建文件: public-path.js
3. 项目文件夹下新建文件: vue.config.js
4. 入口文件 main.js 中引入 public-path.js 并导出微前端的生命周期钩子
5. 各文件配置请参考乾坤文档
6. main.js: 钩子 mount 中的 props 就是主应用发送的 actions，可进行监听/发送数据
7. main.js: render 方法中的 props 可以保存下来
8. utils/index.js: 创建一个类 ActionStore，使用单例模式保存 actions
9. App.vue: 使用 ActionStore 类的实例进行监听/发送数据

### 核心 api

- registerMicroApps 注册微应用
- start 启动乾坤
- initGlobalState 定义全局状态，并返回通信方法
- state: setGlobalState | onGlobalStateChange | offGlobalStateChange

#### 微前端的特点

- 技术栈无关: 主框架不限制接入应用的技术栈，微应用具备完全自主权
- 独立开发/部署: 微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新
- 增量升级: 微应⽤具备渐进式升级的特性
- 独⽴运⾏时: 微应⽤之间运⾏时互不依赖，有独⽴的状态管理
- 预加载: 空闲时加载子应用资源
- 按需加载: 切换页面时才加载相关的 HTML、JS、Css
- 子应用嵌套/并行以及与主应用通信
- JS 沙箱 / CSS 隔离

#### iframe 的缺陷

- url 不同步，浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用
- UI 不同步，DOM 结构不共享
- 全局上下文完全隔离，内存变量不共享
- 每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程
