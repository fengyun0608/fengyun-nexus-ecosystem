# Fengyun Nexus 生态

**插件包收录专仓**：官方示例 + 社区登记。宿主用本仓做「线上收录 / 检查更新」；**系统插件**仍走 [fengyun-system-plugins](https://gitcode.com/fengyunnb_admin/fengyun-system-plugins)。

| 镜像 | 地址 |
|------|------|
| GitCode（国内） | https://gitcode.com/fengyunnb_admin/fengyun-nexus-ecosystem |
| GitHub（国外） | https://github.com/fengyun0608/fengyun-nexus-ecosystem |

## 和系统插件专仓的差别

| | 系统插件专仓 | 本仓（生态） |
|--|--------------|--------------|
| 管什么 | 菜单 / 状态 / 群管 / 主人等**框架自带** | **收录目录** + 官方示例 + 社区包登记 |
| 更新 | `#更新` 随框架拉 | 按 `catalog.json` 收录与版本 |
| 装法 | 进宿主 `plugins/` | 条目可在仓内路径，或指向别人的 git 仓 |

## 收录怎么读

根目录 [`catalog.json`](catalog.json) 是唯一清单。每条至少有：

- `id` / `name` / `version` / `category`
- `source`：`path`（本仓相对路径）或 `git`（远程仓 + 可选子路径）
- `menus`：该包对外菜单词（可选）

宿主对照本文件做展示与更新检查，不扫整仓瞎猜。

## 官方示例包

| 目录 | 说明 |
|------|------|
| [`packs/fengyun-hello`](packs/fengyun-hello) | 打招呼示例：`#生态菜单` `#生态你好` |

装进宿主：把 `packs/fengyun-hello/plugins/*` 拷到 Fengyun Nexus 的 `plugins/`，或按控制台「生态」指引安装（宿主接好后）。

## 投稿

见 [CONTRIBUTING.md](CONTRIBUTING.md)。社区包可自建仓库，在本仓 `catalog.json` 登记一条 `source.type=git` 即可，不必把代码并进本仓。

## 协议

MIT — [LICENSE](LICENSE)
