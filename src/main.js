import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 1.全部引用
// import Antd from 'ant-design-vue';//引入ui组件
// import "ant-design-vue/dist/antd.less";//引入ui组件样式

// 2.单个组件分别引入相对应的样式文件
// import Button from 'ant-design-vue/lib/button';
// import "ant-design-vue/lib/button/style";

// 3.使用bable-plugin-import实现按需加载
import { Button } from 'ant-design-vue';


Vue.config.productionTip = false;

// Vue.use(Antd); //对应1.全局引用
Vue.use(Button); //对应2.3.

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
