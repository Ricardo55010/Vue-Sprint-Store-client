<template>
  <div class="justify-center flex bg-yellow-300 items-center h-screen">
    <div class="text-4xl">
      Hello Vue 3 + Tailwind CSS
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
       id : 1,
       name: '',
       description: '',
       quantity: 0
    };
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    post(){
      axios.post("http://localhost:8080/product",{id:4,name:"Plop",description:"plop",quantity:5}).then(
          console.log("Soy un boton")
      )
      console.log("Soy un boton")
    }
  },
  mounted() {
    //axios.post("http://localhost:8080/product",{id:3,name:"Queso",description:"Queso",quantity:4}).then(
     //   console.log("Soy un boton")
 //   )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
