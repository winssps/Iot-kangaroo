import VueRouter from 'vue-router'

// const App = r => require.ensure([], ()=>r(require('../App.vue')), '/')
const MyDevices = r => require.ensure([], () => r(require('../views/MyDevices.vue')), '/mydevices')


const Product = r => require.ensure([], () => r(require('../views/Product.vue')), '/product')
const ProductList = r => require.ensure([], () => r(require('../views/ProductList.vue')), '/product/')

const ProductInfo = r => require.ensure([], () => r(require('../views/ProductInfo.vue')), '/product/info')



const Devices = r => require.ensure([], () => r(require('../views/Devices.vue')), '/devices')
const DeviceList = r => require.ensure([], () => r(require('../views/DeviceList.vue')), '/devices/')
const DevicesInfo = r => require.ensure([], () => r(require('../views/DevicesInfo.vue')), '/devices/info')


const Login = r => require.ensure([], () => r(require('../views/Login.vue')), '/login')

// import MyDevices from '../views/MyDevices.vue'
// import Devices from '../views/Devices.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        // {path: '/', component: Login},
        // { path: '/home', component: Home},
        // { path: '/mydevices', component: MyDevices },
        {
            path: '/product',
            name: 'product',
            component: Product,
            children: [
                {
                    path: '/',
                    name: 'productlist',
                    component: ProductList
                },
                {
                    path: 'detail/:key',
                    name: 'productDetail',
                    component: ProductInfo
                },
            ]
        },
        {
            path: '/devices',
            component: Devices,
            children: [
                {
                    path: '/',
                    name: 'DeviceList',
                    component: DeviceList
                },
                {
                    path: 'detail/:key/:name',
                    name: 'deviceDetail',
                    component: DevicesInfo
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
})



router.beforeEach((to, from, next) => {

    if(to.name === 'login') {  //如果是登录页，则跳过验证
        next()  //必不可少
        return  //以下的代码不执行
    }
    const login = localStorage.getItem('login');
    console.log("登录没有？", login)
    if (!login) {
        next({name: 'login'})
    } else {
        next()
    }
});



export default router;





// function parseUrl(url) {
//     var a = document.createElement('a');
//     a.href = url;
//     return {
//         protocol: a.protocol.replace(':',''),
//         host: a.hostname,
//         path: a.pathname.replace(/^([^\/])/,'/$1'),
//         query: (function(){ 
//             var ret = {}, 
//                 seg = a.search.replace(/^\?/,'').split('&'), 
//                 len = seg.length, i = 0, s; 
//             for (;i<len;i++) { 
//                 if (!seg[i]) { continue; } 
//                 s = seg[i].split('='); 
//                 ret[s[0]] = s[1]; 
//             } 
//             return ret; 
//         })(), 
//         hash: a.hash.replace('#',''),
//     }
//   }


