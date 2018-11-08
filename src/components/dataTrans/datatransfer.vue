<template>
    <div>
        <!--parent-->
        <div>This is parent</div>
        <dataTransfer1Child class="mar-t20" :gift="gift" @incre="increase"></dataTransfer1Child>
        <div v-show="num!==0">Number from child one is {{this.num}} </div>
        <div class="clearfix"></div>
        <dataTransfer1Child2></dataTransfer1Child2>
    </div>
</template>
<script>
    import dataTransfer1Child from './partials/datatransfer-1-child.vue';
    import dataTransfer1Child2 from './partials/datatransfer-1-child-2.vue';
    export default{
        name: "parentToChild",
        data(){
            return {
                gift: "legacy",
                num: 0
            }
        },
        computed: {},
        components: {dataTransfer1Child, dataTransfer1Child2},
        methods: {
            increase(n){
                n = !!n ? n : 1;
                this.num += Number(n);
            }
        },
        mounted(){
            this.$store.commit('setName','polyna');
            let _this = this;
            var timer = setTimeout(()=>{
                _this.$store.commit('setName','annie');
                clearInterval(timer);
                timer = null;
            },1000)
        }
    }
</script>
