<template>
    <div>
        vc
        <h3> 这个是组件里面的state的值: {{$store.state.count}}</h3>
        <button @click="$store.commit('reduce')">-</button>
    </div>
</template>
<script>
    import store from '@/store/store'
    import {mapState} from 'vuex';
    export default{
        name:"vc",
        store,
        computed:{
            ...mapState({
                count1:state=>state.count,
                silicon_company:state=>state.silicon_company
            })
        },
        mounted(){
            this.$store.state.age = 13
            console.log(this.$store.state);
        }
    }
</script>