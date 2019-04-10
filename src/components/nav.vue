<template>
  <div id="nav">
    <div class="nav_inner">
      <ul>
        <li
          v-for="item in list"
          :class="{active:active==item.id||item.id==left}"
          @click="selected(item)"
        >
          <router-link :to="item.url">{{item.id}}</router-link>
        </li>
        <div class="clear"></div>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bus from './bus.js'

  export default {
    data() {
      return {
        list: [
          {
            id: '首页',
            url: '/'
          },
          {
            id: '企业介绍',
            url: '/list/企业介绍'
          },
          {
            id: '精品推荐',
            url: '/list/精品推荐'
          },
          {
            id: '最新供求',
            url: '/list/最新供求'
          },
          {
            id: '新闻动态',
            url: '/list/新闻动态'
          },
          {
            id: '联系方式',
            url: '/list/联系方式'
          },
          {
            id: '人才招聘',
            url: '/list/人才招聘'
          },
          {
            id: '留言',
            url: '/list/留言'
          }

        ],
        active: '',
        left: ''
      }
    },
    methods: {
      selected(item) {
        this.left = '';
        this.active = item.id;
        Bus.$emit('opt', item.id)
      }
    },
    mounted: function () {
      Bus.$on('myVal', (data) => {
        this.active = ''
        this.left = data
      })
      Bus.$on('footer', (data) => {
       this.active=data;
        this.left = '';
      })

    }

  }
</script>

<style>
  #nav {
    width: 100%;
    height: 36px;
    background: url(/static/images/nav_bg_01.jpg) repeat-x center center #0e90d2;
  }

  #nav .nav_inner {
    width: 960px;
    margin: auto;
    line-height: 36px;
  }

  #nav .nav_inner ul li {
    float: left;
  }

  #nav .nav_inner ul li a {
    font-family: "宋体";
    font-size: 14px;
    font-weight: bold;
    padding-left: 20px;
    padding-right: 20px;
    display: block;
    line-height: 36px;
    color: #fff;
  }

  .active {
    background: url(/static/images/nav_a_bg_01.jpg) repeat-x center center #c65600;
  }
</style>
