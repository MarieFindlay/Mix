<template>
    <div class="page">   
      <home-view v-if="currentView==VIEW_NAMES.HOME"
        @currentViewWasUpdated="currentView = $event">
      </home-view>

      <div class="cocktailListView" v-if="currentView==VIEW_NAMES.COCKTAIL_LIST">
        <page-header 
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
      
      <div v-if="currentView==VIEW_NAMES.SHOPPING_LIST">
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
import ShoppingListView from "./components/ShoppingListView.vue";
import PageHeader from "./components/PageHeader.vue";
import HomeView from "./components/HomeView";
import CocktailList from "./components/CocktailList";
import SelectedCocktailView from "./components/SelectedCocktailView";
import VIEW_NAMES from "./constants/viewNames";

export default {
  components: {
    "shopping-list-view": ShoppingListView,
    "page-header": PageHeader,
    "home-view": HomeView,
    "cocktail-list": CocktailList,
    "selected-cocktail-view": SelectedCocktailView
  },
  data: function() {
    return {
      VIEW_NAMES,
      currentView: VIEW_NAMES.HOME,
      selectedCocktail: null,
      shoppingList: null
    };
  },
  methods: {
    viewCocktailsList() {
      this.currentView = VIEW_NAMES.COCKTAIL_LIST;
    }
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





