<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col style="display:flex;justify-content: space-between;margin: 15px 0;">
          <!-- <b-form-group label="设备列表" label-cols-md="4"> -->
            <!-- </b-form-group> -->
            <h2>设备列表</h2>
            <div>
              <b-button @click="refreshHandle">刷新</b-button>
              <b-button variant="info" v-b-modal="'new_product_device'">添加设备</b-button>
            </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table striped hover :items="devices_items" :fields="devices_fields">
            <template slot="action" slot-scope="row">
              <b-button variant="info" @click="checkHandle(row.item, row.index, $event.target)">查看</b-button>
              <b-button @click="deviceHandleDelete(row.item)">删除</b-button>
            </template>
            <template slot="last_time"  slot-scope="row">
							{{CalculateLastTime(row.item.last_time)}}
						</template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
    <b-modal
      id="new_product_device"
      ref="new_product_device"
      title="新建设备"
      ok-title="确定"
      ok-variant="info"
      @show="DevicesShow"
      @ok="newDevicesHandleOk"
    >
      <p>产品信息：</p>
      <b-container>
        <b-row>
          <b-col>
            <b-form>
              <b-form-group
                :state="productStateValidation"
                label-for="product-select"
                invalid-feedback="请选择所属产品"
              >
                <div slot="label">
                  <small style="color:red;">*</small>
                  产品
                </div>
                <b-form-select
                  id="product-select"
                  ref="product_select"
                  v-model="product_select_key"
                  :state="productStateValidation"
                  :options="product_select_items"
                ></b-form-select>
              </b-form-group>
              <b-form-group
                :state="DevicesTitleStateValidation"
                label-for="devices-title-input"
                :invalid-feedback="DevicesTitle_invalid_feedback"
              >
                <div slot="label">
                  <small style="color:red;">*</small>
                  DeviceName
                </div>
                <b-form-input
                  id="devices-title-input"
                  v-model="DevicesTitle"
                  :state="DevicesTitleStateValidation"
                  required
                />
              </b-form-group>

              <b-form-group
                label-for="devices-label-input"
                :invalid-feedback="DevicesTitle_invalid_feedback"
              >
                <div slot="label">备注名称</div>
                <b-form-input id="devices-label-input" v-model="DevicesLabel" required/>
              </b-form-group>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>
<script>
import axios from 'axios'
import ConfigUrl from '../config'
export default {
  data() {
    return {
      devices_fields: [
        {
          key: "device",
          label: "设备名称",
          sortable: false
        },
        {
          key: "productkey",
          label: "设备所属产品",
          sortable: false
        },
        {
          key: "type",
          label: "节点类型",
          sortable: false
        },
        {
          key: "status",
          label: "状态/启用状态",
          sortable: true
        },
        {
          key: "last_time",
          label: "最后上线时间",
          sortable: false
        },
        {
          key: "action",
          label: "操作",
          sortable: false
        }
      ],
      devices_items: [
        // {
        //   device: 40,
        //   product: "测试",
        //   type: "设备",
        //   status: "未激活",
        //   last_time: "xxx时间",
        //   action: "删除"
        // }
      ],
      product_select_items: [{ text: "测试", value: "test" }],
      product_select_key: null,
      DevicesTitle: "",
      DevicesTitle_invalid_feedback: "备注名称不能为空",
      DevicesLabel: ""
    };
  },
  computed: {
    productStateValidation() {
      return this.product_select_key != null;
    },
    DevicesTitleStateValidation() {
      if (this.DevicesTitle.length >= 4 && this.DevicesTitle.length < 32) {
        if (/^[a-zA-Z][a-zA-Z0-9_]*$/.test(this.DevicesTitle)) {
          return true;
        } else {
          this.DevicesTitle_invalid_feedback = "设备名称应以英文或者下划线开头";
          return false;
        }
      } else if (this.DevicesTitle.length <= 0) {
        return false;
      } else {
        this.DevicesTitle_invalid_feedback =
          "设备名称不能少于4个字符,多于32个字符";
        return false;
      }
    },
  },
  methods: {
    newDevicesHandleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    DevicesShow() {
      (this.product_select_key = null),
        (this.DevicesTitle = ""),
        (this.DevicesTitle_invalid_feedback = "备注名称不能为空"),
        (this.DevicesLabel = "");
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.productStateValidation || !this.DevicesTitleStateValidation) {
        return;
      }

      console.log(this.product_select_key)

      axios.post(`${ConfigUrl}/device`, {
        productkey: this.product_select_key,
        device: this.DevicesTitle,
        type: "设备",
        status: "未激活",
        ipaddress: '-',
        add_time: this.moment(new Date()),
        active_time: '',
        last_time: ''
      })
      .then(res => {
        this.devices_items = res.data;
      })
      .catch(err => {
        console.error(err);
      })

      this.$nextTick(() => {
        this.$refs.new_product_device.hide();
      });
    },
    deviceHandleDelete(item) {
      console.log(item)
      axios.delete(`${ConfigUrl}/device/${item.device}`)
      .then( res => {
        console.log(res);
        this.refreshHandle();
      })
      .catch( err => {
        console.error(err);
      })
      
    },
    checkHandle(item, index, target) {
			console.log(item, index, target)
			this.$router.push({
				path: `devices/detail/${item.productkey}/${item.device}`,
				// name: "productDetail",
				// params: item
			})
    },
    refreshHandle() {
			axios.get(`${ConfigUrl}/device`)
			.then( res => {
				console.log(res)
				this.devices_items = res.data;
			})
			.catch( err => {
				console.log(err)
			})
    },
    CalculateLastTime(last_time) {
      if(!last_time)
        return '';
      return moment().format('llll')
    }
  },
  created() {
    axios.get(`${ConfigUrl}/product`)
			.then( res => {
				console.log(res)
        this.product_select_items = res.data.map(item => ({text: item.product_title, value: item.productkey}))
			})
			.catch( err => {
				console.log(err)
      })
      
      axios.get(`${ConfigUrl}/device`)
			.then( res => {
        console.log(res)
        this.devices_items = res.data;
			})
			.catch( err => {
				console.log(err)
			})
  }
};
</script>
<style lang="scss" scoped>
.flex .wrap {
  display: flex;
}
.flex .left {
  width: 200px;
  background: green;
}
.flex .right {
  width: 200px;
  background: blue;
}
.flex .main {
  flex: 1;
  background: red;
}
</style>


