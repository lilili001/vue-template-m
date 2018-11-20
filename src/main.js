import Vue from 'vue'
import App from './App'
import router from './router'
import './com';

/*import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);*/

import '@mpack/styles/index.less';
import './assets/scss/_common.scss';

import store from './store';
import qs from 'qs';
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

var isFormData = function (obj) {
    return  obj instanceof FormData ;
};

axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    if (!isFormData(config.data) && config.method == 'post' ) {
        config.data = qs.stringify(config.data)
        config.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
    } 

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

Vue.prototype.$http.interceptors.response.use(

    (response)=> {
        var suffix = ' 请求状态:' + response.status+':'+response.statusText;
        if (!(response.data.success) && response.data.message) {
            info(response.data.message );
        }
        return response
    },

    (error) => {
        var info = (text) => {
            if (zero.$Message) zero.$Message.destroy();
            zero.$Modal.error({
                content: text
            });
        };
        var err = error.response;
        
        //Do something with response error
        return Promise.reject(error)
});

//window._ = require('underscore');

/* eslint-disable no-new */
const zero = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
