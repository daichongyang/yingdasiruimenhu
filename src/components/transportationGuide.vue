<template>
  <section>
    <div class="guide_box">
      <div class="guide_box_right">
    <!--    <div class="station-list-title"><h5>其他出行方式</h5></div>
        <div class="station-list-item">
          <span class="item-text">从高铁站/火车站出发</span>
          <span class="item_text_right"> 》 </span>
        </div>
        <div class="station-list-item">
          <span class="item-text">从高铁站/火车站出发</span>
          <span class="item_text_right"> 》 </span>
        </div>
        <div class="station-list-item">
          <span class="item-text">从高铁站/火车站出发</span>
          <span class="item_text_right"> 》 </span>
        </div>
        <div class="station-list-item">
          <span class="item-text">从高铁站/火车站出发</span>
          <span class="item_text_right"> 》 </span>
        </div> -->
        <div class="station-list-title"><h5>园区地图</h5></div>
        <div class="banner_img station_map_box" :style="{backgroundImage:'url('+content_box_2_item_img+')'}"></div>
      </div>
      <div class="guide_box_left">

        <div class="station_items" v-for="item in imgList" :key="item.id">
          <div class="station_items_title">
            <h5>{{item.title}}</h5>
          </div>
          <van-steps direction="vertical" :active="0" active-color="#F78A3F">
            <van-step v-for="itemch in item.nodeList" :key="itemch.id">
              <h3>{{itemch.title}}</h3>
              <p>{{itemch.content}}</p>
            </van-step>
            <!-- <van-step>
              <h3>路线2</h3>
              <p>鲘门高铁站上车，可以乘坐深汕1路公交至西寨村站下车，深汕2路公交西寨村站上车至辉煌花园站下车，步行160到达。</p>
            </van-step> -->
          </van-steps>
        </div>
        <!-- <div class="station_items">
          <div class="station_items_title">
            <h5>自驾路线</h5>
          </div>
          <van-steps direction="vertical" :active="0">
            <van-step>
              <h3>1. 鲘门高铁站出发</h3>
              <p>福昆线—深汕大道—产业路</p>
            </van-step>
          </van-steps>
        </div> -->

      </div>
    </div>
  </section>
</template>

<script>
import { Step, Steps } from 'vant';
import {getTraffic} from "../url/api"
export default {
  data(){
    return{
      content_box_2_item_img:require('../assets/img/yaunqu.png'),
      imgList:[]
    }
  },
  methods:{
    getList(){
      let params={
        "current": 1,
        "size": 10
      }
      getTraffic(params).then((res)=>{
        console.log(res)
        if(res.data.code == 200){
          this.imgList = res.data.data.records
        }
      })
    }
  },
  mounted(){
    let obj = {
      navActive:5,
      name:'游玩指引'
    }
    this.getList()
    this.$emit('loackinfor',obj)
  }
}
</script>

<style scoped>
@import "../assets/css/index.css";
.item-text{
  display: inline-block;
  position: absolute;
  left: 45px;
}
.item_text_right{
  float: right;
  font-family: iconfont!important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}
.station_map_box{
  width:311px;
  height:232px;
  margin-top: 35px;
  border-radius: 20px;
  box-shadow: 1px 1px 3px #a3a2a2;
}
</style>
