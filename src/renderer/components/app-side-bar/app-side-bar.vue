<template>
    <v-navigation-drawer app clipped  class="app-side-bar" width="200px" :value="sidebarVisibility" stateless hide-overlay>
      <v-list class="mt-n2">
        <v-subheader dark class="subheader grey--text text--darken-1">
          推荐
        </v-subheader>
        <v-list-item-group >
          <v-list-item to="/main/recommend" active-class="route-active" class="nav-item" >
            <i class="iconfont icon-music mr-2"></i> 发现音乐
          </v-list-item>
          <v-list-item to='/main/personal-FM' active-class="route-active" class="nav-item" >
            <i class="iconfont icon-FM mr-2"></i> 私人FM
          </v-list-item>
          <v-list-item to='/main/video' active-class="route-active" class="nav-item" >
            <i class="iconfont icon-video mr-2"></i> 视频
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-list class="mt-n2">
        <v-subheader dark class="subheader grey--text text--darken-1">
          我的音乐
        </v-subheader>
        <v-list-item-group >
          <v-list-item to="/main/my-music" active-class="route-active" class="nav-item" >
            <i class="iconfont icon-local-music mr-2"></i> 本地音乐
          </v-list-item>
          <v-list-item to='/main/download-manage' active-class="route-active" class="nav-item" >
            <i class="iconfont icon-download mr-2"></i> 下载管理
          </v-list-item>
          <v-list-item to='/main/my-collection' active-class="route-active" class="nav-item" v-if="loginState">
            <i class="iconfont icon-my-collection mr-2"></i> 我的收藏
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>


<script>
import { VNavigationDrawer, VSubheader} from 'vuetify/lib'
import {mapGetters, mapMutations} from 'vuex'
export default {
  components: {
    VNavigationDrawer,
    VSubheader
  },
  data(){
    return {
      routesShouldHideSidebar: {
        'video-play': true,
        'MV-play': true
      }
    }
  },
  computed:{
    ...mapGetters('user', {
      loginState: 'loginState'
    }),
    ...mapGetters('app', {
      sidebarVisibility: 'sidebarVisibility'
    })
  },
  methods: {
    ...mapMutations('app', {
      showSideBar: 'showSideBar',
      hideSideBar: 'hideSideBar'
    })
  },
  watch:{
    $route($route){
      $route.name && this.routesShouldHideSidebar[$route.name] ? this.hideSideBar() : this.showSideBar()
    }
  }
}
</script>

<style lang="scss" scoped>
.app-side-bar{
  background-color: #191b1f;
}
.route-active{
  &::after{
    position: absolute;
    content: '';
    display: block;
    width: 3px;
    height: 100%;
    left: 0;
    top: 0;
    background-color: $theme-color;
  }
}
.nav-item{
  min-height: 32px;
  font-size: 13px;
}
.subheader{
  font-size: 13px;
  height: 32px;
}
</style>
