<template>
    <div class="input-box clearFix">

        <x-input title="username" is-type="email" v-model="username" ></x-input>
        <label class="fl" v-remind="username"></label>
        <div>
            <input v-model="age" v-verify="age" placeholder="age"/>
            <label class="fl" v-remind="age"></label>
        </div>
        <div>
            <input type="text" class="phoneIcon fl" placeholder="手机号码" v-model="regInfo.phone" v-verify="regInfo.phone">
            <label class="fl" v-remind="regInfo.phone"></label>
        </div>
        <button v-on:click="submit">提交</button>
    </div>
</template>

<script>
    import XInput from '@mpack/components/x-input/index.vue'
    export default {
        name: 'app',
        data () {
            return {
                username:"",
                age:"",
                regInfo: {
                    phone: ""
                }
            }
        },
        verify: {
            username:"required",
            age:"required",
            regInfo: {
                phone: ["required","mobile"]
            }
        },
        methods:{
            submit: function () {
                console.log(this.$verify.$errors)
                console.log(this.$verify.check());
            }
        },
        components:{
            XInput
        }
    }
</script>