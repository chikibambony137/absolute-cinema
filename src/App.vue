<script setup></script>

<template>
  <div class="root">
    <div class="aside">
      <div class="logo-div">
        <img class="logo-img" src="./assets/logo.png" alt="logo.png" />
        <h1>ABSOLUTE CINEMA</h1>
      </div>

      <nav>
        <ul>
          <div
            style="
              border-top: 1px solid #d5d5d5;
              border-bottom: 1px solid #d5d5d5;
            "
          >
            <li><a href="#">Главное меню</a></li>
          </div>

          <li><a href="#">Фильмы</a></li>
          <li><a href="#">Билеты</a></li>

          <div
            style="
              border-top: 1px solid #d5d5d5;
              border-bottom: 1px solid #d5d5d5;
            "
          >
            <li>
              <img
                class="cinema-banner"
                src="./assets/cinemaBanner.png"
                alt="cinema-banner.png"
              />
            </li>
            <li><a href="#">Настройки</a></li>
            <li><a href="#">Помощь</a></li>
          </div>

          <li>
            <div class="user"><a href="#">Агасиев Саид</a></div>
          </li>
          <li><button>Выйти</button></li>
        </ul>
      </nav>
    </div>

    <div class="main">
      <h2>Фильмы</h2>

      <div class="genres">
        <ul>
          <li>
            <label class="checkbox-btn">
              <input type="checkbox" />
              <span>Комедия</span>
            </label>
          </li>
          <li>
            <label class="checkbox-btn">
              <input type="checkbox" />
              <span>Драма</span>
            </label>
          </li>
          <li>
            <label class="checkbox-btn">
              <input type="checkbox" />
              <span>Фантастика</span>
            </label>
          </li>
          <li>
            <label class="checkbox-btn">
              <input type="checkbox" />
              <span>Триллер</span>
            </label>
          </li>
          <li>
            <label class="checkbox-btn">
              <input type="checkbox" />
              <span>Фэнтези</span>
            </label>
          </li>
          <li>
            <label class="checkbox-btn">
              <input type="checkbox" />
              <span>Мюзикл</span>
            </label>
          </li>
          <li>
            <label class="checkbox-btn">
              <input type="checkbox" />
              <span>Боевик</span>
            </label>
          </li>
          <li>
            <label class="checkbox-btn">
              <input type="checkbox" />
              <span>Хоррор</span>
            </label>
          </li>
        </ul>
      </div>

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

.genres {
  border: {
    top: 1px solid #d5d5d5;
    bottom: 1px solid #d5d5d5;
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-evenly;
    padding: 0;
    list-style-type: none;
    padding-left: 1vw;
    padding-right: 1.5vw;
  }
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
  margin-top: 1dvh;

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

.logo-div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;

  .logo-img {
    width: 3rem;
    height: 3rem;
  }

  h1 {
    font-size: 1.2rem;
    margin: 0px;
  }
}

.cinema-banner {
  width: 100%;
}

.checkbox-btn {
  display: inline-block;
  margin: 2%;
  user-select: none;
  position: relative;
}
.checkbox-btn input[type="checkbox"] {
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
}
.checkbox-btn span {
  display: inline-block;
  cursor: pointer;
  padding: 0px 10px;
  line-height: 30px;
  transition: background 0.2s ease;

  box-shadow: $global-shadow-box;
  border-radius: 20px;
  font-size: 0.9rem;
}

/* Checked */
.checkbox-btn input[type="checkbox"]:checked + span {
  background: #FDC9FF;
}

/* Hover */
.checkbox-btn:hover {
  span {
    background-color: rgb(246, 246, 246);
  }
}

/* Active */
.checkbox-btn input[type=checkbox]:active:not(:disabled) + span {
	background: #dedede;
	color: #000;
}

</style>
