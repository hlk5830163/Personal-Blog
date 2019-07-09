import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

//自定义创指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color="#"+ Math.random().toString(16).slice(2,8);
  } 

})
//自定义传指令
Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value == 'wide'){
      el.style.border="4px dotted #fff";
    }else if (binding.value == 'narrow'){
      el.style.maxwide="1px dotted #sdf";
  }
}
})
//全局自定义过滤器见Home局部见Home
//改title文字大小写
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})
//改body文字长短
Vue.filter("snippet",function(value){
  return value.slice(0,80)+"...";
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
