import Vue from 'vue'
import Router from 'vue-router'
import myPublic from '@/components/myPublic'
import list from '@/components/list'
import introduction from '@/components/list/serven/introduction'
import elaborate from '@/components/list/serven/elaborate'
import demand from '@/components/list/serven/demand'
import news from '@/components/list/serven/news'
import talent from '@/components/list/serven/talent'
import tel from '@/components/list/serven/tel'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myPublic',
      component: myPublic,
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      children: [
        {
          path: '/list/企业介绍',
          component: introduction
        },
        {
          path: '/list/精品推荐',
          component: elaborate
        },
        {
          path: '/list/最新供求',
          component: demand
        },
        {
          path: '/list/新闻动态',
          component:news
        },
        {
          path: '/list/人才招聘',
          component:talent
        },
        {
          path: '/list/联系方式',
          component:tel
        }
      ]
    },
  ]
})
