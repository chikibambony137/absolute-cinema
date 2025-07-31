<script setup></script>

<template>
  <div class="main">
    <div class="menu">
      <div class="logo-title menu__logo-title">
        <img class="logo-title__logo" src="./assets/logo.png" alt="logo.png" />
        <h1 class="logo-title__title">ABSOLUTE CINEMA</h1>
      </div>

      <div class="menu__nav">
        <ul>
          <div class="menu__outline">
            <li><a href="#">Главное меню</a></li>
          </div>

          <li>
            <div class="menu__films">
              <a href="#">Фильмы</a>
            </div>
          </li>

          <li>
            <div class="menu__tickets">
              <a href="#">Билеты</a>
            </div>
          </li>

          <div class="menu__outline">
            <li>
              <div class="banner menu__banner">
                <img
                  class="banner__img"
                  src="./assets/cinemaBanner.png"
                  alt="banner.png"
                />
              </div>
            </li>

            <li>
              <div class="menu__settings">
                <a href="#">Настройки</a>
              </div>
            </li>

            <li>
              <div class="menu__help">
                <a href="#">Помощь</a>
              </div>
            </li>
          </div>

          <li>
            <div class="user menu__user"><a href="#">Агасиев Саид</a></div>
          </li>
          <li>
            <div class="log-out menu__log-out">
              <button class="log-out__bttn">Выйти</button>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="content">
      <h2>Фильмы</h2>

      <div class="genres content__genres">
        <ul>
          <li>
            <label class="genres__checkbox-btn">
              <input type="checkbox" />
              <span>Комедия</span>
            </label>
          </li>
          <li>
            <label class="genres__checkbox-btn">
              <input type="checkbox" />
              <span>Драма</span>
            </label>
          </li>
          <li>
            <label class="genres__checkbox-btn">
              <input type="checkbox" />
              <span>Фантастика</span>
            </label>
          </li>
          <li>
            <label class="genres__checkbox-btn">
              <input type="checkbox" />
              <span>Триллер</span>
            </label>
          </li>
          <li>
            <label class="genres__checkbox-btn">
              <input type="checkbox" />
              <span>Фэнтези</span>
            </label>
          </li>
          <li>
            <label class="genres__checkbox-btn">
              <input type="checkbox" />
              <span>Мюзикл</span>
            </label>
          </li>
          <li>
            <label class="genres__checkbox-btn">
              <input type="checkbox" />
              <span>Боевик</span>
            </label>
          </li>
          <li>
            <label class="genres__checkbox-btn">
              <input type="checkbox" />
              <span>Хоррор</span>
            </label>
          </li>
        </ul>
      </div>

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
    justify-content: space-evenly;
    padding: 0;
    list-style-type: none;
    padding-left: 1vw;
    padding-right: 1.5vw;
  }

  .genres__checkbox-btn {
    display: inline-block;
    margin: 2%;
    user-select: none;
    position: relative;
  }
  .genres__checkbox-btn input[type="checkbox"] {
    z-index: -1;
    opacity: 0;
    display: block;
    width: 0;
    height: 0;
  }
  .genres__checkbox-btn span {
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
  .genres__checkbox-btn input[type="checkbox"]:checked + span {
    background: #fdc9ff;
  }

  /* Hover */
  .genres__checkbox-btn:hover {
    span {
      background-color: rgb(246, 246, 246);
    }
  }

  /* Active */
  .genres__checkbox-btn input[type="checkbox"]:active:not(:disabled) + span {
    background: #dedede;
    color: #000;
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

  .films__film {
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
</style>
