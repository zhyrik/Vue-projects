<template>
  <main class="wrap">
    <form @submit.prevent="sendToServer" v-if="flag">
      <label for="email">Email</label>
      <input
        type="text"
        id="email"
        v-model.lazy="email"
        @blur="$v.email.$touch()"
        :class="{error: $v.email.$error}">
      <div class="error-wrap">
        <div class="error-text" v-if="!$v.email.email">This is not email</div>
      </div>

      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        v-model.lazy="name"
        @blur="$v.name.$touch()"
        :class="{error: $v.name.$error }">
      <div class="error-wrap">
        <div class="error-text" v-if="!$v.name.minLength">Name is to short</div>
      </div>

      <label for="lastName">Last name</label>
      <input
        type="text"
        id="lastName"
        v-model.lazy="lastName"
        @blur="$v.lastName.$touch()"
        :class="{error: $v.lastName.$error }">
      <div class="error-wrap">
        <div class="error-text" v-if="!$v.lastName.minLength">Last name is to short</div>
      </div>

      <label for="phone">Phone</label>
      <input
        type="text"
        id="phone"
        v-model.lazy="phone"
        @blur="$v.phone.$touch()"
        :class="{error: $v.phone.$error }">
      <div class="error-wrap">
        <div class="error-text" v-if="!$v.phone.minLength">Nomber is't correct</div>
      </div>

      <label for="password">password</label>
      <input
        type="password"
        id="password"
        v-model.lazy="password"
        @blur="$v.password.$touch()"
        :class="{error: $v.password.$error }">
      <div class="error-wrap">
        <div class="error-text" v-if="!$v.password.minLength">Password length must be more then 8</div>
      </div>

      <label for="checkPassword">checkPassword</label>
      <input
        type="password"
        id="checkPassword"
        v-model.lazy="checkPassword"
        @blur="$v.checkPassword.$touch()"
        :class="{error: $v.checkPassword.$error }">
      <div class="error-wrap">
        <div class="error-text" v-if="$v.checkPassword.$error">password don't</div>
      </div>

      <p>gests</p>
      <button id="gests" @click.prevent="addGest">+</button><br>

      <label v-for="(gest, key, index) in gests" :key="index">
        gest {{ key }}
        <button @click.prevent="deleteGest(key)" class="red">-</button>
        <input type="text" v-model="gests[key]" class="bottom">
      </label>
      <button :disabled="$v.$invalid" type="submit">Send data</button>
    </form>

    <table v-else>
      <caption>all done!</caption>
      <tbody>
        <tr>
          <td>email</td>
          <td>{{ email }}</td>
        </tr>
        <tr>
          <td>name</td>
          <td>{{name}}</td>
        </tr>
        <tr>
          <td>last name</td>
          <td>{{lastName}}</td>
        </tr>
        <tr>
          <td>phone</td>
          <td>{{phone}}</td>
        </tr>
        <tr>
          <td>gests</td>
          <td>
            <ol>
              <li v-for="(gest, index) in gests" :key="index"> - {{ gest }}</li>
            </ol>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import { required, email, minLength, sameAs, numeric } from 'vuelidate/lib/validators'
import * as fb from 'firebase'

export default {
  data () {
    return {
      flag: true,
      email: '',
      name: '',
      lastName: '',
      phone: '',
      password: '',
      checkPassword: '',
      gests: {},
      gestIndex: 0,
      lists: []
    }
  },
  validations: {
    email: {
      required,
      email
    },
    name: {
      required,
      minLength: minLength(4)
    },
    lastName: {
      required,
      minLength: minLength(4)
    },
    phone: {
      required,
      numeric,
      minLength: minLength(9)
    },
    password: {
      required,
      minLength: minLength(8)
    },
    checkPassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  },
  methods: {
    onSubmit () {
      this.lists.email = this.email
      this.lists.name = this.name
      this.lists['last name'] = this.lastName
      this.lists.phone = this.phone
      this.lists.password = this.password
      this.flag = false
    },
    addGest () {
      this.gestIndex++
      this.$set(this.gests, this.gestIndex, '')
    },
    deleteGest (gest) {
      this.$delete(this.gests, gest)
    },
    async sendToServer () {
      try {
        let base = await fb.database().ref('form').push(this.lists)
        console.log(base)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
*{
  text-align: start;
}
input{
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
form{
  width: 500px;
  margin: 50px auto;
}
button{
  background-color: rgb(16, 221, 136);
  margin: 0 auto 10px;
  padding: 5px 40px;
  border-radius: 5px;
  color: white;
  font-size: 22px;
}
button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
.red{
  background-color: #d65943;
}
p{
  margin: 0;
  text-transform: capitalize;
  font-weight: 700;
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
table{
  margin: 0 auto;
  border-collapse: collapse;
}
td{
  border: 1px solid black;
  width: 200px;
  padding: 10px 0;
  text-align: center;
}
</style>
