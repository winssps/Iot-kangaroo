<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">物联网管理后台</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/home">首页</b-nav-item>
          <b-nav-item to="/mydevices" >我的设备</b-nav-item>
          <b-nav-item to="/product" >我的产品</b-nav-item>
          <b-nav-item to="/devices">设备管理</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">添加设备</b-button>
          </b-nav-form> -->

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
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <b-container fluid>
      <b-row>
        <b-col md="6" lg="4">
          <b-list-group role="tablist" @click="listGroupClick">
            <b-list-group-item active href="#home" data-toggle="list" role="tab">关闭</b-list-group-item>
            <b-list-group-item href="#profile" data-toggle="list" role="tab">低速</b-list-group-item>
            <b-list-group-item href="#messages" data-toggle="list" role="tab">普通</b-list-group-item>
            <b-list-group-item href="#settings" data-toggle="list" role="tab">高速</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col md="6" lg="8">
          <div class="tab-content">
            <div class="tab-pane fade active" id="home" role="tabpanel">1</div>
            <div class="tab-pane fade" id="profile" role="tabpanel">2</div>
            <div class="tab-pane fade" id="messages" role="tabpanel">3</div>
            <div class="tab-pane fade" id="settings" role="tabpanel">4</div>
          </div>
        </b-col>
      </b-row>
    </b-container> -->
    <!-- <p>设备等级：<span>{{mqttRank}}</span></p>
    <p>设备转速：<span>{{mqttSpeed}}</span></p>
    <p>设备<span>{{mqttDevices}}</span></p> -->
  </div>
</template>

<script>
// var mqtt = require('mqtt');
// var client  = mqtt.connect('mqtt://localhost:1234', {
//   clientId: 'webUser'
// });
import $ from 'jquery';
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      mqttRank: '',
      mqttSpeed: '',
      // mqttDevices: []
    }
  },
  methods: {
    listGroupClick(event) {
      // console.log(event)
    }
  },
  created() {
   
  },
  mounted() {
    // $('a[data-toggle="list"]').on('shown.bs.tab', (e) => {
    //   console.log(e.target.innerHTML) // newly activated tab
    //   client.publish('rank', e.target.innerHTML)
    //   this.mqttRank = e.target.innerHTML;
    // })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}



</style>
