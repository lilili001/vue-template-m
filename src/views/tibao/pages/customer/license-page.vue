import {getInlineDesc} from "../../../../../../m-pack/src/components/checklist/object-filter";
<template>
    <!--************************ 联系人页面 ****************************************-->
    <div>
        <div class="page-content">
            <div class="t-c">
                <!--******************************* 2.0 联系人信息********************************************-->
                    <group title="配偶或直系亲属信息">
                        <flexbox>
                            <flexbox-item :span="3">
                                <i class="iconfont icon-xiangji"></i>
                                <div class="font12">扫描营业执照</div>
                            </flexbox-item>
                            <flexbox-item>
                                支持类型:<br/>
                                三证合一营业执照<br/>
                                工商注册号营业执照
                            </flexbox-item>
                        </flexbox>
                        <cell title="登记注册类型" inline-desc="统一社会信用代码" is-link></cell>
                        <cell title="企业名称" inline-desc="宝鸡网络有限公司上海分公司" is-link></cell>
                        <cell title="统一社会信用代码" inline-desc="2333333XXXXX" is-link></cell>
                        <cell title="经济类型" inline-desc="请输入" is-link></cell>
                        <cell title="注册省市"   is-link>
                            <div slot="getInlineDesc">
                                湖北省武汉市洪山区
                            </div>
                        </cell>
                        <cell title="注册详细地址" inline-desc="..."></cell>
                        <cell title="法人姓名" inline-desc="..."></cell>
                        <cell title="注册资本" inline-desc="..."></cell>
                        <cell title="成立日期" inline-desc="..."></cell>
                        <cell title="是否长期" inline-desc="..."></cell>
                        <cell title="证书到期日期" inline-desc="..."></cell>
                        <cell title="组织机构代码" inline-desc="..."></cell>
                        <cell title="纳税人识别号" inline-desc="..."></cell>
                        <x-textarea title="经营范围"></x-textarea>
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
