import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MonsterGame from '@/components/monsterGame/MonsterGame'
import Qoute from '@/components/quote/Main'

import Form from '@/components/form/Forms'
import Register from '@/components/form/Registration'
import Login from '@/components/form/Login'
import Gests from '@/components/form/SimplForm'

import Minesweeper from '@/components/minesweeper/Field'
import Keyboard from '@/components/keyboard/Typing'
import English from '@/components/english/Main'
import Catch from '@/components/games/catch/Main'
import Piramid from '@/components/games/piramid/Logik'
import BollGame from '@/components/games/bollGame/BollGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/monster',
      name: 'MonsterGame',
      component: MonsterGame
    },
    {
      path: '/quote',
      name: 'Qoute',
      component: Qoute
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      children: [
        {
          path: 'register',
          component: Register
        },
        {
          path: 'login',
          component: Login
        },
        {
          path: 'gests',
          component: Gests
        }
      ]
    },
    {
      path: '/minesweeper',
      name: 'Minesweeper',
      component: Minesweeper
    },
    {
      path: '/keyboard',
      name: 'Keyboard',
      component: Keyboard
    },
    {
      path: '/english',
      name: 'English',
      component: English
    },
    {
      path: '/catch',
      name: 'Catch',
      component: Catch
    },
    {
      path: '/piramid',
      name: 'Piramid',
      component: Piramid
    }
  ],
  mode: 'history'
})
