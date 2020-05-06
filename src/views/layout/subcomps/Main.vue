<template>
  <div class="main">
     <el-scrollbar wrap-class="scrollbar-wrapper">
         <Tags/>
        <div class="contents">
             main
          <transition name="fade-transform" mode="out-in">
             
              <router-view></router-view>
          </transition>
        </div>
       </el-scrollbar>
  </div>
</template>

<script>
import Tags from '@/views/layout/subcomps/Tags'

export default {
    name:"Main",
    components:{
        Tags
    }

}
</script>
<style lang="scss" scoped>
    .main{
        width: 100vw;
        height: 100vh;
        border: 1px solid blue;
    }
</style>