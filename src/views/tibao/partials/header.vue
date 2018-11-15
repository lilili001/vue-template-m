<template>
    <div>
        <mt-header fixed type="default"  :title="title">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" v-show="rtMoreList.length" slot="right" @click="toggleRtOpts">
            </mt-button>

        </mt-header>
        <ul class="rtopts" v-show="showRtOpts">
            <li v-for="(item,key) in rtMoreList" :key="key" @click="optclick(item)">{{ item }}</li>
        </ul>

    </div>
</template>
<script>
    export default {
        props:['title' ,'rt-more-list' ],
        name:"mheader",
        data:function(){
          return {
              showRtOpts: false //初始化隐藏header右侧操作按钮
          }
        },
        methods:{
            //头部右侧如果父组件有传操作列表 则点击toggle
            toggleRtOpts(){
                this.showRtOpts = !this.showRtOpts
            },
            //头部右侧接受父组件传下拉操作列表, 并把点击事件回传给父组件
            optclick(item){
                this.$emit('optclick',item)
            }
        },
        mounted(){

        }
    }
</script>
<style lang="scss">
    .rtopts{
        position:absolute;
        right:0;
        width:100px;
        background:#ddd;
        top: 40px;
        text-align: center;
        padding:10px;
        margin:0;
        z-index:999
    }
</style>