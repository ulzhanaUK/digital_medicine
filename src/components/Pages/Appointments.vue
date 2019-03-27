<template>
 <div class="uk-position-relative">
  <Navbar />
  <center>
  <div class="uk-column-1-3@s">
   <div style="display: inline">
    <div class="uk-card uk-margin uk-card-default uk-width-2-5@m">
     <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
       <div class="uk-width-auto">
          <img class="uk-border-circle" width="70" height="100" src="../../assets/doctor5.jpg">
       </div>
       <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">Andrey</h3>
          <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
       </div>
      </div>
     </div>
     <div class="uk-card-body">
        <p>Andrey Sokolov - Allergist. You checked your allergies state.</p>
     </div>
     <div class="uk-card-footer">
        <a href="#" class="uk-button uk-button-text">Read more</a>
     </div>
   </div>

   <div class="uk-card uk-margin uk-card-default uk-width-2-5@m">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
       <div class="uk-width-auto">
          <img class="uk-border-circle" width="70" height="100" src="../../assets/doctor2.png">
       </div>
       <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">Anna</h3>
          <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 21, 2016</time></p>
       </div>
      </div>
     </div>
     <div class="uk-card-body">
       <p>Anna Saken - Dermatologist. You had a consultation about your skin: you had problems with your skin.</p>
     </div>
     <div class="uk-card-footer">
       <a href="#" class="uk-button uk-button-text">Read more</a>
     </div>
   </div>
  </div>

  <div style="display: inline">
   <div class="uk-card uk-margin uk-card-default uk-width-2-5@m">
    <div class="uk-card-header">
     <div class="uk-grid-small uk-flex-middle" uk-grid>
      <div class="uk-width-auto">
         <img class="uk-border-circle" width="70" height="100" src="../../assets/doctor1.png">
      </div>
      <div class="uk-width-expand">
         <h3 class="uk-card-title uk-margin-remove-bottom">Asel</h3>
         <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">October 01, 2016</time></p>
      </div>
     </div>
    </div>
    <div class="uk-card-body">
       <p>Asel Kyirbayevna - Gastroenterologist. She’s a specialist in digestive organs. You had a gastritis.</p>
    </div>
    <div class="uk-card-footer">
       <a href="#" class="uk-button uk-button-text">Read more</a>
    </div>
  </div>

  <div class="uk-card uk-margin uk-card-default uk-width-2-5@m">
   <div class="uk-card-header">
     <div class="uk-grid-small uk-flex-middle" uk-grid>
      <div class="uk-width-auto">
         <img class="uk-border-circle" width="70" height="100" src="../../assets/doctor6.jpg">
      </div>
      <div class="uk-width-expand">
         <h3 class="uk-card-title uk-margin-remove-bottom">Abylay</h3>
         <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">July 05, 2017</time></p>
      </div>
     </div>
    </div>
    <div class="uk-card-body">
      <p>Abylay Saken - Nephrologist. You had high blood pressure. </p>
    </div>
    <div class="uk-card-footer">
      <a href="#" class="uk-button uk-button-text">Read more</a>
    </div>
  </div>
 </div>

 <div style="display: inline">
  <div class="uk-margin uk-card uk-card-default uk-width-2-5@m">
   <div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
     <div class="uk-width-auto">
        <img class="uk-border-circle" width="70" height="100" src="../../assets/doctor4.jpg">
     </div>
     <div class="uk-width-expand">
        <h3 class="uk-card-title uk-margin-remove-bottom">Alievs</h3>
        <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">January 21, 2018</time></p>
     </div>
    </div>
   </div>
   <div class="uk-card-body">
      <p>Anuar Aliev and Kamila Aliev are Family psychologists. You had problems with children.</p>
   </div>
   <div class="uk-card-footer">
      <a href="#" class="uk-button uk-button-text">Read more</a>
   </div>
 </div>

 <div class="uk-card uk-margin uk-card-default uk-width-2-5@m">
  <div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
     <div class="uk-width-auto">
        <img class="uk-border-circle" width="70" height="100" src="../../assets/doctor3.png">
     </div>
     <div class="uk-width-expand">
        <h3 class="uk-card-title uk-margin-remove-bottom">Farida</h3>
        <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">March 15, 2019</time></p>
     </div>
    </div>
   </div>
   <div class="uk-card-body">
     <p>Farida Zhumabayeva - dentist. She treated your teeth.</p>
   </div>
   <div class="uk-card-footer">
     <a href="#" class="uk-button uk-button-text">Read more</a>
   </div>
 </div>
</div>
</div>
<div class="uk-margin uk-card uk-card-default uk-card-body uk-width-1-5@m">
  <h4 >Add the new Appointment</h4>
  <a href="/#/addAppointment"><img width="70" height="100" src="../../assets/plus.png"></a></div>
 </center>
  <!-- <Footer /> -->
 </div>
</template>

<script>
import Navbar from "@/components/partials/Navbar1"
// import Footer from "@/components/partials/Footer"
export default {
  components: {
    Navbar
    // Footer
  },
  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
