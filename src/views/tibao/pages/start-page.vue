<template>
    <div :class="pageclass">
        <mheader :title.sync="pageTitle"
                 :rt-more-list="rtmorelist"
                 @optclick="optclick"
        ></mheader>

        <div class="page-content">
            <card :header="{title:pageTitle }">
                <div slot="content" class="card-demo-flex card-demo-content01">

                    <div class="grid-2">
                        <div class="grid">
                            <mt-field label="订单状态:" v-model="captcha" disableClear></mt-field>
                            <mt-field label="申请人:" v-model="captcha" disableClear></mt-field>
                        </div>
                        <div class="grid">
                            <mt-field label="订单号:" v-model="captcha" disableClear></mt-field>
                            <mt-field label="电话:" v-model="captcha" disableClear></mt-field>
                        </div>
                    </div>

                    <div class="grid-2">
                        <div class="grid">
                            <mt-field label="车辆信息:" v-model="captcha" disableClear></mt-field>
                            <mt-field label="产品信息:" v-model="captcha" disableClear></mt-field>
                        </div>
                    </div>

                </div>
            </card>

            <step v-model="step1" background-color='#fbf9fe' class="pad-t20">
                <step-item title="title" description="des1"></step-item>
                <step-item title="title2" description="des2"></step-item>
                <step-item title="title3" description="des3"></step-item>
            </step>

        </div>
    </div>
</template>
<script>
    import {Step,StepItem} from '../../../../../m-pack/src/components/step'
    export default {
        name: "start-page",
        data: function () {
            return {
                pageTitle: "客户信息",//页面标题
                pageclass: "start-entry-page",//页面class
                rtmorelist: ['分享', '添加'],  //header 右侧操作按钮列表
                captcha: 'captcha111',
                step1:1
            }
        },
        components: {
            Step,StepItem
        },
        methods: {
            optclick(item) {
                console.log(item)
            }
        }
    }
</script>
<style scoped lang="scss">
    .weui-grid {
        padding: 0
    }

    .grid-2 {
        .grid {
            width: 50%;
            float: left
        }
    }
</style>