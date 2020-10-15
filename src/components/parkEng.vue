<template>
  <section>
    <div class="index_box">
      <div class="banner_box" style="height:320px;">
        <div class="banner_img" :style="{backgroundImage:'url('+images[5]+')'}">
        </div>
      </div>
      <div class="services-breadcrumb" style="margin-bottom:20px;"></div>
				<!-----------------content-box-2-------------------->
				<section class="content-box box-style-1 box-2">
					<div class="zerogrid">
						<div class="content-box-2">
					<div class="content_box_2_item" v-for="(item,index) in obj" :key="index">
					  <div class="content_box_2_item_img" :style="{backgroundImage:'url('+item.img+')'}"></div>
					  <div class="content_box_2_item_text">
					  <h3>{{item.text}}</h3>
					  </div>
					
					</div>
						</div>
					</div>
				</section>

    </div>
  </section>
</template>

<script>
import {parkList} from "../url/api"
export default {
  data(){
    return{
      showImg:'',
      seach:{
        size:10,
        current:1
      },
       obj:[
         {
           img:require('../assets/img/gongyuansheshi/AR互动.png'),
           text:'AI互动'
         },
         {
          img:require('../assets/img/gongyuansheshi/深汕石.png'),
           text:'深汕石'
         },
         {
           img:require('../assets/img/gongyuansheshi/产业广场.png'),
           text:'产品产品'
         },
         {
           img:require('../assets/img/gongyuansheshi/荣耀馆.png'),
           text:'荣耀馆'
         },
         {
           img:require('../assets/img/gongyuansheshi/智慧驿站.png'),
           text:'智慧驿站'
         },
         {
           img:require('../assets/img/gongyuansheshi/荣耀径.png'),
           text:'荣耀径'
         },
         {
           img:require('../assets/img/gongyuansheshi/智能垃圾桶.png'),
           text:'智慧垃圾桶'
         },
         {
           img:require('../assets/img/gongyuansheshi/智能机器人.png'),
           text:'智慧机器人'
         },
         {
           img:require('../assets/img/gongyuansheshi/智能导览屏.png'),
           text:'智能导览线'
         },
       
       ],
      img_index:1,
      content_box_2_item_img:'',
      images:[]
    }
  },
  methods:{
    getImgList(){
      parkList(this.seach).then((res)=>{
        console.log(res)
        if(res.data.code == 200){

        }
      })
      this.images=[
  require('../assets/img/gongyuansheshi/AR互动.png'),
  require('../assets/img/gongyuansheshi/产业广场.png'),
  require('../assets/img/gongyuansheshi/公园管理处.png'),
  require('../assets/img/gongyuansheshi/光伏发电.png'),
  require('../assets/img/gongyuansheshi/荣耀馆.png'),
  require('../assets/img/gongyuansheshi/荣耀径.png'),
  require('../assets/img/gongyuansheshi/深汕石.png'),
  require('../assets/img/gongyuansheshi/智慧停车.png'),
  require('../assets/img/gongyuansheshi/智慧驿站.png'),
  require('../assets/img/gongyuansheshi/智能导览屏.png'),
  require('../assets/img/gongyuansheshi/智能机器人.png'),
  require('../assets/img/gongyuansheshi/智能垃圾桶.png'),
  require('../assets/img/gongyuansheshi/智能座椅.png'),
  require('../assets/img/gongyuansheshi/智云谷.png'),
      ]
      this.showImg = this.images[0]
      this.content_box_2_item_img = this.images[2]
      console.log(this.showImg)
    },
    goinforDetail(){
      this.$router.push({
        path:'/inforDetail'
      })
    }
  },
  mounted(){
    let obj = {
      navActive:2,
      name:'公园设施'
    }
    this.$emit('loackinfor',obj)
    this.getImgList()
  }
}
</script>

<style scoped>
@import "../assets/css/index.css";
</style>
