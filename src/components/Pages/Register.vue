<template>
 <div class="uk-position-relative">
  <Navbar />
  <center>

  <vk-card class="uk-width-1-3@m uk-inline">
  <form @submit.prevent="signup">
  <a slot="center"><img class="uk-width-1-1@s" src="../../assets/main.jpg"></a>
    <h3 style="font-weight: bold;">Sign up</h3>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="email" type="email" placeholder="Email">
    </div>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="uin" type="number" placeholder="UIN">
    </div>
    <div class="uk-margin uk-width-1-1">
        <input class="uk-input" required v-model="password" type="password" placeholder="Password">
    </div>
    <button class="uk-width-1-1 uk-button uk-button-primary uk-button-large">Submit</button>
  </form>
  <p>By signing up, you agree to our Terms, Data Policy and Cookies Policy.</p>
  <h4 style="color:red;">{{errorlog}}</h4>
</vk-card>

  <vk-card class="uk-width-1-3@m">
       <p>Have an account? <a href="/#/login">log in</a></p>
  </vk-card>
  </center>
  <!-- <Footer /> -->
</div>
</template>

<script>
import axios from 'axios';
import Navbar from "@/components/partials/Navbar1"
// import Footer from "@/components/partials/Footer"
export default {
  data() {
    return {
      email: "",
      password: "",
      uin: "",
      errorlog:""
    }
  },
  methods: {
    signup() {
      let api='https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC_Ed2LUR4b2tvX4UHPRUa2qn_SmsTcHgU'
      let email = this.email
      let password = this.password
      this.axios.post(api, {
        email, password
      }).then( (result) =>{
        console.log(result)
        this.$router.push('/')
      }, (err) => {
        this.errorlog = "Error! Email or UIN is not correct. Try again.",
        console.log(err)
      })
    }
  },
  components: {
    // Footer,
    Navbar
  }
}
</script>

<style scooped>
.button {
  display: inline-block;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #055095;
  border: none;
  border-radius: 8px;
  box-shadow: 0 9px #999;
}
.button:hover {background-color: #005BA1}
.button:active {
  background-color: #055095;
  box-shadow: 0 3px #666;
  transform: translateY(4px);
}
.uk-position-relative {
  background-color: rgb(242, 246, 252);
}
</style>
