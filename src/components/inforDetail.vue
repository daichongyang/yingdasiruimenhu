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
              <span class="time">June 26, 2013  by admin</span>
              <h2 class="entry-title">RETRO GALLERY: FRAGMENTING PERSISTENT FLIGHT AND PATHOLOGY</h2>
              <span class="cat-links">BUSINESS, LIFESTYLE</span>
            </div>
            <div>
              <div class="banner_img content_box5_img" :style="{backgroundImage:'url('+content_box_2_item_img+')'}">
              </div>
            </div>
            <div class="content_box5_cont_text">
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo.
              </p>
              <h2>
                Heading 1             
              </h2>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo.
              </p>
              <h2>
                Heading 1             
              </h2>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo.
              </p>
              <h2>
                Heading 1             
              </h2>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo.
              </p>
              <h2>
                Heading 1             
              </h2>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo.
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
      images:[]
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
  }
}
</script>

<style scoped>
@import "../assets/css/index.css";
</style>