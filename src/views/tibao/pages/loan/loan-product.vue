<template>
    <div>
        <div class="page-content">
            <div class="t-c">
                <!--******************************* 2.0 产品信息********************************************-->
                    <cell title="产品选择" is-link>
                        <div slot="inline-desc">
                            一证通(车抵贷) -新<br/>
                            消费贷, 月付, 不开通
                        </div>
                    </cell>
                    <popup-picker title="业务类型"></popup-picker>
                    <popup-picker title="租赁属性"></popup-picker>
                    <popup-picker title="融资期限"></popup-picker>
                    <popup-picker title="贷款频率"></popup-picker>
                    <popup-picker title="还款方式"></popup-picker>
                    <popup-picker title="GPS信息"></popup-picker>
                    <popup-picker title="GPS价格类型"></popup-picker>
                    <popup-picker title="GPS升级方案类型"></popup-picker>
            </div>
        </div>
        <!--检查准入结果-->
        <!--<result-check></result-check>-->
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
    import XSwitch from '@mpack/components/x-switch/index.vue'
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
                marriage: "已婚",
                username: "alice",//test moddel
                show_garantee_selector: true,
                garantee_create_type: '', //创建担保人: {0 : 个人, 1: 企业}
                initData: '',
                title1: '手机机型',
                value1: ['iPhone'],
                list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],//popup picker
                list:[[
                    {name:'小米',value:'001'},
                    {name:'华为',value:'002'},
                    {name:'三星',value:'003'}
                ]
                ],
                value_list:['001'],
                value: true
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
            Popup,
            XSwitch
        },
        methods: {
            onItemClick(index) {
                console.log('on item click:', index)
            },
            selectGarantee(index) {
                this.garantee_create_type = index;
                this.show_garantee_selector = false;
            },
            onShow() {
                console.log('on show')
            },
            onHide(type) {
                console.log('on hide', type)
            },
            onChange(val) {
                console.log('val change', val)
            },
        },
        mounted() {
            //this.useAction();
        }
    }
</script>
<style>
    .icon-xiangji {
        font-size: 60px;
    }
</style>
