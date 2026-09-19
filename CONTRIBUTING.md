# 怎么往生态仓投稿

## 原则

1. **插件包优先**：一组互相照应的插件 + 根 `nexus.pack.json`。
2. **id 英文、name 中文**；每个功能插件自带菜单（如 `#某某菜单`）。
3. **系统能力不要往这里塞**：菜单 / 状态 / 群管 / 主人等仍走系统插件专仓。
4. 提交说明与源码注释不要写「借鉴某某框架架构」一类话；产品致谢留给宿主介绍页。

## 两种收录方式

### A. 代码放在本仓（官方 / 长期维护）

1. 在 `packs/<你的包名>/` 放好 `nexus.pack.json` 与 `plugins/`。
2. 在根 `catalog.json` 的 `entries` 加一条，`source.type` 为 `path`。
3. 提 PR 到 GitCode 或 GitHub 的 `main`。

### B. 代码在你自己的仓库（社区常见）

1. 公开你的插件包仓库（建议浅克隆友好、有 `nexus.pack.json`）。
2. 在本仓 `catalog.json` 登记：

```json
{
  "id": "vendor.my-pack",
  "name": "我的插件包",
  "kind": "pack",
  "category": "community",
  "version": "0.1.0",
  "description": "一句话说明",
  "source": {
    "type": "git",
    "url": "https://gitcode.com/你/你的仓.git",
    "branch": "main",
    "path": ""
  },
  "menus": ["#某某菜单"]
}
```

3. 提 PR。维护版本时改你仓 + 必要时 bump 本目录里的 `version` 字段。

## 本地自测

1. 把包里的 `plugins/<名>` 拷进 Fengyun Nexus 的 `plugins/`。
2. 重启或热更后发菜单指令试。
3. 确认不会覆盖系统插件 id（`z.*` 留给官方系统包）。

## 审查会看什么

- `catalog.json` 能解析、id 不撞车
- 包内有 `nexus.pack.json`，插件有英文 id
- 无密钥、无 `*.local.json`、无超大二进制
- README 短：能干什么、怎么装、菜单词
