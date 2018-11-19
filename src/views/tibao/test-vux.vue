<template>
    <div>
        <x-header
                :left-options="{backText: ''}"
                  @on-click-more="showMenus = true"
                :right-options="{showMore: true}"
        >客户信息</x-header>

        <div v-transfer-dom>
            <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
        </div>

        <div class="page-content">
            <card>
                <div slot="header">客户信息</div>
                <div slot="content" class="card-padding">
                    <flexbox>
                        <flexbox-item>
                            <div class="h">
                                <span class="label">订单状态</span>
                                <span class="v">审批完成</span>
                            </div>
                            <div class="h">
                                <span class="label">申请人</span>
                                <span class="v">爱丽丝</span>
                            </div>

                        </flexbox-item>
                        <flexbox-item>
                            <div class="h">
                                <span class="label">订单号</span>
                                <span class="v">1122222</span>
                            </div>
                            <div class="h">
                                <span class="label">电话</span>
                                <span class="v">134777777777</span>
                            </div>
                        </flexbox-item>
                    </flexbox>
                    <div class="h">
                        <span class="label">车辆信息</span>
                        <span class="v">大众 帕萨特3.0T 自动 7座 中东版</span>
                    </div>
                    <div class="h">
                        <span class="label">产品信息</span>
                        <span class="v">一证通 (车抵贷) -新</span>
                    </div>
                </div>
            </card>

            <step v-model="step1" background-color='#fbf9fe' class="pad-t20">
                <step-item title="title" description="des1"></step-item>
                <step-item title="title2" description="des2"></step-item>
                <step-item title="title3" description="des3"></step-item>
            </step>

            <group>
                <cell title="客户信息"  value="已完善" ></cell>
                <cell title="贷款信息" @click.native="onClick"  value="未完善"></cell>
                <cell title="附件信息" value="未完善" ></cell>
            </group>
        </div>

        <tabbar>
            <tabbar-item link="tel:1348888888" style="border-right: 1px solid #ddd">
                <span slot="label">联系销售</span>
            </tabbar-item>

            <tabbar-item badge="2" @click.native="submitOrder">
                <span slot="label">提交</span>
            </tabbar-item>
        </tabbar>

        <!--检查准入结果-->
        <result-check></result-check>

    </div>
</template>
<script>

    import XHeader from '../../../../m-pack/src/components/x-header/index.vue'
    import Actionsheet from '../../../../m-pack/src/components/actionsheet/index.vue'
    import TransferDom from '../../../../m-pack/src/directives/transfer-dom/index.js'
    import Card from '../../../../m-pack/src/components/card/index.vue'
    import Flexbox from '../../../../m-pack/src/components/flexbox/flexbox.vue'
    import FlexboxItem from '../../../../m-pack/src/components/flexbox/flexbox-item.vue'
    import Cell from '../../../../m-pack/src/components/cell/index.vue'
    import CellFormPreview from '../../../../m-pack/src/components/cell-form-preview/index.vue'
    import Group from '../../../../m-pack/src/components/group/index.vue'
    import {Step,StepItem} from '../../../../m-pack/src/components/step'
    import {Tabbar,TabbarItem} from '../../../../m-pack/src/components/tabbar'
    import resultCheck from '@/views/tibao/partials/result-check.vue'

    export default{
        name:"vux-page",
        data:function () {
            return {
                showMenus: false,
                menus: {
                    menu1: 'Take Photo',
                    menu2: 'Choose from photos'
                },
                step1:1
            }
        },
        directives: {
            TransferDom
        },
        components:{
            XHeader,
            Actionsheet,
            Card,
            Flexbox,
            FlexboxItem,
            Cell,
            CellFormPreview,
            Group,
            Step,StepItem,
            Tabbar,TabbarItem,
            resultCheck

        },
        methods:{
            onClick(){
                console.log(this)
            },
            submitOrder(){
                console.log('submit order')
            }
        }
    }
</script>

