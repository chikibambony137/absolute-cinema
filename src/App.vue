<script setup></script>

<template>
  <div class="root">
    <div class="aside">
      <h1>ABSOLUTE CINEMA</h1>
      <nav>
        <ul>
          

          <hr />
          <li>Главное меню</li>
          <hr />

          <li>Фильмы</li>
          <li>Билеты</li>
          <hr />

          <img id="cinema-banner" src="./assets/cinemaBanner.png" alt="cinema-banner.png" />

          <li>Настройки</li>
          <li>Помощь</li>
          <hr />

          <div class="user">Агасиев Саид</div>

          <button>Выйти</button>
        </ul>
      </nav>
    </div>

    <div class="main">
      <h2>Фильмы</h2>

      <hr />
      <div class="genres">
        <ul>
          <li>Комедия</li>
          <li>Драма</li>
          <li>Фантастика</li>
          <li>Триллер</li>
          <li>Фэнтези</li>
          <li>Мюзикл</li>
          <li>Боевик</li>
          <li>Хоррор</li>
        </ul>
      </div>
      <hr />

      <div class="films">
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
        <article class="film"></article>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";

$light-theme-background-color: #f8f8f8;

$dark-theme-film-background: rgb(43, 43, 43);
$dark-theme-text-color: white;



.genres ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  list-style-type: none;
  padding-left: 1vw;
  padding-right: 1.5vw;
}

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
  margin-top: 20px;

  .film {
    display: flex;

    width: 100%;
    min-width: 150px;
    max-width: 300px;

    height: 50vh;
    min-height: 400px;
    max-height: 500px;

    background-color: $light-theme-background-color;
    border-radius: 20px;
    box-shadow: $global-shadow-box;

    @media (prefers-color-scheme: dark) {
      background-color: $dark-theme-film-background;
      color: $dark-theme-text-color;
    }
  }
}

h1 {
  font-size: 2em;
  
  @media (max-width: 1024px) {
    font-size: 1.5em;
  }
}

hr {
  margin: 0;
}

#cinema-banner {
  @media (max-width: 1024px) {
    display: none;
  }
}
</style>
