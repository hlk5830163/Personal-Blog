<template>
  <div class="about">
     <h2>编辑博客</h2>
     <form v-if="!submmited">
       <label>博客标题</label>
       <input type="text" v-model="blog.title" required/>
       <label>博客内容</label>
       <textarea v-model="blog.body"></textarea>
       <div id="checkboxs">
         <label>Vue.js</label>
         <input type="checkbox" value="Vue.js" v-model="blog.categories">
         <label>Node.js</label>
         <input type="checkbox" value="Node.js" v-model="blog.categories">
         <label>React.js</label>
         <input type="checkbox" value="React.js" v-model="blog.categories">
         <label>Angular4</label>
         <input type="checkbox" value="Angular4" v-model="blog.categories">
       </div>
       <label>作者:</label>
       <select v-model="blog.author">
<option v-for="author in authors" :key='author'>
  {{author}}
</option>
       </select>
       <!-- 加prevent阻止刷新页面 -->
       <button v-on:click.prevent="post">编辑博客</button>

     </form>
     <div>
       <h3 v-if="submmited">您的博客发送成功！</h3>
     </div>
<div id="preview">
<h3>博客总览</h3>
<p>博客标题:{{blog.title}}</p>
<p>博客内容</p>
<p>{{blog.content}}</p>
<p>博客分类:</p>
<ul>
  <li v-for="category in blog.categories" :key='category'>
{{category}}
  </li>
</ul>
<p>作者:{{blog.author}}</p>
</div>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data(){
    return{
        id:this.$route.params.id,
      blog:{
      },
      authors:["鲁迅","郭沫若","李白","朱自清"],
      submmited:false
    }
  },
  methods:{
      fetchData(){
          axios.get("http://jsonplaceholder.typicode.com/posts/" + this.id)
          .then( response => {
              console.log(response.data);
              this.blog = response.data;
          })
      },
    //提交添加博客到该网站
    post:function(){
 /* this.$http.post("http://jsonplaceholder.typicode.com/posts",{
  title:this.blog.title,
  body:this.blog.content,
  userId:1*/

axios.put("http://jsonplaceholder.typicode.com/posts/" + this.id,{
  title:this.blog.title,
  body:this.blog.body,
  userId:1
  }) 
.then((data)=>{
  // console.log(data); 
  this.submmited = true;
  alert("您的博客发送成功！")
  })
    }
  },
  created(){
      this.fetchData(

      );
  },
    
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
label{
  display:block;
  margin:8px auto;
}
input[type="text"],textarea,select{
  display:block;
  width:50%;
  padding:4px;
  margin:0 auto;
}
#checkboxs label{
  display: inline-block;
  margin-top:0;
}
#checkboxs input{
  display: inline-block;
  margin-right:10px;
}
li{
  display: inline-block;
  margin-right:25px;
}
button{
  margin: 20px 0;
  background: #38f;
  color:#fff;
  border:0;
  padding:7px;
  border-radius:7px;
  font-size:14px;
  cursor:pointer;
}
#preview{
  padding:10px 20px;
  border:2px dotted #ccc;
  margin: 10px auto;
  width: 50%;
}
h3{
  margin-top:10px;
}
</style>
