<template>
    <div>
        <XHeader
                :left-options="{backText: ''}"
                @on-click-more="showMenus = true"
                :right-options="{showMore: true}"
        >客户信息
        </XHeader>

        <div v-transfer-dom>
            <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
        </div>

        <div>
            <router-link to="/customer/applier">申请人</router-link>
            <router-link to="/customer/contacts">联系人</router-link>
            <router-link to="/customer/garantees">担保人</router-link>
        </div>

        <router-view></router-view>
    </div>
</template>
<script>
    //import TransferDom from '@mpack/directives/transfer-dom/index.js'
    import XHeader from '@mpack/components/x-header/index.vue'
    import Actionsheet from '@mpack/components/actionsheet/index.vue'
    import TransferDom from '@mpack/directives/transfer-dom/index.js'
    import Card from '@mpack/components/card/index.vue'
    import Cell from '@mpack/components/cell/index.vue'
    import CellFormPreview from '@mpack/components/cell-form-preview/index.vue'
    import Group from '@mpack/components/group/index.vue'
    import {Tab, TabItem} from '@mpack/components/tab'
    import resultCheck from '@/views/tibao/partials/result-check.vue'
    import XInput from '@mpack/components/x-input'
    import XTextarea from '@mpack/components/x-textarea'
    import Flexbox from '@mpack/components/flexbox/flexbox.vue'
    import FlexboxItem from '@mpack/components/flexbox/flexbox-item.vue'
    import PopupPicker from '@mpack/components/popup-picker/index.vue'
    import Popup from '@mpack/components/popup/index.vue'
    export default {
        name: "vux-page",
        data: function () {
            return {
                //header right opts
                showMenus: false,
                menus: {
                    menu1: 'Take Photo',
                    menu2: 'Choose from photos'
                },
                index: 0,//tab default index
                marriage:"已婚",
                username:"alice",//test moddel
                show_garantee_selector: true,
                garantee_create_type: '', //创建担保人: {0 : 个人, 1: 企业}
                initData:'',
                title1: '手机机型',
                value1: ['iPhone'],
                list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],//popup picker
            }
        },
        directives: {
            TransferDom
        },
        components: {
            XHeader,
            Actionsheet,
            Card,
            Cell,
            CellFormPreview,
            Group,
            Tab, TabItem,
            resultCheck,
            XInput,
            XTextarea,
            Flexbox,
            FlexboxItem,
            PopupPicker,
            Popup
        },
        methods: {
            onItemClick(index) {
                console.log('on item click:', index)
            },
            selectGarantee(index){
                this.garantee_create_type = index;
                this.show_garantee_selector = false;
            },
            onShow () {
                console.log('on show')
            },
            onHide (type) {
                console.log('on hide', type)
            },
            onChange (val) {
                console.log('val change', val)
            },
        },
        mounted(){
            //this.useAction();
        }
    }
</script>
<style>
    .icon-xiangji{
        font-size:60px;
    }
</style>