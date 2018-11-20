<template>
    <div>
        <x-header
                :left-options="{backText: ''}"
                @on-click-more="showMenus = true"
                :right-options="{showMore: true}"
        >附件信息</x-header>
        <div v-transfer-dom>
            <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
        </div>
        <div class="page-content">
            <tab>
                <tab-item selected @on-item-click="onItemClick">必填</tab-item>
                <tab-item @on-item-click="onItemClick">个人证明类</tab-item>
                <tab-item @on-item-click="onItemClick">车辆证明类</tab-item>
            </tab>
            <div class="tab-content">
                <a  href="javascript:;" class="a-upload">
                    <input type="file" id="file-selector" @change="fnChange(1)"  name="" class="file-item" />+
                </a>

            </div>
        </div>
    </div>
</template>

<script>
    import {jquery as $j} from 'jquery';
    import COS from '@/assets/js/lib/cos-js-sdk-v5.js';
    import XHeader from '@mpack/components/x-header/index.vue'
    import Actionsheet from '@mpack/components/actionsheet/index.vue'
    import TransferDom from '@mpack/directives/transfer-dom/index.js'
    import Card from '@mpack/components/card/index.vue'
    import Flexbox from '@mpack/components/flexbox/flexbox.vue'
    import FlexboxItem from '@mpack/components/flexbox/flexbox-item.vue'
    import Cell from '@mpack/components/cell/index.vue'
    import CellFormPreview from '@mpack/components/cell-form-preview/index.vue'
    import Group from '@mpack/components/group/index.vue'
    import {Step,StepItem} from '@mpack/components/step'
    import {Tabbar,TabbarItem} from '@mpack/components/tabbar'
    import resultCheck from '@/views/tibao/partials/result-check.vue'
    import { Tab, TabItem } from '@mpack/components/tab'
    var sh = {
        Bucket: 'mt-1257971636',
        Region: 'ap-shanghai'
    };

    var cos = new COS({
        getAuthorization: function (options, callback) {
            // 方法一、后端通过获取临时密钥给到前端，前端计算签名
            // var url = 'http://127.0.0.1:3000/sts';
            var url = 'http://localhost/frontend_zujian/cos-js-sdk-v5/server/sts.php';
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onload = function (e) {
                try {
                    var data = JSON.parse(e.target.responseText);
                } catch (e) {
                }
                callback({
                    TmpSecretId: data.credentials && data.credentials.tmpSecretId,
                    TmpSecretKey: data.credentials && data.credentials.tmpSecretKey,
                    XCosSecurityToken: data.credentials && data.credentials.sessionToken,
                    ExpiredTime: data.expiredTime,
                });
            };
            xhr.send();
        }
    });
    export default{
        name:"vux-page",
        data:function () {
            return {
                showMenus: false,
                menus: {
                    menu1: 'Take Photo',
                    menu2: 'Choose from photos'
                },
                step1:1,
                num : 2,
                cos:null
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
            resultCheck,
            Tab, TabItem
        },
        methods:{
            onClick(){
                console.log(this)
            },
            submitOrder(){
                console.log('submit order')
            },
            onItemClick (index) {
                console.log('on item click:', index)
            },
            fnChange(v){

                var file = event.target.files[0];
                cos.putObject({
                    Bucket: sh.Bucket, // Bucket 格式：test-1250000000
                    Region: sh.Region,
                    Key: '/dir/'+file.name, /* 必须 */
                    Body: file,
                    TaskReady: function (tid) {
                        //TaskId = tid;
                    },
                    onProgress: function (progressData) {
                        console.log(JSON.stringify(progressData));
                    },
                }, function (err, data) {
                    console.log(err || data);
                });

            }
        },
        mounted() {

            //1. 通过接口获取结构 structure

            //2. 获取万象数据获取万象签名 用于缩略图显示

            //3. 重组数据, 独立出 必填项, 并重组 为一个数组

            //4. 视图渲染 tabcontent中的内容为点击切换, 每次切换后请求数据 并回显当前视图
        }
    }
</script>
<style>
    /*a  upload */
    .a-upload {
        padding: 4px 10px;
        height: 20px;
        line-height: 20px;
        position: relative;
        cursor: pointer;
        color: #888;
        background: #fafafa;
        border: 1px solid #ddd;
        border-radius: 4px;
        overflow: hidden;
        display: inline-block;
        *display: inline;
        *zoom: 1
    }

    .a-upload  input {
        position: absolute;
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
        filter: alpha(opacity=0);
        cursor: pointer
    }

    .a-upload:hover {
        color: #444;
        background: #eee;
        border-color: #ccc;
        text-decoration: none
    }
</style>