
<template>
  <div class="hero-content-block">
    <div class="row">
      <div
        class="
          hero-content-block__text-container
          col-xs-12 col-sm-6
          hero-content-block__text-container--black
        "
      >
        <div class="hero-content-block__text-container__inner-container">
          <div
            class="
              hero-content-block__text-container__inner-container__header-container
            "
          ></div>

          <div
            class="
              hero-content-block__text-container__inner-container__preamble-container
              tnse-editorial
            "
          >
            <p>
              <span class="font-h1-headline" style="color: #000000"
                >Gränslöst mycket festival
              </span>
            </p>
            <p>
              Glitter i fritidshuset, glamour hemma eller festivalyra på tåget?
              Ring, rösta och titta på dina favoriter överallt med
              <strong>obegränsad surf för 399 kr/mån</strong> i hela 12 månader.
              (Bindningstid 24 mån) Spara upp till 2 040 kronor.
            </p>
          </div>

          <div
            class="
              hero-content-block__text-container__inner-container__button-container
            "
          ></div>
        </div>
      </div>
      <div class="hero-content-block__media-container col-xs-12 col-sm-6">
        <img
          class="responsive-image responsive-image--loaded"
          data-image-quality="95"
          alt="Skaffa obegränsad surf för 399 kr"
          :src="heroImage?.backgroundImage?.url + '?w=670'"
        />
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import HeroImage from "../Models/HeroImage";
@Options({
  props: {
    heroImage: HeroImage,
  },
})
export default class HeroImageComponent extends Vue {
  heroImage!: HeroImage;
}
</script>

<style scoped>
.hero-content-block {
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
}
.hero-content-block__text-container {
  order: 1;
  max-width: 100%;
}
.hero-content-block__media-container {
  order: 2;
  max-width: 100%;
}
@media only screen and (min-width: 768px) {
  .hero-content-block__text-container__inner-container {
    padding-left: 30px;
    padding-top: 30px;
    color: #000000;
  }
}
@media only screen and (min-width: 992px) {
  .font-h1-headline,
  .tnse-editorial .font-h1-headline,
  .tnse-editorial .font-h1-headline p {
    font-size: 56px;
    line-height: 60px;
  }

  .font-h1-headline,
  .tnse-editorial .font-h1-headline,
  .tnse-editorial .font-h1-headline p {
    font-family: telenor-headline, arial, sans-serif;
    font-size: 36px;
    font-weight: 300;
    line-height: 38px;
    margin-bottom: 15px;
  }
}
</style>
