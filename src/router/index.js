import Vue from 'vue';
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import counter from '@/components/counter'

const Home = {template: '<div>home page</div>'};

const User = {
    template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
};

const UserHome = { template: '<div>Home</div>' };
const UserProfile = { template: '<div>Profile</div>' };
const UserPosts = { template: '<div>Posts</div>' };

Vue.use(Router);

export default new Router({
    mode:"history",
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
            component: function (resolve) {
                require(['../views/tibao/pages/customer/customer'], resolve);
            },
            redirect:{name:'applier'},
            children:[
                {
                    name:"applier",
                    path: 'applier',
                    component: function (resolve) {
                        require(['../views/tibao/pages/customer/customer-page'], resolve);
                    }
                },
                {
                    name:"contacts",
                    path: 'contacts',
                    component: function (resolve) {
                        require(['../views/tibao/pages/customer/contacts-page'], resolve);
                    }
                },
                {
                    path: 'garantees',
                    component: function (resolve) {
                        require(['../views/tibao/pages/customer/garantees-page'], resolve);
                    },
                },
            ]
        },
        //贷款信息
        {
            path: '/loan',
            component: function (resolve) {
                require(['../views/tibao/pages/loan/loan'], resolve);
            },
            redirect:{name:'loan-car'},
            children:[
                {
                    path: 'car',
                    component: function (resolve) {
                        require(['../views/tibao/pages/loan/loan-car'], resolve);
                    },
                    name: 'loan-car'
                },
                {
                    path: 'pdc',
                    component: function (resolve) {
                        require(['../views/tibao/pages/loan/loan-product'], resolve);
                    },
                    name: 'loan-pdc'
                },
                {
                    path: 'count',
                    component: function (resolve) {
                        require(['../views/tibao/pages/loan/loan-count'], resolve);
                    },
                    name: 'loan-shisuan'
                }
            ]
        },
    ]
})
