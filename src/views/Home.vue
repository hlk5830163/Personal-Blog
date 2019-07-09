<template>
  <div id="home">
   <h1>博客总览</h1>
    <!-- 搜索方法 -->
   <input type="text" v-model="search" placeholder="搜索">
   <div v-for="blog in filteredBlogs" :key='blog.string' class="single-blog"  v-theme="'wide'">
<!-- 自定义过滤器见main -->
<!-- 要传的路由器id -->
<!-- {{ blog.title | to-uppercase}}表示过滤后的值前面表示需要过滤的对象。后面表示过滤器名称 -->
  <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase}}</h2></router-link>
  <article>{{ blog.body | snippet}}</article>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
      search:"",
blogs:[]
    }
  },
  created(){
axios.get("http://jsonplaceholder.typicode.com/posts")
  .then((data)=>{
  // console.log(data); 
   this.blogs = data.data.slice(90,100);
  //  console.log(this.blogs);
  })
    },
    //搜索方法
    computed:{
    filteredBlogs:function(){
      //拿到blogs里的每一条blog数据
return this.blogs.filter((blog)=>{
  //match（）比较的方法比较search和blog有没有相同项，然后拿到blog
  return blog.title.match(this.search)
})
    }
    },
  //以下为局部自定义过滤器。全局见main
 /* filters:{
  "to-uppercase":function(value){
  return value.toUpperCase();
  }
  },  */
  //以下为es6语法简写
 /*  toUppercase(value){
    return value.toUpperCase();
  }, */
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
.single-blog{
  padding:20px;
  margin:20px 15%;
  box-sizing: border-box;
  background:lavender;
}
#home a{
color:#444;
text-decoration: none;
}
input[type="text"]{
  padding:4px;
  box-sizing: border-box;
}
</style>
