import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home.vue'
import homePage from '@/components/home/components/home_page/home_page.vue'
import billboard from '@/common/billboard'
import quanzhan from '@/components/billboard/quanzhan.vue'
import donghua from '@/components/billboard/donghua.vue'
import register from '@/components/register/register.vue'
import animation from '@/components/home/components/animation/animation.vue'
import tuijian from '@/components/home/components/animation/tuijian.vue'
import MAD from '@/components/home/components/animation/MAD.vue'
import MMD from '@/components/home/components/animation/MMD.vue'
import zonghe from '@/components/home/components/animation/zonghe.vue'
import duanpian from '@/components/home/components/animation/duanpian.vue'
import fanju from '@/components/home/components/fanju/fanju.vue'
import ftuijian from '@/components/home/components/fanju/tuijian.vue'
import Serial from '@/components/home/components/fanju/Serial.vue'
import official from '@/components/home/components/fanju/official.vue'
import consulting from '@/components/home/components/fanju/consulting.vue'
import end from '@/components/home/components/fanju/end.vue'
import space from '@/components/space/space.vue'
import history from '@/components/space/spa/history.vue'
import mine from '@/components/space/spa/mine.vue'
import ent from '../components/comm/ent.vue'
import search from '../components/comm/search'
import play from '../components/home/components/player/play.vue'
import dmusic from '../components/home/components/music/dmusic.vue'
import tmusic from '../components/home/components/music/tmusic.vue'
import ycmusic from '../components/home/components/music/ycmusic.vue'
import fcmusic from '../components/home/components/music/fcmusic.vue'
import vomusic from '../components/home/components/music/vomusic.vue'
import dymusic from '../components/home/components/music/dymusic.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: home,
    redirect: '/home/homePage'
  }, {
    path: '/play',
    component: play
  }, {
    path: '/search',
    component: search
  }, {
    path: '/ent',
    component: ent
  }, {
    path: '/space',
    component: space,
    redirect: '/space/history',
    children: [{
      path: 'history',
      component: history
    }, {
      path: 'mine',
      component: mine
    }]
  },

  {
    path: '/billboard',
    component: billboard,
    redirect: '/billboard/quanzhan',
    children: [{
      path: 'quanzhan',
      component: quanzhan
    },
    {
      path: 'donghua',
      component: donghua
    }
    ]
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/home',
    component: home,
    redirect: '/home/homePage',
    children: [{
      path: 'homePage',
      component: homePage
    },

    {
      path: 'fanju',
      component: fanju,
      redirect: '/home/fanju/ftuijian',
      children: [{
        path: 'ftuijian',
        component: ftuijian
      }, {
        path: 'Serial',
        component: Serial
      }, {
        path: 'official',
        component: official
      }, {
        path: 'consulting',
        component: consulting
      }, {
        path: 'end',
        component: end
      }]
    },
    {
      path: 'animation',
      component: animation,
      redirect: '/home/animation/tuijian',
      children: [{
        path: 'tuijian',
        component: tuijian
      }, {
        path: 'MAD',
        component: MAD
      }, {
        path: 'MMD',
        component: MMD
      }, {
        path: 'zonghe',
        component: zonghe
      }, {
        path: 'duanpian',
        component: duanpian
      }]
    }, {
      path: 'dmusic',
      component: dmusic,
      redirect: '/home/dmusic/tmusic',
      children: [{
        path: 'tmusic',
        component: tmusic
      }, {
        path: 'ycmusic',
        component: ycmusic
      }, {
        path: 'fcmusic',
        component: fcmusic
      }, {
        path: 'vomusic',
        component: vomusic
      }, {
        path: 'dymusic',
        component: dymusic
      }]
    }
    ]
  }

  ]

})
