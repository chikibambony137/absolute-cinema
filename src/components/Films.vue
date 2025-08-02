<template>
  <h2>Фильмы</h2>
  <Genres/>
  <div class="films content_films">
    <div class="films__film"></div>
    <div class="films__film"></div>
    <div class="films__film"></div>
    <div class="films__film"></div>
    <div class="films__film"></div>
    <div class="films__film"></div>
    <div class="films__film"></div>
    <div class="films__film"></div>
    <div class="films__film"></div>
    <div class="films__film"></div>
    <div class="films__film"></div>
    <div class="films__film"></div>
  </div>
</template>

<script>
import Genres from './Genres.vue';
export default {
  components: {Genres},
};
</script>

<style lang="scss" scoped>
@import "../style.scss";
@import "../var.scss";

.films {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 25px;

  place-items: center;

  width: 100%;
  max-height: none;

  padding: {
    top: 20px;
    bottom: 20px;
    left: 10px;
    right: 10px;
  }
  box-sizing: border-box;
  margin-top: 1dvh;

  .films__film {
    display: flex;

    width: 100%;
    min-width: 50px;
    max-width: 300px;

    height: 50vh;
    min-height: 400px;
    max-height: 500px;

    background-color: $light-theme-film-background;
    border-radius: 20px;
    box-shadow: $global-shadow-box;

    @media (prefers-color-scheme: dark) {
      background-color: $dark-theme-film-background;
      color: $dark-theme-text-color;
    }
  }
}
</style>
