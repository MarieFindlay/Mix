<template>
    <div class="page">   
      <home-view v-if="currentView=='homeView'"
        :currentView="currentView"
        @currentViewWasUpdated="currentView = $event">
      </home-view>

      <div class="cocktailListView" v-if="currentView=='cocktailListView'">
        <page-header :currentView="currentView"
        @viewCocktailsWasSelected="currentView = $event"
        @viewShoppingListWasSelected="currentView = $event"
        ></page-header>
      
        <div class="cocktailListBody">
        <cocktail-list class="cocktailList" 
          :selectedCocktail="selectedCocktail"
          @cocktailWasUpdated="selectedCocktail = $event">
        </cocktail-list>
        <selected-cocktail-view class="selectedCocktailView" 
          v-if="selectedCocktail!==null" 
          :selectedCocktail="selectedCocktail" 
          :shoppingList="shoppingList"
          @shoppingListWasUpdated="shoppingList = $event">
        </selected-cocktail-view>
      </div>
      </div>
      
      <div v-if="currentView=='shoppingListView'">
        <page-header :currentView="currentView"
        @viewCocktailsWasSelected="currentView = $event"
        @viewShoppingListWasSelected="currentView = $event"
        @shoppingListWasCleared="shoppingList = null">
        </page-header>
        <shopping-list-view
        :shoppingList="shoppingList"
        @shoppingListWasCleared="shoppingList = null">
        </shopping-list-view>
      </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      currentView: "homeView",
      selectedCocktail: null,
      shoppingList: null
    };
  }
};
</script>

<style lang="scss">
@import "../src/styles/app.scss";
* {
  margin: 0px;
  background-color: $darkestNavy;
  font-family: $font6;
  font-weight: lighter;
}
.cocktailListBody {
  @include body;
  @include mobile {
    display: inline;
  }
}
.cocktailList {
  flex: 1;
}
.selectedCocktailView {
  flex: 2;
}
</style>





