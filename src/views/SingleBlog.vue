<template>
    <div id="single-blog">
        <h1 v-rainbow>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
        <button @click="deleteSingleBlog()">删除</button>
        <router-link :to="'/edit/' + id">编辑</router-link>
    </div>
</template>
<script>
import axios from 'axios'
//import { METHODS } from 'http';
export default {
    name:"single-blog",
    data(){
        return{
            //$route.params是一个中间容器用来存储参数
            //在home中传递id过来params在这获取id
            id:this.$route.params.id,
            blog:{}
            
        }
    },
    created(){
        //把获取到的id加在网址后面
        axios.get("http://jsonplaceholder.typicode.com/posts/" + this.id)
        .then((data)=>{
          //console.log(data);
          this.blog=data.data;
        })
    },
    methods:{
        //点击删除事件delesingleblog
        deleteSingleBlog(){
            axios.delete("http://jsonplaceholder.typicode.com/posts/" + this.id)
            .then( response =>{
                //this.$router.push(location) 来修改 url，完成跳转
                this.$router.push({path:'/'})
            })

        }
    }

    
}
</script>
<style scoped>
#single-blog{
  padding:20px;
  margin:20px 15%;
  box-sizing: border-box;
  background:rgb(227, 250, 222);
}
</style>


