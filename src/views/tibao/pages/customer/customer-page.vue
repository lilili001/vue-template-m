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
        <div class="page-content">
            <tab v-model="index">
                <tab-item @on-item-click="onItemClick">申请人</tab-item>
                <tab-item @on-item-click="onItemClick">联系人</tab-item>
                <tab-item @on-item-click="onItemClick">担保人</tab-item>
            </tab>
            <div class="t-c">
                <!--******************************* 1.0 申请人信息********************************************-->
                <div  v-if="index==0">
                    <x-input title="申请人姓名" name="username" placeholder="" v-model="username"  ></x-input>
                    <x-input title="身份证" name="username" placeholder="" is-type="china-name"></x-input>
                    <x-input title="手机号" name="username" placeholder="" is-type="china-name"></x-input>
                    <cell title="婚姻状态" v-model="marriage" is-link></cell>
                    <cell title="性别"   is-link></cell>
                    <cell title="申请人学历"   is-link></cell>
                    <cell title="申请人学位"   is-link></cell>
                    <cell title="有无房产"   is-link></cell>
                    <cell title="居住状况"   is-link></cell>
                    <cell title="所属行业"   is-link></cell>
                    <cell title="单位名称"   is-link></cell>
                    <cell title="申请人职业"   is-link></cell>
                    <x-input title="税后年薪" name="username"><span slot="right">万元</span></x-input>
                    <x-input title="单位名称" name="username"></x-input>
                    <cell title="单位省市县"   is-link></cell>
                    <x-textarea title="单位详细地址"   ></x-textarea>
                    <cell title="住址省市县"   is-link></cell>
                    <x-textarea title="住址详细地址"   ></x-textarea>
                </div>
                <!--******************************* 2.0 联系人信息********************************************-->
                <div v-if="index==1">
                    <group title="配偶或直系亲属信息">
                        <flexbox>
                            <flexbox-item :span="3">
                                <i class="iconfont icon-xiangji"></i>
                                <div class="font12">扫描亲属证件</div>
                            </flexbox-item>
                            <flexbox-item>
                                <x-input title="亲属姓名" name="username"></x-input>
                                <x-input title="身份证号" name="username"></x-input>
                            </flexbox-item>
                        </flexbox>
                        <cell title="与申请人关系" is-link></cell>
                        <x-input title="手机号" name="username"></x-input>
                        <x-input title="税后年薪" name="username"><span slot="right">万元</span></x-input>
                        <x-input title="单位名称" name="username"></x-input>
                        <cell title="单位省市县"   is-link></cell>
                        <x-textarea title="单位详细地址"   ></x-textarea>
                    </group>
                    <group title="紧急联系人信息">
                            <cell title="与申请人关系" is-link></cell>
                            <x-input title="电话" name="username"></x-input>
                            <x-input title="姓名" name="username"></x-input>
                    </group>
                    <group>
                        <cell title="与申请人关系" is-link></cell>
                        <x-input title="电话" name="username"></x-input>
                        <x-input title="姓名" name="username"></x-input>
                    </group>
                </div>
                <!--******************************* 3.0 担保人信息********************************************-->
                <div v-if="index==2">
                    <div class="garantee-box">
                        <div class="garantee-create-box" v-show="show_garantee_selector">
                            <div @click="selectGarantee(0)">个人担保人</div>
                            <div @click="selectGarantee(1)">企业担保人</div>
                        </div>
                        <div class="garantee-content-box">
                            <!--******************************* 3.1 个人担保人********************************************-->
                            <div class="personal" v-show="garantee_create_type===0">
                                <flexbox>
                                    <flexbox-item :span="3">
                                        <i class="iconfont icon-xiangji"></i>
                                        <div class="font12">扫描担保人证件</div>
                                    </flexbox-item>
                                    <flexbox-item>
                                        <x-input title="担保人姓名" name="username"></x-input>
                                        <x-input title="身份证号" name="username"></x-input>
                                        <x-textarea title="户籍详细地址" name="username"></x-textarea>
                                    </flexbox-item>
                                </flexbox>
                                <cell title="与申请人关系" is-link></cell>
                                <popup-picker
                                        :title="title1"
                                        :data="list1"
                                        v-model="value1"
                                        @on-change="onChange" confirm-text="确认"></popup-picker>
                                <x-input title="手机号" name="username"></x-input>
                                <popup-picker
                                        title="婚姻状况"
                                        :data="list1"
                                        v-model="value1"
                                        @on-change="onChange" confirm-text="确认"></popup-picker>
                                <x-input title="单位名称" name="username"></x-input>
                                <cell title="单位省市县"   is-link></cell>
                                <x-textarea title="单位详细地址"   ></x-textarea>
                                <cell title="住址省市县"   is-link></cell>
                                <x-textarea title="住址详细地址"   ></x-textarea>
                            </div>
                            
                            <!--******************************* 3.2 企业担保人********************************************-->
                            <div class="enternprise" v-show="garantee_create_type===1">

                                <!--*********************下面内容带出************************************-->
                                <group>
                                    <flexbox>
                                        <flexbox-item :span="3">
                                            <i class="iconfont icon-xiangji"></i>
                                            <div class="font12">扫描营业执照</div>
                                        </flexbox-item>
                                        <flexbox-item>
                                            <div>支持类型:<br/>
                                                三证合一营业执照<br/>
                                                工商注册号营业执照<br/>
                                            </div>
                                        </flexbox-item>
                                    </flexbox>

                                    <cell title="与申请人关系" is-link inline-desc="朋友"></cell>
                                    <cell title="登记注册类型" is-link inline-desc="统一社会信用代码"></cell>
                                    <cell title="企业名称"   inline-desc="宝鸡网络有限公司上海分公司"></cell>
                                    <cell title="统一设会信用代码"   inline-desc="233333333333333333333"></cell>
                                    <cell title="经济类型">
                                        <div slot="inline-desc">
                                            <x-input placeholder="请输入"></x-input>
                                        </div>
                                    </cell>

                                    <popup-picker title="注册省市" confirm-text="确认"></popup-picker>

                                    <cell title="注册详细地址">
                                        <div slot="inline-desc">
                                            <x-textarea placeholder="请输入"></x-textarea>
                                        </div>
                                    </cell>
                                    <cell title="法人姓名">
                                        <div slot="inline-desc">
                                            <x-input placeholder="请输入" value="微微"></x-input>
                                        </div>
                                    </cell>

                                    <!--*********************下面内容需要填写************************************-->
                                    <x-input title="法人身份证号" ></x-input>
                                    <x-input title="企业联系电话" ></x-input>
                                    <popup-picker title="企业性质" confirm-text="确认"></popup-picker>

                                    <!--*********************下面内容带出************************************-->
                                    <cell title="注册资本" inline-desc="10.0000"></cell>
                                    <cell title="成立日期" inline-desc="2018-11-18"></cell>
                                    <cell title="是否长期" inline-desc="是"></cell>
                                    <cell title="证书到期日期" inline-desc="2020-11-18"></cell>
                                    <cell title="组织机构代码" inline-desc="112xxx1211111"></cell>
                                    <cell title="纳税人识别号" inline-desc="1000232300000"></cell>
                                    <cell title="经营范围">
                                        <div slot="inline-desc">
                                            <x-textarea></x-textarea>
                                        </div>
                                    </cell>

                                    <!--*********************下面内容需要填写************************************-->
                                    <x-input title="实际控制人姓名"></x-input>
                                    <x-input title="身份证号"></x-input>
                                    <x-input title="联系方式"></x-input>
                                </group>
                            </div>
                        </div>
                    </div>
                </div>
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
