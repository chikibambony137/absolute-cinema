<script setup></script>

<template>
  <div class="root">
    <div class="aside">
      <nav>
        <ul>
          <h1>ABSOLUTE CINEMA</h1>

          <hr />
          <li>Главное меню</li>
          <hr />

          <li>Фильмы</li>
          <li>Билеты</li>
          <hr />

          <img src="./assets/cinemaBanner.png" alt="cinema-banner.png" />

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

<style scoped>
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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;

  width: 100%;
  padding: 3%;
  box-sizing: border-box;

  .film {
    display: flex;
    width: 250px;
    height: 350px;
    margin: 0 0px 40px 0px;
    background-color: #f8f8f8;
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.25); 
  }
}

hr {
  margin: 0;
}
</style>
