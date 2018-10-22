import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MonsterGame from '@/components/monsterGame/MonsterGame'
import Qoute from '@/components/quote/Main'
import Form from '@/components/form/SimplForm'
import Minesweeper from '@/components/minesweeper/Field'
import Keyboard from '@/components/keyboard/Typing'
import English from '@/components/english/Main'
import Catch from '@/components/games/catch/Main'
import Piramid from '@/components/games/piramid/Logik'

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
      component: Form
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