<template>
  <div class="aside">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!--想要无限极遍历菜单必须用递归-->
      <el-menu
        
         :default-active="$route.path"
        class="el-menu-vertical-demo"
        unique-opened
        router
        @select="selectMenu"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="(item,index) in silderMenu">
          <el-submenu v-if="item.children.length>0" :index="item.path" :key="index">
            <template slot="title">
              <span slot="title">{{item.name?item.name:item.authName}}</span>
            </template>
            <MenuTree :menuData="item.children"></MenuTree>
          </el-submenu>
          <el-menu-item :index="'/'+item.path" v-else :key="item.path">
            <span slot="title">{{item.name?item.name:item.authName}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import MenuTree from "@/views/layout/subcomps/MenuTree";

import { getSilderMenu } from "@/network/aside";

import { Aside } from "@/models/layout/Aside";

export default {
  name: "Aside",
  data() {
    return {
      silderMenu: []
    };
  },
  components: {
    MenuTree
  },
  computed: {
    //  onRoutes() {
    //   return this.$route.path.replace("/", "");
    // }
  },
  watch: {
    //watch一般监听是监听不到，必须深度监听你哥deep或者初始化监听immediate
    // "$route.path": {
    //   handler(newName, oldName) {
        
    //     // this.selectMenu(newName)
    //   },
    //   immediate: true
    // }

     "$route.path": function (val) {
      // this.selectMenu(val)
    }
  },
  created() {
    this.MenuTree();

  },
  methods: {
    selectMenu(key) {
      
      // console.log(key);
      //  this.$store.dispatch("addTags",path)
     
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    async MenuTree() {
      const { data } = await getSilderMenu();
      const aside = new Aside(data.data);
      this.silderMenu = aside.menu;
      this.$store.commit("addSliderMenu",aside.menu)
    }
  }
};
</script>

<style lang="scss" scoped>
.aside {
  width: 13%;
  height: 100vh;
  border: 1px solid green;
}
</style>