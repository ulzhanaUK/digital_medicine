<template>
 <div class="uk-position-relative">
 <Navbar />
 <center>
 <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
  <h2 style="font-weight: bold">Add the new Appointment</h2>
  <h6>1) CHOOSE THE DOCTOR</h6>
  <form>
    <fieldset class="uk-fieldset">
      <div class="uk-grid-small uk-child-width-auto ">
            <label><input class="uk-radio" type="radio" name="radio2" checked> My Doctor</label>
            <label><input class="uk-radio" type="radio" name="radio2">
              <select class="uk-select uk-width-1-3@m">
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
   <h6>2) PEAK THE DATE</h6>
  <div style="display: flex; justify-content: center"><datepicker :format="customFormatter"></datepicker></div>
   <h6>3) PEAK THE NEEDED TIME</h6>
   <div class="uk-width-1-2@m"><table class="uk-table uk-table-hover uk-table-divider">
    <thead>
        <tr>
            <th>№</th>
            <th>Time</th>
            <th>UIN</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>9:00-9:30</td>
            <td>010213521025</td>
        </tr>
        <tr>
            <td>2</td>
            <td>9:30-10:00</td>
            <td>121216435125</td>
        </tr>
        <tr>
            <td style="background-color: green">3</td>
            <td style="background-color: green">10:00-10:30</td>
            <td></td>
        </tr>
        <tr>
            <td>4</td>
            <td>10:30-11:00</td>
            <td>970524126443</td>
        </tr>
        <tr>
            <td>5</td>
            <td>11:00-11:30</td>
            <td>640919546123</td>
        </tr>
        <tr>
            <td style="background-color: green">6</td>
            <td style="background-color: green">11:30-12:00</td>
            <td></td>
        </tr>
        <tr>
            <td style="background-color: green">7</td>
            <td style="background-color: green">12:00-12:30</td>
            <td></td>
        </tr>
        <tr>
            <td>8</td>
            <td>12:30-13:00</td>
            <td>651119541346</td>
        </tr>
        <tr>
            <td>9</td>
            <td>13:00-13:30</td>
            <td>670618549812</td>
        </tr>
        <tr>
            <td style="background-color: green">10</td>
            <td style="background-color: green">13:30-14:00</td>
            <td></td>
        </tr>
    </tbody>
</table>
</div>
<button class="uk-width-1-2 uk-button uk-button-primary uk-button-large">Log in</button>
</div>
</center>
 <!-- <Footer /> -->
 </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import moment from 'moment'
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
      return moment(date).format('MMMM Do YYYY');
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
