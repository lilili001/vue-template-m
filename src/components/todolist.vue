<template>
    <div>
        <Row>
            <i-col span="10" offset="4">
                <h2>Todo list</h2>
                 <div class="bgary1">
                     <Input v-model="content" class="w300" placeholder="Enter something"></Input>
                     <Button type="primary" @click="add">添加</Button>
                 </div>
                <div class="mar-t20 list-box">
                    <h2><Checkbox></Checkbox> 共（{{todolist.length}}）条</h2>
                    <Row v-for="(item,index) in todolist" :key="index" class="row w350">
                        <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                            <i-col span="18" :class="{completed:item.completed}"><Checkbox :label="item.task"></Checkbox>{{item.task}}</i-col>
                        </CheckboxGroup>

                        <i-col span="6">
                            <Button type="primary" size="small" :disabled="item.completed" @click="item.completed=true">完成</Button>
                            <Button type="ghost" size="small"  @click="remove(index)">删除</Button>
                        </i-col>
                    </Row>
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default{
        name:'todolist',
        data(){
            return {
                content:'',
                checkAllGroup:[],
                todolist:[
                    {task:'Go to Tailand',completed:false},
                    {task:'Go to Spanish',completed:false},
                    {task:'Go to Singapo',completed:false}
                ]
            }
        },
        mounted(){
            console.log('mounted')
        },
        beforeUpdate(){
            console.log('beforeUpdate',this.$el.innerHTML)
        },
        updated(){
            console.log('updated',this.$el.innerHTML)
        },
        methods:{
            add(){
                this.todolist.unshift({task:this.content,completed:false});
                this.content = "";
            },
            remove(index){
                this.todolist.splice(index,1);
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>
<style scoped>
    .row{padding:4px 0;border-bottom:1px solid #ddd}
    .completed{text-decoration: line-through}
</style>