<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-tabs content-class="mt-3">
            <b-tab title="设备信息" active>
              <table border="0" class="DeviceInfo__props-info-table--38YGx">
                <tr>
                  <th>产品名称</th>
                  <td data-spm-anchor-id="5176.11485173.0.i34.f58d59afNseNjd">
                    <span class="index__text--2EhsV">{{product_item.product_title}}</span>
                  </td>
                  <th>ProductKey</th>
                  <td colspan="3">{{product_item.productkey}}</td>
                </tr>
                <tr>
                  <th>节点类型</th>
                  <td>{{product_item.node_type}}</td>
                  <th>DeviceName</th>
                  <td>
                    <span>
                      <span class="DeviceInfo__cell-text--1LQ4d">{{devices_items.device}}</span>
                    </span>
                  </td>
                  <th>DeviceSecret</th>
                  <td>
                    <span>********</span>
                  </td>
                </tr>
                <tr>
                  <th colspan="1">
                    <span style="vertical-align: bottom;">
                      <span style="color: rgb(116, 119, 122);">备注名称</span>
                      <i
                        class="next-icon next-icon-help next-icon-small"
                        style="margin-left: 8px; color: rgb(204, 204, 204);"
                      ></i>
                    </span>
                  </th>
                  <td colspan="1">
                    <span class="DeviceInfo__DeviceNickname--NvPnK"></span>
                  </td>
                  <th>IP地址</th>
                  <td>{{devices_items.ipaddress}}</td>
                  <th>固件版本</th>
                  <td>
                    <div title class="index__overFlow--2SooZ">-</div>
                  </td>
                </tr>
                <tr>
                  <th>添加时间</th>
                  <td>{{moment( devices_items.add_time).format('llll')}}</td>
                  <th>激活时间</th>
                  <td>{{moment( devices_items.active_time).format('llll')}}</td>
                  <th>最后上线时间</th>
                  <td>{{moment( devices_items.last_time).format('llll')}}</td>
                </tr>
                <tr>
                  <th>当前状态</th>
                  <td>{{devices_items.status}}</td>
                  <th>
                    <span style="vertical-align: bottom;">
                      实时延迟
                      <i
                        class="next-icon next-icon-help next-icon-small"
                        style="margin-left: 8px; color: rgb(204, 204, 204);"
                      ></i>
                    </span>
                  </th>
                  <td colspan="3">
                    <button
                      type="button"
                      class="next-btn next-btn-text next-btn-normal next-btn-medium"
                    >测试</button>
                  </td>
                </tr>
              </table>
            </b-tab>
            <b-tab title="Topic列表">
              <b-table :items="topic_items" :fields="topic_fields"></b-table>
            </b-tab>
            <b-tab title="运行状态">
              <b-table :items="status_items" :fields="status_fields">
                <template slot="update_time"  slot-scope="row">
                  {{moment(row.item.update_time).format('llll')}}
                </template>
              </b-table>
            </b-tab>
            <b-tab title="事件管理" disabled></b-tab>
            <!-- <b-tab title="服务调用" disabled></b-tab>
            <b-tab title="设备影子" disabled></b-tab>
            <b-tab title="文件管理" disabled></b-tab>
            <b-tab title="日志服务" disabled></b-tab>-->
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
import ConfigUrl from "../config";

export default {
  data() {
    return {
      items: [
        {
          text: "设备管理",
          to: "/devices"
        },
        {
          text: "设备详情",
          href: "#",
          active: true
        }
      ],
      topic_fields: [
        {
          key: "topic",
          label: "Topic类"
        },
        {
          key: "permission",
          label: "操作权限"
        },
        {
          key: "describe",
          label: "描述"
        },
        {
          key: "count",
          label: "发布消息次数"
        },
        {
          key: "action",
          label: "操作"
        }
      ],
      status_items: [],
      status_fields: [
        {
          key: "function_title",
          label: "属性名称"
        },
        {
          key: "function_data_type",
          label: "数据类型"
        },
        {
          key: "update_time",
          label: "更新时间"
        },
        {
          key: "new_value",
          label: "最新值"
        },
        {
          key: "function_range",
          label: "期望值"
        },
        {
          key: "action",
          label: "操作"
        }
      ],
      devices_items: {},
      product_item: {},
      function_items: [],
      topic_items: []
    };
  },
  created() {
    var params = this.$route.params;
    console.log(params);
    axios
      .get(`${ConfigUrl}/product/${params.key}`)
      .then(res => {
        console.log(res);
        this.product_item = res.data.detail[0];
        // this.function_items = res.data.functions;

        // this.status_items = res.data.functions.map(item => {
        //   return {
        //       function_title: item.function_title,
        //       function_data_type: item.function_data_type,
        //       update_time: this.moment(new Date()),
        //       new_value: 0,
        //       function_range: item.function_range
        //     }
        // })

        // this.topic_items = res.data.topics;

        // this.topic_items = res.data.topics.map(item => {
        //   console.log(item.topic.replace(/\$\{deviceName\}/g, params.name));
        //   item.topic = item.topic.replace(/\$\{deviceName\}/g, params.name);
        //   return item;
        // })
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`${ConfigUrl}/device/${params.name}`)
      .then(res => {
        console.log(res);
        this.devices_items = res.data.detail[0];
        this.topic_items = res.data.topic;
        this.status_items = res.data.value[0].deviceStatus;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="scss" scoped>
.DeviceInfo__props-info-table--38YGx {
  width: 100%;
  border: 0;
  border-left: 1px solid #ebecec;
  border-top: 1px solid;
  border-color: #ebecec;
  margin-bottom: 18px;
  tr {
    height: 48px;
    th {
      min-width: 120px;
      text-align: left;
      color: #74777a;
      font-weight: 400;
      background: #fafafc;
      padding: 0 8px;
      border-right: 1px solid #ebecec;
      border-bottom: 1px solid #ebecec;
    }
    td {
      width: 22%;
      word-break: break-all;
      padding: 0 8px;
      border-right: 1px solid #ebecec;
      border-bottom: 1px solid #ebecec;
    }
  }
}
</style>

