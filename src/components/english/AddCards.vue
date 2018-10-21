<template>
  <div>
    <hr><hr>
    <form>

      <label for="translate">Narive word</label>
      <a class="link" :href="`https://translate.google.com/?hl=ua&authuser=0#uk/en/${translate}`" target="_blank">google translate</a>
      <input
        type="text"
        id="translate"
        v-model="translate"
        @blur="$v.translate.$touch()"
        :class="{error: $v.translate.$error }">
      <div class="error-wrap">
        <div class="error-text" v-if="$v.translate.$error">It is require</div>
      </div>

      <label for="eng">English word</label>
        <input
          type="text"
          id="eng"
          v-model="eng"
          @blur="$v.eng.$touch()"
          :class="{error: $v.eng.$error }">
        <div class="error-wrap">
          <div class="error-text" v-if="$v.eng.$error">It is require</div>
        </div>

      <label for="url">url address</label>
      <p><a class="link" :href="`https://www.google.com.ua/search?biw=1093&bih=501&tbm=isch&sa=1&ei=ShixW5DDOpXAlAba2rLAAw&q=${eng}&oq=${eng}&gs_l=${eng}.3..35i39k1l2j0i67k1j0l7.2764.11037.0.11471.4.4.0.0.0.0.157.412.0j3.3.0....0...1c.1.64.${eng}..1.3.410.0...0.HJvp8CVnu6Y`" target="_blank">take url here</a>
        press the right mouse button and select <span class="span">Open image in new tab</span> and copy the address of the picture</p>
      <input
        type="text"
        id="url"
        v-model="url"
        @blur="$v.url.$touch()"
        :class="{error: $v.url.$error }">
      <div class="error-wrap">
        <div class="error-text" v-if="!$v.url.url">It is not url</div>
      </div>

      <my-button><span @click.prevent="add">add</span></my-button>
    </form>

    <hr><hr>
    <ul class="list">
      <li
        v-for="(list, index) in lists"
        :key="index"
      >
        <my-card
          :item="list"
          :img="true"
          :eng="true"
        ><div class="delete" title="delete" @click="sub(index)">-</div></my-card>
      </li>
    </ul>
  </div>
</template>

<script>
import { url, required } from 'vuelidate/lib/validators'
import Card from './Card'
import Button from '../keyboard/Buttons'
export default {
  data () {
    return {
      eng: '',
      translate: '',
      url: '',
      lists: [
        {
          eng: 'apple',
          translate: 'яблуко',
          url: 'http://distasio.chem.cornell.edu/img/apple.jpg'
        },
        {
          eng: 'chery',
          translate: 'вишня',
          url: 'https://vignette.wikia.nocookie.net/fruit/images/6/64/Orchard-Cherry.jpg/revision/latest?cb=20140805131428'
        }
      ]
    }
  },
  components: {
    myCard: Card,
    myButton: Button
  },
  validations: {
    eng: {
      required
    },
    translate: {
      required
    },
    url: {
      required,
      url
    }
  },
  methods: {
    add () {
      let obj = {eng: this.eng, translate: this.translate, url: this.url}
      this.lists.push(obj)
      this.eng = ''
      this.translate = ''
      this.url = ''
    },
    sub (index) {
      this.lists.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.list{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap-reverse;
  flex-direction: row-reverse;
}
li{
  list-style: none;
}

form{
  max-width: 500px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
label{
  display: flex;
  flex-direction: column;
}
input{
  box-sizing: border-box;
  width: 100%;
  margin: 5px 0 0 0;
  font-size: 18px;
  padding: 5px;
  border-radius: 4px;
  outline: none;
  border: 1px solid blue;
}
.bottom{
  margin-bottom: 20px;
}
.error{
  border: 1px solid red;
}
label{
  font-weight: 700;
  text-transform: capitalize;
}
.error-wrap{
  height: 20px;
}
.error-text{
  padding: 5px 0;
  font-size: 12px;
  color: red;
  font-family: arial;
}

.link{
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: blue;
}
.span{
  text-decoration: underline;
  color: darkred;
}
.delete{
  position: absolute;
  border: 1px solid black;
  background: #fff;
  border-radius: 50%;
  padding: 5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  top: -10px;
  left: -10px;
  transition: all 0.3s;
}
.delete:hover{
  background: #f00;
  cursor: pointer;
}
</style>
