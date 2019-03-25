<template>
 <div class="uk-position-relative">
 <Navbar />
 <center>
  <h2>Add the new Appointment</h2>
  <h6>CHOOSE THE DOCTOR</h6>
  <form>
    <fieldset class="uk-fieldset">
      <div class="uk-margin uk-grid-small uk-child-width-auto ">
            <label><input class="uk-radio" type="radio" name="radio2" checked> My Doctor</label>
            <label><input class="uk-radio" type="radio" name="radio2">
              <select class="uk-select uk-width-1-5@m">
                <option>Other Doctor</option>
                <option>Asel Armanova (dermatologist)</option>
                <option>Dauren Boranbayev(cardiologist)</option>
                <option>Zhangir Zhumaieva(allergist)</option>
                <option>Ulzhan Kasenova(Family physician)</option>
                <option>Gauhar Beisenova(gastroenterologist)</option>
                <option>Anuar Kaliev(plastic surgeon)</option>
              </select>
            </label>
       </div>
     </fieldset>
   </form>
   <h6>PEAK THE DATE</h6>
   <datepicker :format="customFormatter"></datepicker>
   <form class="uk-form">
    <input type="text" data-uk-datepicker="{format:'DD.MM.YYYY'}">
   </form>
   <h6>PEAK THE NEEDED TIME</h6>
 </center>
 <!-- <Footer /> -->
 </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import Navbar from "@/components/partials/Navbar1";
// import Footer from "@/components/partials/Footer"
export default {
  components: {
    Navbar,
    Datepicker
    // Footer
  },
  data() {
    return {

    }
  },
  methods: {
    customFormatter(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
