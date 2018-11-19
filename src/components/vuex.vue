<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3> 这个是state的值: {{$store.state.count}}</h3>
        <h3> 这个是computed的值: {{count}}</h3>
        <h3> 这个是computed mapState的值: {{count1}}</h3>
        <div>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>

        <vc></vc>
    </div>
</template>
<script>
    import vc from '@/components/dataTrans/vc'
    import store from '@/store/store'
    import {mapState} from 'vuex';
    export default{
        data(){
            return{
                msg:'Hello Vuex',
            }
        },
        computed:{
            count(){
                return this.$store.state.count;
            },
            ...mapState({
                count1:state=>state.count,
                silicon_company:state=>state.silicon_company
            })
        },
        store,
        components:{
            vc
        },
        mounted(){
            this.$store.state['age'] = 12;
            console.log(this.$store.state);
            console.log(this.silicon_company)
        }
    }
</script>
<style>
    button{
        padding:5px 15px;
    }
</style>