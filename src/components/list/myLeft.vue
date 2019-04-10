<template>
  <div class="gongsi_main_2">
    <div class="search_2">
      <h3>产品搜索</h3>
      <div class="search_2_con">
        <p>产品名</p>
        <div class="search_02">
          <form name="searchForm">
            <input class="search_type" type="text">
            <select v-model="selected">
              <option v-for="item in list" v-bind:value="item.id">{{item.id}}</option>
            </select>
            <input class="search_btn" name="" type="image" src="/static/images/search_02_btn_03.jpg"
                   @click.prevent="search()">
          </form>
        </div>
        <div class="clear"></div>
      </div>
    </div>

    <div class="contact_2">
      <h3>联系方式</h3>
      <div class="contact_2_info">
        <h5>湖南蝶之林生物科技有限公司</h5>
        <p> 联系人：位光辉 <br>
        </p>
        <ul>
          <li>电 话：<span>0396-52025525</span></li>
          <li>传 真：<span>-</span></li>
          <li>地 址：<span>长沙市天心区湘府中路369号星城荣域园综合楼7楼</span></li>
          <li>邮 编：<span></span></li>
          <li>主 营：<span></span></li>
          <li>邮 箱：<span><a href="mailto:18150291551@163.com" target="_blank">18150291551@163.com</a></span></li>
          <li class="web">网 址：<strong></strong></li>

        </ul>
      </div>
    </div>


  </div>
</template>

<script>
  import Bus from '../bus.js'
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
        selected:'',
        opt:''
      }
    },
    methods:{
      search(){
        Bus.$emit('myVal', this.selected)
        this.$router.push(`/list/${this.selected}`)
      }
    },
    mounted:function () {
      Bus.$on('opt', (data) => {
       this.opt=data
        this.selected=data
      })
    },
    updated:function () {
    console.log(this.selected)
    }

  }
</script>

<style scoped>
  #gongsi_main {
    width: 100%;
    padding-top: 10px;
  }
  #gongsi_main .gongsi_main_inner {
    width: 960px;
    margin: auto;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 {
    width: 220px;
    float: left;
    background: #fff;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .search_2 {
    width: 220px;
    padding-bottom: 20px;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .search_2 h3 {
    color: #0e90d2;
    background: url(/static/images/search_bg_01.gif) no-repeat center center;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .search_2 h3 {
    padding-left: 25px;
    font-family: "宋体";
    font-size: 16px;
    font-weight: bold;
    line-height: 36px;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .search_2 .search_2_con p {
    float: left;
    padding-left: 10px;
    padding-top: 10px;
    line-height: 26px;
    font-size: 14px;
    color: #002666;
  }

  #gongsi_main .gongsi_main_inner .gongsi_main_2 .search_2 .search_2_con .search_02 {
    padding-left: 20px;
    float: left;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .search_2 .search_2_con .search_02 input.search_type {
    display: block;
    width: 130px;
    height: 26px;
    line-height: 26px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .search_2 .search_2_con .search_02 input.search_btn {
    margin-top: 10px;
    display: block;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .contact_2 {
    padding-bottom: 20px;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .contact_2 h3 {
    color: #0e90d2;
    background: url(/static/images/lianxi_bg_01.gif) no-repeat center center;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .contact_2 h3 {
    padding-left: 25px;
    font-family: "宋体";
    font-size: 16px;
    font-weight: bold;
    line-height: 36px;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .contact_2 .contact_2_info {
    padding-left: 10px;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .contact_2 .contact_2_info h5 {
    padding-top: 10px;
    color: #002666;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .contact_2 .contact_2_info p {
    width: 200px;
    padding-top: 12px;
    padding-bottom: 12px;
    line-height: 24px;
    border-bottom: 1px #ffebdc solid;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .contact_2 .contact_2_info ul {
    width: 200px;
    padding-top: 10px;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .contact_2 .contact_2_info ul li {
    line-height: 24px;
  }
  #gongsi_main .gongsi_main_inner .gongsi_main_2 .contact_2 .contact_2_info ul li span {
    color: #666;
  }
</style>
