import router from "@system.router"
import {defineComponent} from "ux-types"

export default defineComponent({
  // 页面级组件的数据模型，影响传入数据的覆盖机制：private内定义的属性不允许被覆盖
  private: {
    title: "示例页面"
  }
})
