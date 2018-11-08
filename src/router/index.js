import Vue from 'vue';
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import counter from '@/components/counter'

const Home = {template: '<div>home page</div>'};

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/counter',
            name: 'counter',
            component: function (resolve) {
                require(['../components/counter'], resolve);
            }
        },
        {
            path: '/portal',
            name: 'portal',
            component: function (resolve) {
                require(['../components/portal'], resolve);
            }
        },
        {
            path: '/todolist',
            name: 'todolist',
            component: function (resolve) {
                require(['../components/todolist'], resolve);
            }
        },
        {
            path: '/fangkuan',
            name: 'fangkuan',
            component: function (resolve) {
                require(['../views/fangkuanModule/fangkuan/list'], resolve);
            }
        },
        {
            path: '/datatransfer',
            name: 'datatranser',
            component: function (resolve) {
                require(['../components/dataTrans/datatransfer'], resolve);
            }
        }
    ]
})
