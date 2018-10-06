<template>
    <div class="outerDiv">
        <h1>MIX</h1>
        <h4>COCKTAIL CALCULATOR</h4>
        <button @click="updateCurrentView">PICK YOUR POISON</button>
    </div>
</template>

<script>
import VIEW_NAMES from "../constants/viewNames";

export default {
  methods: {
    updateCurrentView() {
      this.$emit("currentViewWasUpdated", VIEW_NAMES.COCKTAIL_LIST);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../mix/src/styles/app.scss";
* {
  color: $lilac;
}
.outerDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1 {
  margin-top: 150px;
  text-align: center;
  font-size: 12rem;
  letter-spacing: 0.4rem;
  font-family: $font5;
  margin-bottom: -50px;
  @include mobile {
    font-size: 8rem;
    margin-top: 100px;
  }
}
h4 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  letter-spacing: 1px;
  @include mobile {
    font-size: 25px;
  }
}
img {
  margin: auto;
  padding-left: 60px;
  width: 300px;
  height: 300px;
  margin-top: 10px;
  margin-bottom: 40px;
  @include mobile {
    width: 180px;
    height: 180px;
    padding-left: 30px;
    margin-bottom: 20px;
  }
}
button {
  @include button(400px, 60px, $yellow, 25px);
  border-radius: 1px 7px 1px 7px;
  margin-bottom: 5%;
  @include mobile {
    width: 75%;
  }
}
</style>





