<template>
  <section>
    <div class="index_nav">
      <div class="nav_left">
        {{navName}}
      </div>
      <div class="nav_right">
        <div class="nav_right_ul">
          <span class="" :class="{isActive:navActive==1}" @click="changeNav(1)">首页</span>
          <span :class="{isActive:navActive==2}" @click="changeNav(2)">公园设施</span>
          <span :class="{isActive:navActive==3}" @click="changeNav(3)">新闻资讯</span>
          <span :class="{isActive:navActive==4}" @click="changeNav(4)">周边信息</span>
          <span :class="{isActive:navActive==5}" @click="changeNav(5)">游玩指引</span>
        </div>
      </div>
      <button type="button" class="navbar-toggle collapsed" @click="showPopup">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <van-popup v-model="show" position="right" style="width:45%;height:100%">
        <van-cell title="首页" :class="{isActive:navActive==1}" @click="navName='英达斯瑞公园',changeNav(1)"/>
        <van-cell title="公园设施" :class="{isActive:navActive==2}" @click="navName='公园设施',changeNav(2)"/>
        <van-cell title="新闻资讯" :class="{isActive:navActive==3}" @click="navName='新闻资讯',changeNav(3)"/>
        <van-cell title="周边信息" :class="{isActive:navActive==4}" @click="navName='周边信息',changeNav(4)"/>
        <van-cell title="游玩指引" :class="{isActive:navActive==5}" @click="navName='游玩指引',changeNav(5)"/>
      </van-popup>
    </div>
    <router-view :navActive="navActive" @loackinfor="loackinfor"></router-view>
  </section>
</template>

<script>
import { Popup } from 'vant';
export default {
  data(){
    return{
      navActive:1,
      show:false,
      navName:"英达斯瑞公园"
    }
  },
  methods:{
    changeNav(index){
      console.log(index)
      this.navActive = index
      if(index==1){
        this.goIndex()
      }else if(index==2){
        
        this.goparkEng()

      }else if(index==3){

        this.gonewsZixun()

      }else if(index==4){

        this.goaroundLive()

      }else{

        this.gotransportationGuide()
        
      }
    },
    goIndex(){//首页
      this.$router.push({
        path:'./'
      })
    },
    goparkEng(){//公园资讯
      this.$router.push({
        path:'/parkEng'
      })
    },
    gonewsZixun(){//新闻资讯
      this.$router.push({
        path:'/newsZixun'
      })
    },
    goaroundLive(){//新闻资讯
      this.$router.push({
        path:'/aroundLive'
      })
    },
    gotransportationGuide(){//游玩指导
      this.$router.push({
        path:'/transportationGuide'
      })
    },
    showPopup(){
      this.show = true
    },
    loackinfor(val){
      console.log(val)
      this.navName = val.name
      this.navActive = val.navActive
    }
  },
  mounted(){

  }
}
</script>

<style>
  @import "../assets/css/common.css";
</style>