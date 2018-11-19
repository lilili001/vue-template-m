import Vue from 'vue';
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import counter from '@/components/counter'

const Home = {template: '<div>home page</div>'};

Vue.use(Router);

export default new Router({
    routes: [
       /* {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },*/
        {
            path: '/counter',
            name: 'counter',
            component: function (resolve) {
                require(['../components/counter'], resolve);
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
            path: '/datatransfer',
            name: 'datatranser',
            component: function (resolve) {
                require(['../components/dataTrans/datatransfer'], resolve);
            }
        },
        {
            path: '/vuex',
            name: 'vuex',
            component: function (resolve) {
                require(['../components/vuex'], resolve);
            }
        },
        /***************************start my w************************************************/
        {
            path: '/',
            name: 'start-page',
            component: function (resolve) {
                require(['../views/tibao/pages/start-page'], resolve);
            }
        },
        //客户信息
        {
            path: '/customer',
            name: 'customer',
            component: function (resolve) {
                require(['../views/tibao/pages/customer/customer-page'], resolve);
            },
            children:[
                {
                    path: 'contacts',
                    component: function (resolve) {
                        require(['../views/tibao/pages/customer/contacts-page'], resolve);
                    },
                    name: 'contacts'
                },
                {
                    path: 'garantees',
                    component: function (resolve) {
                        require(['../views/tibao/pages/customer/garantees-page'], resolve);
                    },
                    name: 'garantees'
                },
            ]
        },
        //贷款信息
        {
            path: '/loan-car',
            name: 'loan-car-page',
            component: function (resolve) {
                require(['../views/tibao/pages/loan/loan-car'], resolve);
            },
            children:[
                {
                    path: 'loan-pdc',
                    component: function (resolve) {
                        require(['../views/tibao/pages/loan/loan-product'], resolve);
                    },
                    name: 'loan-pdc'
                },
                {
                    path: 'loan-shisuan',
                    component: function (resolve) {
                        require(['../views/tibao/pages/loan/loan'], resolve);
                    },
                    name: 'loan-shisuan'
                }
            ]
        }
    ]
})
