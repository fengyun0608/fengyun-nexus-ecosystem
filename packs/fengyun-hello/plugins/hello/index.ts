import { pathToFileURL } from "node:url";
import { Plugin, type NexusEvent, type PluginContext } from "@fengyun/nexus-plugin-sdk";

/** 生态专仓示例。证明收录包能在宿主里跑。 */
export class EcoHelloPlugin extends Plugin {
  manifest = {
    id: "eco.hello",
    name: "生态打招呼",
    version: "0.1.0",
    priority: 1200,
    category: "demo" as const,
    kind: "framework" as const,
    adapterScope: "all" as const,
    permissions: ["channel.send" as const],
  };

  rule = [
    { reg: "^#生态菜单$", fnc: "menu", describe: "生态示例菜单" },
    { reg: "^#生态你好$", fnc: "hello", describe: "打个招呼" },
  ];

  async onReady(_ctx: PluginContext) {}

  async menu(e: NexusEvent, ctx: PluginContext) {
    const sections = [
      {
        title: "用法",
        lines: ["#生态你好 — 回一句招呼"],
      },
      {
        title: "来源",
        lines: ["本插件来自生态专仓示例包 fengyun.hello"],
      },
    ];
    const shot = await ctx.shot.renderMenu({ title: "生态菜单", sections });
    if (!shot.ok) {
      const lines = sections.flatMap((s) => [s.title, ...s.lines]);
      await e.reply(["生态菜单", ...lines, shot.message].join("\n"));
      return;
    }
    await e.replyImage(pathToFileURL(shot.pngPath).href);
  }

  async hello(e: NexusEvent) {
    await e.reply("你好，这里是 Fengyun Nexus 生态示例包。");
  }
}

export default new EcoHelloPlugin();
