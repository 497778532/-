<template>
  <div class="chanpin-list_main_1">
    <div class="chanpin_show">
      <h3>精品推荐</h3>
      <div class="chanpin_con">
        <ul class="chanpin_fenlei">
          <li></li>
          <div class="clear"></div><br>
        </ul>


        <div class="show_list">
          <div class="show_style">
            <div>
              <p class="chakan">查看：</p>
              <p class="liebiao"><a href="http://www.qianyan.biz/qy/item.do?i=4&amp;yid=10766492&amp;list=1&amp;sid="></a></p>
              <p class="biaoge"><a href="http://www.qianyan.biz/qy/item.do?i=4&amp;yid=10766492&amp;sid="></a></p>
              <div class="clear"></div>
            </div>
          </div>

          <!-------------------------------------产品展示 九宫格呈现方结构式开始------------------------------------->

          <div class="show">
            <ul>




              <div class="clear"></div>
            </ul>
          </div>

          <!-------------------------------------产品展示 九宫格呈现方式结构结束------------------------------------->





          <!-------------------------------------产品展示 列表呈现方式结构开始------------------------------------->

          <div class="show_2">
            <ul>




            </ul>

          </div>

          <!-------------------------------------产品展示 列表呈现方式结构结束------------------------------------->


          <!-------------------------------------产品展示 分页结构开始------------------------------------->

          <div class="page_list">
            <ul>
              <li class="pre"><a href="/qy/item.do?i=4&amp;page_no=0&amp;yid=10766492&amp;sid=&amp;list=">上一页</a></li>
              <li class="num">1</li>
              <li><span>...</span></li>
              <li class="pre"><a href="/qy/item.do?i=4&amp;page_no=2&amp;yid=10766492&amp;sid=&amp;list=">下一页</a></li>
              <div class="clear"></div>
            </ul>
            <li>
              共 0 条信息，当前显示第 1-0 条，共 1 页
            </li>
          </div>

          <!-------------------------------------产品展示 分页结构结束------------------------------------->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
   .chanpin-list_main_1 {
    width: 730px;
    float: right;
    background: #fff;
    margin-bottom: 10px;
  }
   .chanpin-list_main_1 .chanpin_show {
    width: 730px;
  }
   .chanpin-list_main_1 h3 {
    color: #0e90d2;
    background: url(/static/images/title_bg01.jpg) center center;
  }
   .chanpin-list_main_1 .chanpin_show .chanpin_con {
    width: 728px;
    border-left: 1px #ddd solid;
    border-right: 1px #ddd solid;
    border-bottom: 1px #ddd solid;
    padding-bottom: 10px;
  }
   .chanpin-list_main_1 .chanpin_show .chanpin_con ul.chanpin_fenlei {
    padding-top: 10px;
  }
   .chanpin-list_main_1 .chanpin_show .chanpin_con ul.chanpin_fenlei li {
    float: left;
    width: 150px;
    padding-left: 20px;
    line-height: 22px;
  }
   .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list {
    width: 728px;
  }
   .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .show_style {
    padding-left: 20px;
  }
   .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .show_style div p.chakan {
    display: block;
    width: 38px;
  }
   .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .show_style div p {
    float: left;
    padding-right: 3px;
    width: 16px;
    height: 16px;
  }
   .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .show_style div p.liebiao a {
    display: block;
    width: 16px;
    height: 16px;
    background: url(/static/images/liebiao.jpg) no-repeat center center;
  }
   .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .show_style div p.biaoge a {
    display: block;
    width: 16px;
    height: 16px;
    background: url(/static/images/biaoge.jpg) no-repeat center center;
  }
    .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .show {
     width: 728px;
     padding-bottom: 10px;
     background: #fff;
   }
    .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .show ul {
     width: 728px;
   }
    .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .page_list {
     width: 320px;
     margin: auto;
   }
    .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .page_list ul {
     padding-top: 20px;
     padding-bottom: 20px;
   }
    .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .page_list ul li.pre {
     background: url(/static/images/btn_07.gif) no-repeat center center;
     width: 60px;
     height: 26px;
   }
    .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .page_list ul li.num {
     background: url(/static/images/btn_09.gif) no-repeat center center;
     width: 26px;
     height: 26px;
   }
    .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .page_list ul li {
     margin-left: 5px;
     line-height: 26px;
     text-align: center;
     float: left;
   }
    .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .page_list ul li span {
     color: #ccc;
   }
    .chanpin-list_main_1 .chanpin_show .chanpin_con .show_list .page_list ul li.pre {
     background: url(/static/images/btn_07.gif) no-repeat center center;
     width: 60px;
     height: 26px;
   }
</style>
