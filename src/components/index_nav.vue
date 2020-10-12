<template>
  <section>
    <div class="index_nav">
      <div class="nav_left">
        英达斯瑞公园
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
    </div>
    <router-view :navActive="navActive"></router-view>
  </section>
</template>

<script>
export default {
  data(){
    return{
      navActive:1,
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
  },
  mounted(){

  }
}
</script>

<style>
  @import "../assets/css/common.css";
</style>