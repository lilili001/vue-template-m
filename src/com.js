//此文件引入内部 或外部 m-pack的公共组件 进行注册, 主要针对公用部分
import Vue from 'vue';

import mheader from '@/views/tibao/partials/header.vue';
import {Grid,GridItem} from '../../m-pack/src/components/grid';
import GroupTitle from '../../m-pack/src/components/group-title'
import Card from '../../m-pack/src/components/card'
import Divider from '../../m-pack/src/components/divider'


Vue.component("grid",Grid);
Vue.component("grid-item",GridItem);
Vue.component("group-title",GroupTitle);
Vue.component("mheader",mheader);
Vue.component("card",Card);
Vue.component("divider",Divider);