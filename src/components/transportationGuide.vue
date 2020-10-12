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
        <div class="station-list-title"><h5>度假区导游图</h5></div>
        <div class="banner_img station_map_box" :style="{backgroundImage:'url('+content_box_2_item_img+')'}"></div>
      </div>
      <div class="guide_box_left">
      <!--  <div class="guide_box_left_top">
          <h4>从广州白云国际机场出发</h4>
        </div> -->
<!--  鲘门高铁站上车，可以乘坐深汕1路公交至西寨村站下车，步行1公里到达.
路线2.鲘门高铁站上车，可以乘坐深汕1路公交至西寨村站下车，深汕2路公交西寨村站上车至辉煌花园站下车，步行160到达。 -->
        <div class="station_items">
          <div class="station_items_title">
            <h5>公共交通路线</h5>
          </div>
          <div class="station_lines_box">
            <div class="station_line">
              <div class="station_placeName">
                <div class="icon_xingzhuangjiehe"> 路线1.</div>
                <div class="station_desc solid">
                  <span>鲘门高铁站上车，可以乘坐深汕1路公交至西寨村站下车，步行1公里到达.</span>
                  <br>
                <!--  <span>约37分钟</span> -->
                </div>
              </div>
            </div>
            <div class="station_line">
              <div class="station_placeName">
                <div class="icon_xingzhuangjiehe"> 路线2.</div>
                <div class="station_desc solid">
                  <span>鲘门高铁站上车，可以乘坐深汕1路公交至西寨村站下车，深汕2路公交西寨村站上车至辉煌花园站下车，步行160到达。</span>
                  <br>
                 <!-- <span>约37分钟</span> -->
                </div>
              </div>
            </div>
<!--            <div class="station_line">
              <div class="station_placeName">
                <div class="icon_xingzhuangjiehe"> 机场南地铁站</div>
                <div class="station_desc c-station-desc">
                  <span>乘坐地铁3号线延北段体育西路方向</span>
                  <br>
                  <span>约37分钟</span>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <div class="station_items">
          <div class="station_items_title">
            <h5>自驾路线</h5>
          </div>
          <div class="station_lines_box">
            <div class="station_line">
              <div class="station_placeName">
                <div class="icon_xingzhuangjiehe">1. 鲘门高铁站出发</div>
                <div class="station_desc solid">
                  <span>福昆线—深汕大道—产业路</span>
                  <br>
                 <!-- <span>约37分钟</span> -->
                </div>
              </div>
            </div>
            
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
      content_box_2_item_img:require('../assets/img/bc8d4d502e25ec90.jpg')
    }
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
