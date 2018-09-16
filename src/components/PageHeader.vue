<template>
<div class="outerDiv">
    <div class="header">
        <div class="my">
        <h2>M</h2>
        <img :src="icon">
        </div>
        <h2>{{ title }}</h2>
    </div>
    <div class="nav">
        <h3 style="cursor:pointer"
        @click="viewCocktails">
        VIEW COCKTAILS</h3>
        <h3 style="cursor:pointer"
        @click="viewShoppingList">
        VIEW SHOPPING LIST</h3>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "../masterglass2/src/styles/app.scss";
.outerDiv {
  color: $lilac;
  margin: $margin $margin 60px $margin;
  display: flex;
  justify-content: space-between;
}
.header {
  border-bottom: solid 1px $lilac;
}
.nav {
  display: flex;
}
h2 {
  font-size: 50px;
  letter-spacing: 0.15rem;
  line-height: 90px;
  font-family: $font5;
}
h3 {
  margin-left: 55px;
  @include h3;
  align-self: flex-end;
  margin-bottom: 15px;
}
img {
  height: 54px;
  margin-top: 11px;
  margin-left: -4px;
}
.my {
  display: flex;
  margin-bottom: -30px;
}
</style>

<script>
import image from "/Users/macuser/Documents/masterglass2/src/assets/cocktail.png";
export default {
  props: ["currentView"],
  data: function() {
    return {
      currentViewLocal: this.currentView,
      title: "COCKTAILS",
      icon: image
    };
  },
  methods: {
    viewCocktails() {
      this.currentViewLocal = "cocktailListView";
      this.title = "COCKTAILS";
      this.$emit("viewCocktailsWasSelected", this.currentViewLocal);
    },
    viewShoppingList() {
      this.currentViewLocal = "shoppingListView";
      this.title = "SHOPPING LIST";
      this.$emit("viewShoppingListWasSelected", this.currentViewLocal);
    }
  }
};
</script>

