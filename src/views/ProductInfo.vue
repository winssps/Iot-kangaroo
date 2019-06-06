<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-form-group label="产品名称" label-cols-md="4">
            <b-button>刷新</b-button>
            <b-button variant="info">发布</b-button>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-tabs content-class="mt-3">
            <b-tab title="产品信息" active>
              <table border="0" class="product-info-table">
                <tr>
                  <th>产品名称</th>
                  <td data-spm-anchor-id="5176.11485173.0.i31.7f4b59afrtSabW">测试</td>
                  <th>节点类型</th>
                  <td>设备</td>
                  <th>创建时间</th>
                  <td>2019/05/27 20:48:30</td>
                </tr>
                <tr>
                  <th>所属分类</th>
                  <td data-spm-anchor-id="5176.11485173.0.i32.7f4b59afrtSabW">环境监测设备</td>
                  <th>数据格式</th>
                  <td colspan="5">ICA 标准数据格式 (Alink JSON)</td>
                </tr>
                <tr>
                  <th>
                    <span>动态注册</span>
                    <i
                      class="next-icon next-icon-help next-icon-small"
                      style="margin-left: 8px; color: rgb(204, 204, 204);"
                    ></i>
                  </th>
                  <td>
                    <span style="color: rgb(195, 197, 198);">已关闭</span>
                    <div
                      class="next-switch next-switch-off next-switch-small"
                      tabindex="0"
                      style="position: relative; left: 8px; top: 3px;"
                      aria-checked="false"
                    >
                      <div class="next-switch-trigger"></div>
                      <div class="next-switch-children"></div>
                    </div>
                  </td>
                  <th>ProductSecret</th>
                  <td colspan="3">
                    <div>
                      <span>********</span>
                      <button
                        type="button"
                        class="next-btn next-btn-text next-btn-normal next-btn-medium"
                        style="margin-left: 8px;"
                      >显示</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>状态</th>
                  <td>
                    <div style="margin: 0px;">
                      <span class="productInfo__development--41C1I"></span>
                      <span>开发中</span>
                    </div>
                  </td>
                  <th>是否接入网关</th>
                  <td>否</td>
                  <th>连网协议</th>
                  <td colspan="3">蜂窝 (2G / 3G / 4G)</td>
                </tr>
                <tr>
                  <th>产品描述</th>
                  <td colspan="5"></td>
                </tr>
              </table>
            </b-tab>
            <b-tab title="Topic类列表">
                <b-table hover 
                    :items="topic_items"
                    :fields="topic_fields"
                ></b-table>
            </b-tab>
            <b-tab title="功能定义">
                <b-table hover 
                    :items="function_items"
                    :fields="function_fields"
                ></b-table>
            </b-tab>
            <b-tab disabled title="日志服务"></b-tab>
            <b-tab disabled title="在线调试"></b-tab>
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
          text: "产品管理",
          to: "/product"
        },
        {
          text: "产品详情",
          href: "#",
          active: true
        }
      ],
      product_fields: [""],
      product_item: [],
      topic_fields: [
          {
              key: 'topic',
              label: 'Topic类'
          },
          {
              key: 'authority',
              label: '操作权限'
          },
          {
              key: 'describe',
              label: '描述'
          },
          {
              key: 'action',
              label: '操作'
          }],
      topic_items: [
        {topic: '/ssss/ssss/sss/',authority: '发布', describe: '设备属性上报'},
        {topic: '/ssss/ssss/sss/',authority: '发布', describe: '设备属性上报'},
        {topic: '/ssss/ssss/sss/',authority: '发布', describe: '设备属性上报'},
      ],
      function_fields: [
        {
					key: 'function_type',
					label: '功能类型'
				},
				{
					key: 'title',
					label: '功能名称'
				},
				{
					key: 'identifier',
					label: '标识符'
				},
				{
					key: 'data_type',
					label: '数据类型'
				},
				{
					key: 'range',
					label: '数据范围'
				},
				{
					key: 'action',
					label: '操作'
				},
      ],
      function_items: [
				{function_type: '属性', title: '温度', identifier: 'CurrentTemperature', data_type: '浮点型', range: '0~500'}
      ],
    };
  }
};
</script>
<style lang="scss" scoped>
    .product-info-table {
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
                padding: 0 12px;
                border-right: 1px solid #ebecec;
                border-bottom: 1px solid #ebecec;
            }
            td {
                width: 22%;
                word-break: break-all;
                padding: 0 12px;
                border-right: 1px solid #ebecec;
                border-bottom: 1px solid #ebecec;
            }
        }
    }
</style>    

