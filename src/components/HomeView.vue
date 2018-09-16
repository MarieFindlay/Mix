<template>
<div class="outerDiv">
    <h1>MIX</h1>
    <h4>COCKTAIL CALCULATOR</h4>
    <img :src="icon">
    <button @click="updateCurrentView">PICK YOUR POISONS</button>
</div>
</template>

<script>
import image from "/Users/macuser/Documents/masterglass2/src/assets/cocktail.png";
export default {
  props: ["currentView"],
  data: function() {
    return {
      currentViewLocal: this.currentView,
      icon: image
    };
  },
  methods: {
    updateCurrentView() {
      this.currentViewLocal = "cocktailListView";
      console.log(this.currentViewLocal);
      this.$emit("currentViewWasUpdated", this.currentViewLocal);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../masterglass2/src/styles/app.scss";

* {
  color: $lilac;
}
.outerDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1 {
  margin-top: 5%;
  text-align: center;
  font-size: 12rem;
  letter-spacing: 0.4rem;
  font-family: $font5;
  margin-bottom: -50px;
}
h4 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  letter-spacing: 1px;
}
img {
  margin: auto;
  padding-left: 60px;
  width: 300px;
  height: 300px;
  margin-top: 10px;
  margin-bottom: 40px;
}
button {
  @include button(400px, 60px, $lilac, 25px);
  margin-bottom: 5%;
}
</style>





