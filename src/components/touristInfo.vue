<template>
  <section>
    <div class="index_box">
      <!-- <div class="banner_box" style="height:320px;">
        <div class="banner_img" :style="{backgroundImage:'url('+images[1]+')'}">
        </div>
      </div> -->
      <!-- <div class="services-breadcrumb"></div> -->
				<!-----------------content-box-2-------------------->
      <div class="content_box5">
          <div class="content_box5_cont">
            <div class="entry-header">
              <!-- <span class="time">June 26, 2013  by admin</span> -->
              <h2 class="entry-title">{{dataInfo.name}}</h2>
              <!-- <span class="cat-links">BUSINESS, LIFESTYLE</span> -->
            </div>
            <div>
              <div class="banner_img content_box5_img" :style="{backgroundImage:'url('+dataInfo.coverImg+')'}">
              </div>
            </div>
            <div class="content_box5_cont_text">
              <p>
                {{dataInfo.intro}}
              </p>
              <p>
                标签：<span v-for="item in dataInfo.labels">{{item}}/</span>                         
              </p>
            </div>
          </div>
          
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      showImg:'',
      img_index:1,
      content_box_2_item_img:require('../assets/img/slide2.jpg'),
      images:[],
      dataInfo:{}
    }
  },
  methods:{
    getImgList(){
      this.images=[
        require('../assets/img/banner1.jpg'),
        require('../assets/img/banner2.jpg'),
        require('../assets/img/banner66.jpg'),
        require('../assets/img/box2.jpg'),
        require('../assets/img/project1.jpg'),
      ]
      this.showImg = this.images[0]
      // this.content_box_2_item_img = this.images[2]
      console.log(this.showImg)
    }
  },
  mounted(){
    this.getImgList()
    this.dataInfo = JSON.parse(this.$route.query.dataInfo)
    console.log(JSON.parse(this.$route.query.dataInfo))
  }
}
</script>

<style scoped>
@import "../assets/css/index.css";
</style>