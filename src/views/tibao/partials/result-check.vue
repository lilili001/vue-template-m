<template>
    <div class="fixed-rt-bar" @click="showModal">
        <span>准入结果</span>
    </div>

</template>
<script>
    export default{
        name:"result-check",
        methods:{
            showModal(){
                console.log('show modal');
                this.$vux.confirm.show({
                    title: 'VUX is Cool',
                    content: ('Do you agree?'),
                    onShow () {
                        console.log('Plugin: I\'m showing')
                    },
                    onHide () {
                        console.log('Plugin: I\'m hiding now')
                    }
                })
            }
        }
    }
</script>
<style>
    .fixed-rt-bar{
        width:20px;
        padding:5px;
        position:fixed;
        right:0;
        top:50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        background: #fff;
        border: 1px solid #ddd;
        text-align: center;
    }
</style>