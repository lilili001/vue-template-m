<template>
    <div> I am child one,I have a gift from parent ,it's a <b>[{{gift}}]</b> <br>
       <div class="mar-t20 w360 mar-b20">
           <Input   v-model="num" class="w200"></Input>
           <Button type="primary" @click="fnSelect"> 选个数字给你的parent </Button>
       </div>

        <div class="w350 mar-t20 mar-b20">
            <Input type="text" v-model="name" class="w200"></Input>
            <Button type="primary" size="small" @click="fnSetName">给我取个名字</Button>
        </div>

        <hr>
    </div>
</template>
<script>
    export default{
        name: "datatransfer-1-child",
        props: ['gift'],
        data(){
            return {
                name: '',
                num:0
            }
        },
        methods: {
            fnSelect(){
                this.$emit('incre', this.num);
            },
            fnSetName(){
                this.$store.commit('setName', this.name)
            }
        }
    }
</script>