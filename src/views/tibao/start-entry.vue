<template>
    <div :class="pageclass">
        <!--<mheader :title.sync="pageTitle"
                 :rt-more-list="rtmorelist"
                 @optclick="optclick"
        ></mheader>-->
        <mt-button type="primary">dfdf</mt-button>

        <!--<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>-->

        <mt-cell title="标题文字"></mt-cell>

        <step v-model="step1" background-color='#fbf9fe'>
            <step-item title="title" description="des1"></step-item>
            <step-item title="title2" description="des2"></step-item>
            <step-item title="title3" description="des3"></step-item>
        </step>
        <toast v-model="show1" text="Hello World"></toast>
        <actionsheet
                v-model="show1"
                :menus="menus1"
                 ></actionsheet>

    </div>
</template>
<script>
    import {Step,StepItem} from '../../../../m-pack/src/components/step'
    import Toast from '../../../../m-pack/src/components/toast/index.vue';
    import   Actionsheet   from '../../../../m-pack/src/components/actionsheet/index.vue'

    export default{
        name:"StartEntry",
        data:function () {
            return {
                pageTitle:"客户信息",//页面标题
                pageclass:"start-entry-page",//页面class
                rtmorelist:['分享','添加'],  //header 右侧操作按钮列表
                pickerValue:'',
                step1:1,
                show1: true,
                show2:true,
                menus1: {
                    menu1:('Share to friends'),
                    menu2:('Share to timeline')
                },
            }
        },
        components:{
            Step,StepItem,Actionsheet,Toast
        },
        methods:{
            //header右侧操作按钮点击事件:接收子组件传回的 头部右侧 操作列表点击事件, 传回item
            optclick(item){
                console.log(item)
            },
            log (str) {
                console.log(str)
            }
        },
        mounted(){
            //Toast('sss')
        }
    }
</script>