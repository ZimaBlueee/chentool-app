import { CommandType } from "../../command";
import { defineAsyncComponent } from "vue";
import ComponentOutputType = YuTerminal.ComponentOutputType;

/**
 * pan
 * @author ZimaBlue
 */
const netDiscCommand: CommandType = {
  func: "pan",
  name: "网盘资源",
  desc: "网盘影视资源搜索",
  params: [
    {
      key: "word",
      desc: "影视名称",
      required: true,
    },
  ],
  options: [],
  collapsible: true,
  action(options, terminal) {
    const { _ } = options;
    if (_.length < 1) {
      terminal.writeTextErrorResult("缺失影视名称");
      return;
    }
    const word = _[0];
    const output: ComponentOutputType = {
      type: "component",
      component: defineAsyncComponent(() => import("./SearchVideoBox.vue")),
      props: {
        word,
      },
    };
    terminal.writeResult(output);
  },
};

export default netDiscCommand;
