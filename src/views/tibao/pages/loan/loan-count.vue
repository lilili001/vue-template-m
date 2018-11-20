<template>
    <div>
        <div class="page-content">
            <div class="t-c">
                <!--******************************* 3.0 贷款计算********************************************-->
                     <!------------下面信息带出---------------->
                     <cell title="意向车型" value="大众 帕萨特 203.0T 自动 7座 中东版"></cell>
                     <cell title="金融产品" value="一证贷(车抵贷) -新"></cell>
                     <x-input title="实际销售价" placeholder="400.000.00(该车指导价)"></x-input>

                     <flexbox>
                         <flexbox-item><x-input title="首付比例(%)"></x-input></flexbox-item>
                         <flexbox-item ><x-input title="首付金额"></x-input></flexbox-item>
                     </flexbox>

                    <flexbox>
                        <flexbox-item><x-input title="尾付比例(%)"></x-input></flexbox-item>
                        <flexbox-item ><x-input title="尾付金额"></x-input></flexbox-item>
                    </flexbox>

                    <flexbox>
                        <flexbox-item><x-input title="保证金比例(%)"></x-input></flexbox-item>
                        <flexbox-item ><x-input title="保证金金额"></x-input></flexbox-item>
                    </flexbox>

                    <flexbox>
                        <flexbox-item><x-input title="购置税"></x-input></flexbox-item>
                        <flexbox-item ><x-input title="GPS费用"></x-input></flexbox-item>
                    </flexbox>

                    <flexbox>
                        <flexbox-item><x-input title="账户管理费"></x-input></flexbox-item>
                    </flexbox>

                    <flexbox>
                        <flexbox-item :span="2"><x-switch title="" v-model="value"></x-switch></flexbox-item>
                        <flexbox-item><cell title="保证金金额" value="15000.00"></cell></flexbox-item>
                    </flexbox>

                    <flexbox>
                        <flexbox-item :span="2"><x-switch title=""  v-model="value"></x-switch></flexbox-item>
                        <flexbox-item><x-input title="经销商贴息"></x-input></flexbox-item>
                        <flexbox-item><x-input title="贴息金额"></x-input></flexbox-item>
                    </flexbox>
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
