<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     this is helloworld component
       <ul>
          <li><router-link :to="{ name: 'counter'}">counter</router-link></li>
          <li><router-link :to="{ name: 'todolist'}">todolist</router-link></li>
          <li><router-link :to="{ name: 'portal'}">portal</router-link></li>
          <li><router-link :to="{ name: 'fangkuan'}">放款</router-link></li>
          <li><router-link :to="{ name: 'datatranser'}">dataTransfer</router-link></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
        selected:true
    }
  },
  mounted(){

  },
    methods:{
      fn1(){
          alert()
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{text-align:center}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
