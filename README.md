# vue-rabbit 电商平台

基于 Vue 3 + Pinia + Element Plus 构建的完整电商前端应用，涵盖首页浏览、分类导航、商品详情、购物车管理、结算支付、订单管理、用户认证等核心业务链路。

## 在线预览

> 部署后替换为实际链接

## 功能模块

| 模块 | 功能 |
|------|------|
| 首页 | Banner 轮播、分类导航、热门推荐、新品展示、商品面板 |
| 分类 | 一级/二级分类切换、分类 Banner、商品筛选列表 |
| 商品详情 | 图片预览、SKU 规格选择、库存路径计算、加入购物车 |
| 购物车 | 单/批量选择、数量修改、价格计算、登录/未登录状态合并 |
| 结算支付 | 地址管理、订单确认、支付倒计时 |
| 订单管理 | Tab 切换分状态查看、分页加载 |
| 用户中心 | 登录注册、个人信息、订单列表 |
| 鉴权 | Token 管理、401 统一拦截、登录态持久化 |

## 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | Vue 3.5 (Composition API) |
| 构建工具 | Vite 8 |
| 路由 | Vue Router 5 (嵌套路由、动态路由、滚动行为控制) |
| 状态管理 | Pinia 3 + 持久化插件 |
| HTTP 客户端 | Axios (请求/响应拦截器、Token 注入、统一错误处理) |
| UI 组件库 | Element Plus 2 (按需自动导入) |
| 样式预处理 | SCSS (全局变量、Mixin) |
| 工具库 | dayjs、VueUse |
| 代码规范 | ESLint + oxlint |

## 项目结构

```
src/
├── apis/                  # API 接口层（按业务模块拆分）
│   ├── cart.js            # 购物车接口
│   ├── category.js        # 分类接口
│   ├── checkout.js        # 结算接口
│   ├── detail.js          # 商品详情接口
│   ├── home.js            # 首页接口
│   ├── layout.js          # 布局接口
│   ├── order.js           # 订单接口
│   ├── pay.js             # 支付接口
│   └── user.js            # 用户接口
├── assets/                # 静态资源（图片、全局样式）
├── components/            # 全局通用组件
│   ├── ImageView/         # 图片预览组件
│   └── XtxSku/            # SKU 规格选择器（幂集算法）
├── composables/           # 组合式函数
│   └── useCountDown.js    # 倒计时逻辑封装
├── directives/            # 自定义指令（图片懒加载等）
├── router/                # 路由配置
├── stores/                # Pinia 状态管理
│   ├── cart.js            # 购物车状态（含持久化）
│   ├── category.js        # 分类状态
│   └── user.js            # 用户状态
├── styles/                # 全局样式 & SCSS 变量
├── utils/                 # 工具函数
│   └── http.js            # Axios 封装（拦截器）
└── views/                 # 页面组件
    ├── Layout/            # 页面布局（Header/Nav/Footer）
    ├── Home/              # 首页
    ├── Category/          # 一级分类页
    ├── SubCategory/       # 二级分类页
    ├── Detail/            # 商品详情页
    ├── CartList/          # 购物车页
    ├── Checkout/          # 结算页
    ├── Pay/               # 支付页
    ├── Login/             # 登录页
    └── Member/            # 会员中心（个人信息 + 订单管理）
```

## 核心实现要点

### HTTP 层设计

- 封装 Axios 实例，统一配置 baseURL 和 timeout
- 请求拦截器：自动从 Pinia Store 读取 Token 并注入 Authorization 请求头
- 响应拦截器：统一解包 res.data；捕获异常后调用 ElMessage 弹出错误提示
- 401 全局处理：检测到 401 状态码后自动清空用户数据并跳转登录页

### 购物车状态管理

- 使用 Pinia 管理购物车列表，计算属性实时统计总价 / 总数量 / 已选商品
- 区分登录与未登录两种状态：未登录时纯本地操作（localStorage 持久化），登录后调用远程接口
- 全选/单选联动逻辑，isAll 计算属性驱动全选框状态

### SKU 规格选择器

- 使用幂集算法计算 SKU 规格值的所有可能组合，构建路径字典
- 基于当前已选规格值动态计算剩余可选路径，控制规格按钮的 disabled 状态
- 核心问题：多规格商品部分缺货时，前端实时计算并禁用不可选规格

### 倒计时逻辑

- setInterval 实现秒级倒计时，dayjs.unix() 格式化为 mm分ss秒
- 通过 onUnmounted 生命周期钩子清理定时器，防止内存泄漏

## 快速开始

### 环境要求

- Node.js >= 20.19.0 或 >= 22.12.0

### 安装依赖

```sh
npm install
```

### 启动开发服务器

```sh
npm run dev
```

浏览器访问 http://localhost:5173

### 构建生产版本

```sh
npm run build
```

构建产物输出到 dist/ 目录。

### 部署到 GitHub Pages

```sh
# 1. 构建（使用仓库名作为 base）
npx vite build --base=/Vue3-rabbit/

# 2. 将 dist 推送到 gh-pages 分支
npx gh-pages -d dist
```

然后在 GitHub 仓库 Settings > Pages 中选择 gh-pages 分支作为源。

### 代码检查

```sh
npm run lint
```
