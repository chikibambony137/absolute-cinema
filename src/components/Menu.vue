<template>
  <div class="menu">
    <div class="logo-title menu__logo-title">
      <img class="logo-title__logo" src="../assets/logo.png" alt="logo.png" />
      <h1 class="logo-title__title">ABSOLUTE CINEMA</h1>
    </div>

    <div class="menu__nav">
      <ul>
        <li>
          <div class="menu__ref menu__ref--border">
            <a href="/">Главное меню</a>
          </div>
        </li>

        <li>
          <div class="menu__ref">
            <a href="/films">Фильмы</a>
          </div>
        </li>

        <li>
          <div class="menu__ref">
            <a href="/tickets">Билеты</a>
          </div>
        </li>

        <li>
          <div class="banner menu__banner">
            <img
              class="banner__img"
              src="../assets/cinemaBanner.png"
              alt="banner.png"
            />
          </div>
        </li>

        <li>
          <div class="menu__ref">
            <a href="/settings">Настройки</a>
          </div>
        </li>

        <li>
          <div class="menu__ref">
            <a href="/help">Помощь</a>
          </div>
        </li>

        <li>
          <div class="menu__ref"><a href="/user">Агасиев Саид</a></div>
        </li>
        <li>
          <div class="menu__log-out">
            <button class="menu__log-out-bttn">Выйти</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../var.scss";

.menu {
  background-color: $light-theme-block-background-color;
  width: 27%;
  height: 98dvh;

  box-sizing: border-box;
  border-radius: 0 20px 20px 0;
  padding: {
    top: 2vh;
    left: 1.5%;
    right: 1.5%;
  }

  box-shadow: $global-shadow-box;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;

  .menu__nav ul {
    padding: 0;
    list-style: none;

    .menu__ref {
      padding: {
        top: 1.5vh;
        bottom: 1.5vh;
      }
      width: 100%;

      a {
        color: $light-theme-text-color;
        text-decoration: none;

        @media (prefers-color-scheme: dark) {
          color: $dark-theme-text-color;
        }
      }
    }

    .menu__ref--border {
      border: {
        top: 1px solid #d5d5d5;
        bottom: 1px solid #d5d5d5;
      }
    }
  }

  .menu__ref:hover {
    background-color: $light-theme-menu-bttn-hover-color;

    @media (prefers-color-scheme: dark) {
      background-color: $dark-theme-menu-bttn-hover-color;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (prefers-color-scheme: dark) {
    background-color: $dark-theme-block-background-color;
    color: $dark-theme-text-color;
  }
}

.logo-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;

  .logo-title__logo {
    width: 3rem;
    height: 3rem;
  }

  .logo-title__title {
    font-size: 1.2rem;
    margin: 0px;
  }
}

.banner {
  .banner__img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
