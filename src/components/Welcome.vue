<template>
  <h1>Добро пожаловать!</h1>
  <SwitchThemeButton/> <br/><br/><br/><br/>
  <Volume/>
  <CreditsBttn/>
  <BuyTicketsBttn/>
</template>

<script>
import SwitchThemeButton from "./SwitchThemeBttn.vue";
import Volume from "./Volume.vue";
import CreditsBttn from "./CreditsBttn.vue";
import BuyTicketsBttn from "./BuyTicketsBttn.vue";

export default {
  components: { SwitchThemeButton, Volume, CreditsBttn, BuyTicketsBttn },
};
</script>

<style lang="scss" scoped>

</style>
