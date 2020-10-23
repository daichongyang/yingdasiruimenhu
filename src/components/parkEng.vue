<template>
  <section>
    <div class="index_box">
      <!-- <div class="banner_box" style="height:320px;">
        <div class="banner_img" :style="{backgroundImage:'url('+images[5]+')'}">
        </div>
      </div> -->
      <div class="services-breadcrumb" style="margin-bottom:20px;"></div>
				<!-----------------content-box-2-------------------->
				<section class="content-box box-style-1 box-2">
					<div class="zerogrid">
						<div class="content-box-2">
					<div class="content_box_2_item" v-for="(item,index) in obj" :key="index" @click="godefaild(item)">
					  <div class="content_box_2_item_img" :style="{backgroundImage:'url('+item.coverImg+')'}"></div>
					  <div class="content_box_2_item_text">
					  <h3>{{item.name}}</h3>
					  </div>
					
					</div>
						</div>
					</div>
				</section>

    </div>
  </section>
</template>

<script>
import {assetsList,facilitiesInfo,touristInfo,peripheryInfo} from "../url/api"
export default {
  data(){
    return{
      showImg:'',
      seach:{
        "current": 1,
        "parentId": 0,
        "size": 100
      },
       obj:[
         {
           img:require('../assets/img/gongyuansheshi/AR互动.png'),
           name:'AI互动'
         },
         {
          img:require('../assets/img/gongyuansheshi/深汕石.png'),
           name:'深汕石'
         },
         {
           img:require('../assets/img/gongyuansheshi/产业广场.png'),
           name:'产业广场'
         },
         {
           img:require('../assets/img/gongyuansheshi/荣耀馆.png'),
           name:'荣耀馆'
         },
         {
           img:require('../assets/img/gongyuansheshi/智慧驿站.png'),
           name:'智慧驿站'
         },
         {
           img:require('../assets/img/gongyuansheshi/荣耀径.png'),
           name:'荣耀径'
         },
         {
           img:require('../assets/img/gongyuansheshi/智能垃圾桶.png'),
           name:'智慧垃圾桶'
         },
         {
           img:require('../assets/img/gongyuansheshi/智能机器人.png'),
           name:'智慧机器人'
         },
         {
           img:require('../assets/img/gongyuansheshi/智能导览屏.png'),
           name:'智能导览线'
         },
       
       ],
      img_index:1,
      content_box_2_item_img:'',
      images:[]
    }
  },
  methods:{
    getImgList(){
      assetsList(this.seach).then((res)=>{
        console.log(res)
        if(res.data.code == 200){
          this.obj = res.data.data.records
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
    },
    godefaild(item){//详情
      if(item.type == 1){
        this.gettouristInfo(item.id)
      }else if(item.type == 2){
        this.getfacilitiesInfo(item.id)
      }else{
        this.getperipheryInfo(item.id)
      }
    },
    getfacilitiesInfo(id){//查询公园智能设施详情信息
      let params = {
        id:id
      }
      facilitiesInfo(params).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          this.$router.push({
            path:"/facilitiesInfo",
            query:{
              dataInfo:JSON.stringify(res.data.data)
            }
          })
        }
      })

    },
    gettouristInfo(id){//查询公园景点详情信息
      let params = {
        id:id
      }
      touristInfo(params).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          this.$router.push({
            path:"/touristInfo",
            query:{
              dataInfo:JSON.stringify(res.data.data)
            }
          })
        }
      })
    },
    getperipheryInfo(id){//查询公园周边详情信息
      let params = {
        id:id
      }
      peripheryInfo(params).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          this.$router.push({
            path:"/peripheryInfo",
            query:{
              dataInfo:JSON.stringify(res.data.data)
            }
          })
        }
      })
    },
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
