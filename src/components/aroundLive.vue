<template>
  <section>
    <div class="index_box">
      <div class="banner_box" style="height:320px;">
        <div class="banner_img" :style="{backgroundImage:'url('+images[0]+')'}">
        </div>
      </div>
      <div class="services-breadcrumb" style="margin-bottom:20px;"></div>
				<!-----------------content-box-2-------------------->
				<section class="content-box box-style-1 box-2">
					<div class="zerogrid">
						<div class="content-box-2">
							<div class="content_box_2_item" v-for="item in obj" :key="item">
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
import {peripheryList} from "../url/api"
export default {
  data(){
    return{
      showImg:'',
      img_index:1,
      content_box_2_item_img:'',
       obj:[
         {
           img:require('../assets/img/振业时代花园.png'),
           text:'AI振业时代花园'
         },
         {
          img:require('../assets/img/易能高新产业园.png'),
           text:'易能高新产业园'
         },
         {
           img:require('../assets/img/维也纳国际酒店.png'),
           text:'维也纳国际酒店'
         },
         {
           img:require('../assets/img/深圳市显控科技股份有限公司.png'),
           text:'深圳市显控科技股份有限公司'
         },
         {
           img:require('../assets/img/深汕特别合作区管委会.png'),
           text:'深汕特别合作区管委会'
         },
         {
           img:require('../assets/img/深汕大道.png'),
           text:'深汕大道'
         },
         {
           img:require('../assets/img/荣耀径.png'),
           text:'荣耀径'
         },
         {
           img:require('../assets/img/辉煌1号.png'),
           text:'辉煌1号'
         },
         {
           img:require('../assets/img/广东华西建筑工业化有限公司.png'),
           text:'广东华西建筑工业化有限公司'
         },
         {
           img:require('../assets/img/创业村.png'),
           text:'创业村'
         },
         {
           img:require('../assets/img/边溪公园.png'),
           text:'边溪公园'
         },
       ],
      seach:{
        size:10,
        current:1
      },
      images:[]
    }
  },
  methods:{
    getImgList(){
      peripheryList(this.seach).then((res)=>{
        console.log(res)
        if(res.data.code == 200){

        }
      })
      
      
      this.images=[

        require('../assets/img/智云谷.png'),
        require('../assets/img/智能座椅.png'),
        require('../assets/img/智能垃圾桶.png'),
        require('../assets/img/智能机器人.png'),
        require('../assets/img/智能导览屏.png'),
        require('../assets/img/智慧驿站.png'),
        require('../assets/img/智慧停车.png'),
        require('../assets/img/深汕石.png'),
        require('../assets/img/荣耀径.png'),
        require('../assets/img/荣耀馆.png'),
        require('../assets/img/光伏发电.png'),
        require('../assets/img/公园管理处.png'),
        require('../assets/img/产业广场.png'),
        require('../assets/img/AR互动.png'),

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
    this.getImgList()
  }
}
</script>

<style scoped>
@import "../assets/css/index.css";
</style>
