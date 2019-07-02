<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">物联网管理后台</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">首页</b-nav-item>
          <!-- <b-nav-item to="/mydevices" >我的设备</b-nav-item> -->
          <b-nav-item to="/product">我的产品</b-nav-item>
          <b-nav-item to="/devices">我的设备</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">添加设备</b-button>
          </b-nav-form>-->

          <!-- <b-button size="sm" class="" type="button">添加设备</b-button> -->

          <b-nav-item-dropdown text="简体中文" right>
            <b-dropdown-item href="#">English</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">登录</template>
            <b-dropdown-item href="#">介绍</b-dropdown-item>
            <b-dropdown-item href="#">退出登录</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  
}
</script>

