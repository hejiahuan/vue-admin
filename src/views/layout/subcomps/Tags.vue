<template>
  <div class="tags">
    <el-tabs type="card" :value="activeItem" @tab-click="tabClick" @tab-remove=tabRemove>
      <el-tab-pane
        v-for="item in tagsList"
        :label="item.name"
        :key="item.path"
        :name="item.path"
        closable
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Tags",
  data() {
    return {
      activeItem: ""
    };
  },
  created() {
    //判断标签里面是否有值 有的话直接加载
    if (this.tagsList.length == 0) {
      this.setTags(this.$route);
    }
  },
  computed: {
    tagsList: {
      get: function() {
        return this.$store.state.tagsList;
      },
      set: function(newValue) {
        this.$store.commit("addTag", newValue);
        // this.$store.state.tagsList = newValue;
      }
    }
  },
  watch: {
    "$route": {
      handler(router, oldName) {
        this.activeItem = router.path;
        this.setTags(router)
      },
      immediate: true
    }
  },
  components: {},
  methods: {
    setTags(route) {
      let isIn = this.tagsList.some(item => {
        //判断标签是否存在
        return item.path === route.fullPath;
      });
      //不存在
      if (!isIn) {
        this.tagsList.push({
          path: route.fullPath,
          name: route.name
        });
        //存到vuex
        this.$store.commit("addTag", this.tagsList);
      }
    },
    tabClick(tab){
      this.$router.push(tab.name)
      
    },
    tabRemove(e){
      if(e==="/index"){
          this.$message("首页不能删哦")
          return
      }
      let targetName=e;
      let tabs = this.tagsList;
      let activeName = this.activeItem;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.path === targetName) {
            
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.path;
            }
          }
        });
      }

      this.activeItem = activeName;
      this.tagsList = tabs.filter(tab => tab.path !== targetName);
      this.$router.push( this.activeItem )
    }

  }
};
</script>

<style>
</style>