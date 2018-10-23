<template>
  <div class="overlay" >
    <router-link to="/form" tag="div"><div class="close">x</div></router-link>
    <form @submit.prevent="onSubmit">

      <div class="title">registration form</div>

      <div class="wrap">
        <label for="email">email:</label>
        <div class="input-wrap" :class="{error: !emailStyle && $v.email.$dirty, succes: emailStyle}">
          <input
            type="text"
            id="email"
            v-model.lazy="email"
            @blur="$v.email.$touch()"
          >
          <span>@</span>
          <template v-if="$v.email.$dirty">
            <div v-if="emailStyle" class="check check-corect">&#10003;</div>
            <div v-else class="check check-error">X</div>
          </template>
        </div>
      </div>

      <div class="wrap">
        <label for="password">password:</label>
        <div class="input-wrap" :class="{error: !passwordStyle && $v.password.$dirty, succes: passwordStyle}">
          <input
            type="password"
            id="password"
            v-model.lazy="password"
            @blur="$v.password.$touch()"
          >
          <span>***</span>
          <template v-if="$v.password.$dirty">
            <div v-if="passwordStyle" class="check check-corect">&#10003;</div>
            <div v-else class="check check-error">X</div>
          </template>
        </div>
      </div>

      <div class="wrap">
        <label for="repead-password">repead password:</label>
        <div class="input-wrap" :class="{error: !checkPasswordStyel && $v.checkPassword.$dirty, succes: checkPasswordStyel}">
          <input
            type="password"
            id="repead-password"
            v-model.lazy="checkPassword"
            @blur="$v.checkPassword.$touch()"
          >
          <span>***</span>
          <template v-if="$v.checkPassword.$dirty">
            <div v-if="checkPasswordStyel" class="check check-corect">&#10003;</div>
            <div v-else class="check check-error">X</div>
          </template>
        </div>
      </div>

      <div class="wrap">
        <div></div>
        <button
          :class="{'check-error': loading}"
          :disabled="loading"
        >register</button>
      </div>

    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      email: '',
      password: '',
      checkPassword: ''
    }
  },
  validations: {
    email: {
      required,
      email
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
      if (this.emailStyle && this.checkPasswordStyel) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('registerUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(error => console.log(error))
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    emailStyle () {
      if (this.$v.email.email && this.$v.email.required) {
        return true
      } else {
        return false
      }
    },
    passwordStyle () {
      if (this.$v.password.minLength && this.$v.password.required) {
        return true
      } else {
        return false
      }
    },
    checkPasswordStyel () {
      if (this.$v.checkPassword.sameAsPassword && this.$v.checkPassword.required) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
.overlay{
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: hsla(235, 23%, 33%, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.title{
  font-size: 30px;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.close{
  position: absolute;
  top: 5%;
  right: 2%;
  border-radius: 50%;
  border: 1px solid white;
  width: 35px;
  height: 35px;
  line-height: 33px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  transition: all .4s;
}
.close:hover{
  border: 1px solid #FF6149;
  color: #FF6149;
}
form{
  width: 500px;
  transform: translate(0, -20%)
}
.wrap{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
label{
  color: white;
  text-transform: capitalize;
  cursor: pointer;
}
.input-wrap{
  height: 40px;
  width: 300px;
  padding: 0 20px;
  margin: 10px 0;
  color: white;
  border: 1px solid white;
  border-radius: 20px;
  background: hsla(236, 23%, 50%, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.succes{
  border: 1px solid #7ACE45;
}
.error{
  border: 1px solid #FF6149;
}
.check{
  position: absolute;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 15px;
  border-radius: 50%;
  color: white;
  font-weight: 600;
  top: -5px;
  right: -5px;
}
.check-corect{
  background-color: #7ACE45;
}
.check-error{
  background-color: #FF6149;
  text-align: center;
}
input{
  width: 250px;
  background: transparent!important;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
}
button{
  outline: none;
  height: 40px;
  width: 150px;
  padding: 0 20px;
  margin: 10px 0;
  background: #fff;
  color: hsla(236, 23%, 50%, 1);
  border: 1px solid hsla(236, 23%, 50%, 1);
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s;
}
button:hover{
  border: 1px solid white;
  background: hsla(236, 23%, 50%, 1);
  color: white;
}
</style>
