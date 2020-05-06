<template>
  <div class="home">
    <!--头部组件-->
    <Header />
    <el-container>
      <Aside />
      <el-container>
        <Main />
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Main from "views/layout/subcomps/Main";
import Aside from "views/layout/subcomps/Aside ";
import Header from "views/layout/subcomps/Header";
import Footer from "views/layout/subcomps/Footer";

export default {
  name: "Layout",
  components: {
    Main,
    Aside,
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>

</style>