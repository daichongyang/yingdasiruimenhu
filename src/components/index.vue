<template>
  <section>
    <div class="index_box">
      <div class="banner_box">
        <div class="banner_img" :style="{backgroundImage:'url('+images[img_index-1]+')'}">
        </div>
      </div>
      <!--  -->
      <div class="banner_ul">
        <div class="banner_ul_img" @click="img_index=item" :class="{img_active:img_index==item}" v-for="item in images.length" :key="item" :style="{backgroundImage:'url('+images[item-1]+')'}">
        </div>
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in images" :key="item"><img :src="item"/></van-swipe-item>
      </van-swipe>
      <!--  -->
      <div class="content-box box-1">
        <div class="zerogrid">
          <div class="wrap-box"><!--Start Box-->
            <div class="box-header">
              <h2>公园介绍</h2>
            </div>
            <div class="box-content">
              <p>{{intro}}</p>
            </div>
          </div>
        </div>
      </div>
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
        <!--  -->
        <section class="content_box_3">
          <div class="content_box_3_title">
            <h3>新闻资讯</h3>
          </div>
          <div class="content_box_3_cont">
            <div class="content_box_3_cont_left">
                <div class="content_box_3_cont_left_item1">
                  <div class="zx_img" :style="{backgroundImage:'url('+images[4]+')'}"></div>
                  <div class="content_box_3_cont_left_2">
                    <h3>献礼特区40年 | 深汕合作区首个海景五星级酒店力争元旦试营业</h3>
                    <p>2020年9月22日</p>
                  </div>
                </div>
                <div class="content_box_3_cont_left_item2">
                  <div class="content_box_3_cont_left_item2_img" :style="{backgroundImage:'url('+images[5]+')'}"></div>
                  <div class="content_box_3_cont_left_item2_text"><h4></h4></div>
                </div>

            </div>
            <div class="content_box_3_cont_right">
              <div class="banner_img content_box_3_cont_right_banner" :style="{backgroundImage:'url('+images[6]+')'}"></div>
                <div class="content_box_3_cont_left_2 content_box_3_cont_right2">
                  <h3>聚焦 | 深汕合作区：持续统筹推进疫情防控和经济社会发展</h3>
                  <p>9月24日</p>
                </div>
            </div>
          </div>
        </section>
    </div>
  </section>
</template>

<script>
import { Swipe, SwipeItem,Lazyload } from 'vant';
import {parkList,facilitiesList} from "../url/api"
export default {
  data(){
    return{
      showImg:'',
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
      images:[],
      images1:[],
      intro:'',//公园介绍
    }
  },
  methods:{
    getparkList(){//获取公园介绍
      let pamars={
        current:1,
        size:10,
      }
      parkList(pamars).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          this.intro = res.data.data.records[0].intro
        }
      })
    },
    getfacilitiesList(){//查询智能设施分页列表
      let pamars={
        parentId:0,
      }
      facilitiesList(pamars).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          
        }
      })
    },
    getImgList(){
      this.images2=[
    "AR互动",

      ]
      this.images1=[
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
      this.images=[
        require('../assets/img/大banner1.png'),
        require('../assets/img/大banner2.png'),
        require('../assets/img/大banner3.png'),

        require('../assets/img/1.png'),
        require('../assets/img/1拷贝.png'),
        require('../assets/img/1拷贝2.png'),
        require('../assets/img/1拷贝3.png'),
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
    setTime(){
      let _this = this
      setInterval(() => {

        if(_this.img_index == _this.images.length){
          _this.img_index = 1
        }else{
          _this.img_index = _this.img_index+1
        }
      }, 4000);
    }
  },
  mounted(){
    this.getparkList()
    this.getfacilitiesList()
    this.getImgList()
    this.setTime()
  }
}
</script>

<style scoped>
@import "../assets/css/index.css";
</style>
