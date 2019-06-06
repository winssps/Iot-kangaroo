import VueRouter from 'vue-router'

// const App = r => require.ensure([], ()=>r(require('../App.vue')), '/')
const MyDevices = r => require.ensure([], ()=>r(require('../views/MyDevices.vue')), '/mydevices')


const Product = r => require.ensure([], ()=>r(require('../views/Product.vue')), '/product')
const ProductInfo = r => require.ensure([], ()=>r(require('../views/ProductInfo.vue')), '/product/info')



const Devices = r => require.ensure([], ()=>r(require('../views/Devices.vue')), '/devices')
const DevicesInfo = r => require.ensure([], ()=>r(require('../views/DevicesInfo.vue')), '/devices/info')


// import MyDevices from '../views/MyDevices.vue'
// import Devices from '../views/Devices.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        // {path: '/', component: App},
        // { path: '/home', component: Home},
        { path: '/mydevices', component: MyDevices},
        { 
            path: '/product', 
            name: 'product',
            component: Product,
        },
        {
            path: '/product/info',
            component: ProductInfo
        },
        { path: '/devices', component: Devices },
        {
            path: '/devices/info',
            component: DevicesInfo
        },
    ]
})

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


