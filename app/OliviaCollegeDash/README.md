# Olivia College Application Dashboard

这是 Olivia 2026–2027 美国本科申请季的内部任务清单页面。本目录只负责 Dashboard 路由，不改变 `jatizo.ai` 主页。

## 本地运行

在网站仓库根目录运行：

```bash
npm install
npm run dev
```

然后访问 `/OliviaCollegeDash`。

## 修改任务

全部初始任务集中在 `data.ts`。新增或修改任务时，保留唯一的 `id`，并使用以下状态之一：

- `DONE`
- `IN_PROGRESS`
- `WAITING`
- `NOT_STARTED`

页面上的状态和备注保存在当前浏览器的 `localStorage`。修改 `data.ts` 不会自动覆盖浏览器内已有的状态；需要时可使用页面中的“重置”。

## 截止日期

- 确定日期使用 `deadline`。
- 同时存在内部与官方日期时，使用 `internalDeadline` 和 `officialDeadlineLabel`。
- 尚未核实或无法转换为确定日期的内容使用 `deadlineLabel`，保留原始文字。
- 标注“需官网确认”的日期不得自行改成确定日期。

## 隐私与部署

页面元数据设置为 `noindex`，不会主动进入搜索引擎索引。根据 James 的决定，页面不要求用户名或密码，知道 URL 的人可以直接访问；`noindex` 不构成真正的访问控制。

部署沿用本仓库现有的 Vercel 项目，不创建新的站点或部署配置。
