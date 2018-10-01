<template>
    <div class="outerDiv">
        <div class="header">
            <div class="my">
                <h2>MY</h2>
            </div>
            <h2>{{ title }}</h2>
        </div>
        <div class="nav">
            <h3 @click="viewCocktails">
                COCKTAILS
            </h3>
            <h3 @click="viewShoppingList">
                SHOPPING LIST
            </h3>
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
  @include mobile {
    margin: 20px 20px 20px 20px;
    display: inline;
  }
}
.header {
  border-bottom: solid 1px $lilac;
  margin-top: -20px;
  @include mobile {
    display: flex;
    border-bottom: none;
    margin-left: 30px;
    margin-bottom: -10px;
  }
}
.nav {
  display: flex;
  @include mobile {
    display: inline;
  }
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
  cursor: pointer;
  font-family: $font5;
  font-size: 22px;
  letter-spacing: 2px;
  @include mobile {
    margin-left: 30px;
    margin-bottom: 10px;
  }
}
.my {
  display: flex;
  margin-bottom: -30px;
  @include mobile {
    margin-right: 10px;
  }
}
img {
  height: 54px;
  margin-top: 11px;
  margin-left: -4px;
}
</style>

<script>
export default {
  props: ["currentView"],
  data: function() {
    return {
      currentViewLocal: this.currentView,
      title: "MIX"
    };
  },
  methods: {
    viewCocktails() {
      this.currentViewLocal = "cocktailListView";
      this.$emit("viewCocktailsWasSelected", this.currentViewLocal);
    },
    viewShoppingList() {
      this.currentViewLocal = "shoppingListView";
      this.$emit("viewShoppingListWasSelected", this.currentViewLocal);
    }
  }
};
</script>

