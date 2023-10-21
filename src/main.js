import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

//环境变量的使用(https://cn.vitejs.dev/guide/env-and-mode.html#env-files)
//Vite暴露给客户端源码的环境变量对象为import.meta.env，不支持动态设置，在引用它们时请使用完全静态的字符串。
//它包含了一些所有情况下都可以使用的内建变量
//它还将替换出现在 JavaScript 和 Vue 模板中的字符串 import.meta.env.*
//它还支持在 HTML 文件中替换环境变量。
//为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
//如果想要在环境变量中使用 $ 符号，则必须使用 \ 对其进行转义。

const app = createApp(App);
app.use(router)

//引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//暗黑模式css变量
import 'element-plus/theme-chalk/src/dark/css-vars.scss'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
app.use(ElementPlus, {
  locale: zhCn,
})

//引入状态管理器
import { createPinia } from 'pinia'
app.use(createPinia());

//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
app.use(VueAxios, axios);

app.mount('#app')
