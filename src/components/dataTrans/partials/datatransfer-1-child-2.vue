<template>
    <div v-show="!!username">Hi ,I am the second child,my name is <b>[ {{ username }} - {{name}} ]</b></div>
</template>
<script>
    import {mapGetters,mapState} from 'vuex';
    export default{
        name: "dataTransfer-2-child-2",
        data(){
            return {}
        },
        computed: {
            ...mapGetters({
                username: 'username'
            }),
            ...mapState({
                name: state=>state.app.username
            })
        },
        mounted(){

        }
    }
</script>