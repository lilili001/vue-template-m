<template>
    <div>
        <Row>
            <i-col span="10" offset="4">
                <h2>counter{{num1}}</h2>
                <input v-model="num1" type="text"> +
                <input v-model="num2" type="text"> =
                <input readonly v-model="total" type="text">
                <Button type="ghost" @click="reset" size="small">reset</Button>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default{
        name:'counter',
        data(){
            return {
                num1:'',
                num2:''
            }
        },
        computed:{
            total(){
                return Number(this.num1)+Number(this.num2) || '';
            }
        },
        created(){

        },
        mounted(){
            this.$http.post('/indicatorWeb/dataSource/queryDataSource',{name:'alice',age:12}
             
            ).then((res)=>{
                this.num1 = res.data.num1
            })
        },
        methods:{
            reset(){
                this.num1 = this.num2 = '';
            }
        }
    }
</script>