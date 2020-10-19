<template>
  <section>
    <div class="index_box">
      <!-- <div class="banner_box" style="height:320px;">
        <div class="banner_img" :style="{backgroundImage:'url('+images[1]+')'}">
        </div>
      </div> -->
      <div class="services-breadcrumb" style="margin-bottom:20px;"></div>

      <div class="content_box4" v-for="item in imgList" :key="item.id">
        <div v-if="item.address" class="banner_img content_box4_img" :style="{backgroundImage:'url('+item.address[0]+')'}"></div>
        <div class="content_box4_text">
          <div class="card-body">
            <h6>{{item.title}}</h6>
          </div>
          <!-- <div class="content_box4_text1">
            <div>May 15, 2020</div>
            <div>20</div>
            <div>10</div>
          </div>
          <div class="content_box4_text2">
            <h5>Blog title here</h5>
          </div>
          <div class="content_box4_text3">
            Morbi eget dui elit. In lectus eros, convallis vel dolor vitae, semper sodales risus. Donec convallis maximus neque
								vel cursus.
          </div> -->
          <div class="content_box4_text4"><a :href="item.content">详情</a></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import {getMessage} from "../url/api"
export default {
  data(){
    return{
      showImg:require('../assets/img/blog1.jpg'),
      img_index:1,
      seach:{
        size:10000,
        current:1
      },
      content_box_2_item_img:'',
      images:[],
      imgList:[]
    }
  },
  methods:{
    getImgList(){
      let pamars={
        current:1,
        size:10000,
      }
      getMessage(pamars).then((res)=>{
        console.log(res)
        if(res.data.code == 200){
          this.imgList = res.data.data.records
        }
      })
  //     this.images=[
  //  require('../assets/img/1.png'),
  //  require('../assets/img/1拷贝.png'),
  //  require('../assets/img/1拷贝2.png'),
  //  require('../assets/img/1拷贝3.png'),
  //     ]
  //     this.showImg = this.images[0]
  //     this.content_box_2_item_img = this.images[3]
  //     console.log(this.showImg)
    },
    goinforDetail(){
      this.$router.push({
        path:'/inforDetail'
      })
    }
  },
  mounted(){
    let obj = {
      navActive:3,
      name:'新闻资讯'
    }
    this.$emit('loackinfor',obj)
    this.getImgList()
  }
}
</script>

<style scoped>
@import "../assets/css/index.css";
</style>
