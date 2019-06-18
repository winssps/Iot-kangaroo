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
                    <span class="index__text--2EhsV">测试</span>
                  </td>
                  <th>ProductKey</th>
                  <td colspan="3">
                    a1UwHudToBk
                    <button
                      type="button"
                      class="next-btn next-btn-text next-btn-normal next-btn-medium"
                      style="margin-left: 8px;"
                    >复制</button>
                  </td>
                </tr>
                <tr>
                  <th>节点类型</th>
                  <td>设备</td>
                  <th>DeviceName</th>
                  <td>
                    <span>
                      <span class="DeviceInfo__cell-text--1LQ4d">ssss</span>
                      <button
                        type="button"
                        class="next-btn next-btn-text next-btn-normal next-btn-medium"
                        style="margin-left: 8px;"
                      >复制</button>
                    </span>
                  </td>
                  <th>DeviceSecret</th>
                  <td>
                    <span>
                      ********
                      <button
                        type="button"
                        class="next-btn next-btn-text next-btn-normal next-btn-medium"
                        style="margin-left: 8px;"
                      >显示</button>
                    </span>
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
                    <span class="DeviceInfo__DeviceNickname--NvPnK">saaadsf</span>
                    <button
                      type="button"
                      class="next-btn next-btn-text next-btn-normal next-btn-medium"
                      style="margin-left: 8px;"
                    >编辑</button>
                  </td>
                  <th>IP地址</th>
                  <td>-</td>
                  <th>固件版本</th>
                  <td>
                    <div title class="index__overFlow--2SooZ">-</div>
                  </td>
                </tr>
                <tr>
                  <th>添加时间</th>
                  <td>2019/06/02 16:00:12</td>
                  <th>激活时间</th>
                  <td></td>
                  <th>最后上线时间</th>
                  <td></td>
                </tr>
                <tr>
                  <th>当前状态</th>
                  <td>未激活</td>
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
            <b-tab title="Topic列表"></b-tab>
            <b-tab title="运行状态"></b-tab>
            <b-tab title="事件管理" disabled></b-tab>
            <b-tab title="服务调用" disabled></b-tab>
            <b-tab title="设备影子" disabled></b-tab>
            <b-tab title="文件管理" disabled></b-tab>
            <b-tab title="日志服务" disabled></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
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
      ]
    };
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

