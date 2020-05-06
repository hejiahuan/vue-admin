import Vue from 'vue'
import App from './App.vue'
//引入vuex
import store from "./store"
//导入router
import router from './router'
//导入element-ui
import 'element-ui/lib/theme-chalk/index.css';
import { Button, 
  Form, 
  FormItem, 
  Input, 
  Card,
  Container,
  Header,
  Aside,
  Main,
  Message,
  Scrollbar,
  Submenu,
  Menu,
  MenuItem,
  MenuItemGroup,
  Tabs,
  TabPane
  
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Card)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Scrollbar),
Vue.use(Submenu),
Vue.use(Menu),
Vue.use(MenuItem),
Vue.use(MenuItemGroup)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.prototype.$message = Message


import axios from 'axios'

import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

/**
 * 操作session local
 */

//引入vue-ls
import storage from "./stroage"


Vue.use(storage.Storage,storage.options);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
