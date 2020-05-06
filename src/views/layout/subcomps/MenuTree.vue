<!--这个类和Aside是联动的--->

<template>
  <div class="menu_tree">
    <template v-for="(child,index) in menuData">
      <el-submenu v-if="child.children.length>0" :index="'/'+child.path" :key="index">
        <template slot="title">
          <span slot="title">{{child.name?item.name:child.authName}}</span>
        </template>
        <MenuTree :menuData="child.children"></MenuTree>
      </el-submenu>

      <el-menu-item :index="'/'+child.path" v-else :key="index">
        <span slot="title">{{child.name?item.name:child.authName}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "MenuTree",
  props: {
    menuData: Array
  },
  created() {
  }
};
</script>

<style>
</style>