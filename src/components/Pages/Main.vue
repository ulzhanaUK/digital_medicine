<template>
  <div class="hello">
    <Navbar />
    <div uk-slideshow="animation: fade; autoplay: true; ratio: 8:3; autoplay-interval: 4000">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">

    <ul class="uk-slideshow-items">
        <li>
            <img src="../../assets/main1.jpg" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Welcome to our Polyclinic</h3>
                <p class="uk-margin-remove">
                  We are an independent, physician-led and physician-governed multispecialty medical group, working together to serve our patients with high quality, comprehensive care.</p>
            </div>
        </li>
        <li>
            <img src="../../assets/2.jpg" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Our Mission</h3>
                <p class="uk-margin-remove">To promote the health of our patients with personalized care.</p>
            </div>
        </li>
        <li>
            <img src="../../assets/3.jpg" alt="" uk-cover>
            <div class="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
                <h3 class="uk-margin-remove">Place, where Technology Meets Humanity.</h3>
                <p class="uk-margin-remove">
                  The Polyclinic embraces state-of-the-art technology, but we never forget the human side of health care.  As a Polyclinic patient, you’ll have access to:
                  My Chart – a convenient online tool that empowers you to be a better advocate for your family’s health.
                  My Chart offers the convenience and flexibility of access to your medical information, anytime.</p>
            </div>
        </li>
        <li>
            <img src="../../assets/main7.jpg" alt="Doctors" uk-cover>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">Best Doctors in Astana & Multispecialty, Patient-Focused Team.</h3>
                <p class="uk-margin-remove">
                  Think of The Polyclinic as a single doorway to your health care needs.
                  From pediatrics, family practice and internal medicine to specialist physicians and surgeons, The Polyclinic team works together with one goal in mind: what’s right for you.</p>
            </div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
    </div>
    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
   </div>
    <h1>{{ msg }}</h1>
   </div>
</template>

<script>
import axios from 'axios';
import Navbar from "@/components/partials/Navbar1"
export default {
  components: {
    Navbar
    // Footer
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'FlashDem'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slideshow .slides{
    display: block;
    margin:0 auto;
    max-width: 1600px;
    max-height: 600px;
}
</style>
