<template>
    <div>
        <div class="page-content">
            <div class="t-c">
                <!--******************************* 1.0 车辆信息********************************************-->
                    <group title="车型选择">
                        <cell title="车型选择" is-link inline-desc="大众 萨博特 2016款 2016款 3.0T 自动 "></cell>
                        <x-input title="新车指导价" value="5000"></x-input>
                        <popup-picker title="车辆类型"></popup-picker>
                        <popup-picker title="是否资源车"></popup-picker>
                        <popup-picker title="购车目的"></popup-picker>
                        <div>
                            <span>二手车信息</span>
                            <i class="iconfont icon-xiangji"></i>
                            扫描车辆登记证
                        </div>
                        <x-input title="公里数" value="500">
                            <span slot="right">万公里</span>
                        </x-input>
                        <x-input title="提报预估价"></x-input>
                        <!--*******************带出信息*************************************-->
                        <x-input title="车架号" value="LEBKSDF1111111"></x-input>
                        <popup-picker title="出厂日期"></popup-picker>
                        <popup-picker title="初登日期"></popup-picker>
                        <div class="paizhao">
                            <flexbox>
                                <flexbox-item :span="9">
                                    <popup-picker title="当前拍照"></popup-picker>
                                </flexbox-item>
                                <flexbox-item>
                                    <x-input class="pad0"></x-input>
                                </flexbox-item>
                            </flexbox>
                        </div>
                        <!--*******************下面需填写*************************************-->
                        <popup-picker title="二手车评估机构" :data="list" v-model="value_list" show-name ></popup-picker>
                        <popup-picker title="是否反贷"></popup-picker>
                        <popup-picker title="车辆过户日期"></popup-picker>
                        <x-switch title="是否融保险"></x-switch>
                        <popup-picker title="商业险出单方式"></popup-picker>
                        <x-input title="车辆损失险保额" value="5000"></x-input>
                        <popup-picker title="第三者责任险"></popup-picker>
                        <flexbox>
                            <flexbox-item :span="8">
                                <popup-picker title="第一年保险"></popup-picker>
                            </flexbox-item>
                            <flexbox-item>
                                <x-input></x-input>
                            </flexbox-item>
                        </flexbox>
                        <flexbox>
                            <flexbox-item :span="8">
                                <popup-picker title="第二年保险"></popup-picker>
                            </flexbox-item>
                            <flexbox-item>
                                <x-input></x-input>
                            </flexbox-item>
                        </flexbox>
                        <flexbox>
                            <flexbox-item :span="8">
                                <popup-picker title="第三年保险"></popup-picker>
                            </flexbox-item>
                            <flexbox-item>
                                <x-input></x-input>
                            </flexbox-item>
                        </flexbox>
                    </group>
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
