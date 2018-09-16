import Vue from "vue";
import App from "./App.vue";
import PageHeader from "./components/PageHeader.vue";
import HomeView from "./components/HomeView";
import CocktailList from "./components/CocktailList";
import SelectedCocktailView from "./components/SelectedCocktailView";
import ShoppingListView from "./components/ShoppingListView.vue";

Vue.component("page-header", PageHeader);
Vue.component("home-view", HomeView);
Vue.component("cocktail-list", CocktailList);
Vue.component("selected-cocktail-view", SelectedCocktailView);
Vue.component("shopping-list-view", ShoppingListView);

new Vue({
  el: "#app",
  render: h => h(App)
});
