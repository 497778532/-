<template>
  <div id="footer">
    <div class="footer_inner">
      <div class="foot_left">
        <h3>网站导航</h3>
        <div class="foot_nav">
          <div class="foot_nav_home"> <router-link :to="{path:'/'}">首页</router-link></div>
          <ul>
            <li
              v-for="item in list"
              @click="footerSelected(item)"
            >
              <router-link :to="item.url">{{item.id}}</router-link></li>
          </ul>
          <div class="clear"></div>
        </div>
      </div>
      <div class="foot_middle">
        <h3>联系我们</h3>
        <div class="foot_contact">
          <h4>湖南蝶之林生物科技有限公司</h4>
          <p>主 营：</p>
          <p>地 址：长沙市天心区湘府中路369号星城荣域园综合楼7楼</p>
          <p>手 机：</p>
          <p>电 话：0396-52025525</p>
          <p>传 真：</p>
          <p>邮 编：</p>
        </div>

      </div>
      <div class="foot_right">
        <h3>技术支持</h3>
        <div class="zixun">
          <p><a href="http://www.qianyan.biz/">钱眼网</a> | <a href="http://zhuanli.qianyan.biz/">钱眼专利</a> | <a
            href="http://www.qianyan.biz/qyadmin/zhuce.do">管理登录</a> | <a
            href="http://www.qianyan.biz/common/mianze.html">免责声明</a></p>
          <p>Copyright ©2019 Qianyan.biz All rights reserved. </p>
          <p>免责声明：以上信息和图片由注册会员自行发布提供，该发布会员负责信息和图片的真实性、准确性和合法性。钱眼网对此不承担任何责任。</p>
        </div>

      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  import Bus from './bus.js'
  export default {
    data(){
      return{
        list:[
          {
            id:'企业介绍',
            url:'/list/企业介绍'
          },
          {
            id:'精品推荐',
            url:'/list/精品推荐'
          },
          {
            id:'最新供求',
            url:'/list/最新供求'
          },
          {
            id:'新闻动态',
            url:'/list/新闻动态'
          },
          {
            id:'联系方式',
            url:'/list/联系方式'
          },
          {
            id:'人才招聘',
            url:'/list/人才招聘'
          },
          {
            id:'留言',
            url:'/list/留言'
          }

        ],
        selected:''
      }
    },
    methods:{
      footerSelected(item){
        this.left='';
        Bus.$emit('footer', item.id)
      }
    },

  }
</script>

<style>
  #footer {
    background: url(/static/images/footer_bg_67.gif) repeat-x left top #f3f3f3;
  }

  #footer .footer_inner {
    width: 960px;
    padding-top: 10px;
    margin: auto;
    padding-bottom: 60px;
  }

  #footer .footer_inner .foot_left {
    width: 300px;
    float: left;
  }

  #footer .footer_inner .foot_left h3 {
    padding-left: 30px;
    line-height: 50px;
    color: #666666;
    background: url(/static/images/footer_icon_59.gif) left center no-repeat;
  }

  #footer .footer_inner .foot_left div.foot_nav {
    padding-top: 10px;
    width: 300px;
    background: url(/static/images/footer_line_82.gif) repeat-x left top;
  }

  #footer .footer_inner .foot_left div.foot_nav_home {
    width: 30px;
    padding-left: 20px;
    line-height: 22px;
    float: left;
    color: #333;
  }

  #footer .footer_inner .foot_left div.foot_nav_home a {
    color: #333;
  }

  #footer .footer_inner .foot_left div ul {
    width: 230px;
    float: left;
  }

  #footer .footer_inner .foot_left div ul li {
    line-height: 22px;
    padding-left: 26px;
    float: left;
    color: #333;
  }

  #footer .footer_inner .foot_middle {
    width: 300px;
    padding-left: 30px;
    float: left;
  }

  #footer .footer_inner .foot_middle h3 {
    padding-left: 30px;
    line-height: 50px;
    color: #666666;
    background: url(/static/images/footer_icon_62.gif) left center no-repeat;
  }

  #footer .footer_inner .foot_middle div.foot_contact {
    padding-top: 10px;
    width: 300px;
    background: url(/static/images/footer_line_82.gif) repeat-x left top;
  }

  #footer .footer_inner .foot_middle div.foot_contact h4 {
    color: #666;
    line-height: 22px;
  }

  #footer .footer_inner .foot_middle div.foot_contact p {
    line-height: 20px;
    color: #666;
  }

  #footer .footer_inner .foot_right {
    width: 300px;
    padding-left: 30px;
    float: left;
  }

  #footer .footer_inner .foot_right h3 {
    padding-left: 30px;
    line-height: 50px;
    color: #666666;
    background: url(/static/images/footer_icon_64.gif) left center no-repeat;
  }

  #footer .footer_inner .foot_right div.zixun {
    padding-top: 10px;
    width: 300px;
    background: url(/static/images/footer_line_82.gif) repeat-x left top;
  }

  #footer .footer_inner .foot_right div.zixun p {
    line-height: 20px;
    color: #333;
  }
</style>
