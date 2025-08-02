<script>
import Menu from "./components/Menu.vue";

export default {
  components: { Menu },
};
</script>

<template>
  <div class="main">
    <Menu class="main__menu" />

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "var.scss";

.main {
  display: flex;
  flex-direction: row;
  overflow: hidden;

  gap: 1.5vw;
  padding: {
    top: 1.5vh;
    right: 1vw;
  }
  @media (max-width: 768px) {
    padding: {
      top: 1vh;
      left: 1vw
    };
  }
}

.content {
  background-color: $light-theme-block-background-color;
  width: 100%;
  min-width: 300px;
  height: 98dvh;

  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;

  box-sizing: border-box;
  border-radius: 20px;
  padding: {
    top: 1%;
    left: 2%;
    right: 2%;
    bottom: 1%;
  }

  box-shadow: $global-shadow-box;

  h2 {
    font-size: 1.3rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: $dark-theme-block-background-color;
    color: $dark-theme-text-color;
  }
}
</style>
