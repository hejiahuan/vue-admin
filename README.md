#vue create backsys

安装

#登录
1登录成功后token,应该保存到sessionStorage中
    npm install vue-ls --save
    
2跳转到后台主页

#后台的布局layout
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
#左侧菜单的显示aside 无限级菜单组件
1给aside生成一个组件，用来做递归
菜单在element-ui中的格式
el-menu
    -el-submenu
        -template span就是最顶级菜单
        -el-menu-item:顶级菜单下的子菜单
如果子菜单下还有子菜单那就是el-submenu下面套el-submenu
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>

#无限极菜单组件
  <el-scrollbar wrap-class="scrollbar-wrapper">
      <!--想要无限极遍历菜单必须用递归-->

      <el-menu default-active class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
         <template v-for="(item,index) in routes">
          <el-submenu v-if=" item.children" :index="index+''" :key="index">
            <template slot="title">
              <span slot="title">{{item.name}}</span>
            </template>
            <MenuTree :menuData="item.children"></MenuTree>
      
          </el-submenu>
          <el-menu-item :index="item.path" v-else :key="item.path">
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </template>
    
      </el-menu>
    </el-scrollbar>

组件MenuTree
<template>
  <div class="menu_tree">
    <template v-for="(child,index) in menuData">
      <el-submenu v-if="child.children" :index="child.path" :key="index">
        <template slot="title">
          <span slot="title">{{child.name }}</span>
        </template>
        <MenuTree :menuData="child.children"></MenuTree>
      </el-submenu>

      <el-menu-item :index="child.path" v-else :key="index">
        <span slot="title">{{child.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
#做管理框架面临的问题
1在浏览器输入连接，左边必须跳转到那个连接中，并且右边tags也存在，首页和浏览器上的东西
2并且我们在点击左边的菜单的时候，这个时候也要跳转到Tags中，所以1,2中公用一个actions方法

初步做了框架其实很素用的也都是element-ui 的menu和tabs组件,并且用了vuex-persistedstate解决vuex刷新state丢失的问题，其实就是把东西存入sessionStorage中。

![](layout.gif)