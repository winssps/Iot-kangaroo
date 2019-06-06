<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col md="12">
                <b-list-group flush>
                    <b-list-group-item 
                    class="d-flex justify-content-between align-items-center"
                    :disabled="!item.connection" 
                    :variant="item.connection ? 'success' : 'dark'" 
                    v-for="(item, key) in mqttDevices" 
                    :key="key"
                    >
                    <b-container fluid>
                        <b-row>
                        <b-col>
                            <p>设备名：{{item.id}}</p>
                            <p>状态：{{item.connection ? "已连接" : "未连接"}}</p>
                            <p v-if="item.connection">连接时间：{{moment(item.time).format('llll')}}</p>
                            <p v-else>上次连接时间：{{moment(item.time).format('llll')}}</p> 
                        </b-col>
                        <b-col class="text-right" align-self="center">
                            <span class="editor" style="margin:0 15px;">控制</span>
                            <span class="delete">删除</span>
                        </b-col>
                        </b-row>
                    </b-container>
                    </b-list-group-item>
                </b-list-group>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import axios from 'axios'
var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://localhost:1234', {
  clientId: 'webUser'
});
export default {
    data(){
        return {
            mqttDevices: []
        }
    },
    created() {
        this.moment.locale("zh-cn");
        axios
        .get('http://localhost:3000/')
        .then(response => {
            console.log(response) 
            this.mqttDevices = response.data;
        })
        client.on('connect', () => {
            // 是否连接服务器，然后订阅在线的客户端
            client.subscribe('clients/online')
        });
        client.on('message', (topic, message) => {

        console.log(message.toString())

            let messObj  = JSON.parse(message.toString())
            // 订阅的频道收到信息
            let index = this.mqttDevices.findIndex((item) => item.id == messObj.id)
            console.log(index)
            if(index == -1) {
            this.mqttDevices = JSON.parse(message.toString());
            }
        })
    },
}
</script>
<style lang="sass" scoped>

</style>

