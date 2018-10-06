<template>
  <div class="outerDiv">
    <input v-model="search" placeholder="SEARCH" type="text">
    <ul
      v-for="(cocktail, index) in paginatedCocktails"
      style="cursor:pointer"
      @click="updateSelectedCocktail(cocktail)"
      :key="index">
        <li :class="{active: isActive(cocktail)}">{{ cocktail.name.toUpperCase() }}</li>
    </ul>
    <div class="previousNext">
      <button class="prev" :disabled="currentPage==0" @click="previousPage">PREVIOUS</button>
      <button class = "next" :disabled="currentPage >= numberOfPages" @click="nextPage">NEXT</button>
    </div>
  </div>
</template>

<script>
import cocktails from "../constants/cocktails";

export default {
  props: ["selectedCocktail"],
  data: function() {
    return {
      search: null,
      currentPage: 0,
      size: 8,
      nextButtonActive: false,
      previousButtonActive: true,
      cocktails
    };
  },
  computed: {
    sortedCocktails() {
      return this.cocktails.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    },
    filteredCocktails() {
      if (this.search == null) {
        return this.sortedCocktails;
      } else {
        return this.sortedCocktails.filter(cocktail => {
          return cocktail.name
            .toUpperCase()
            .startsWith(this.search.toUpperCase());
        });
      }
    },
    numberOfPages() {
      return Math.floor(this.filteredCocktails.length / this.size);
    },
    paginatedCocktails() {
      let start = this.currentPage * this.size;
      let end = start + this.size;
      return this.filteredCocktails.slice(start, end);
    }
  },
  methods: {
    updateSelectedCocktail(cocktail) {
      this.$emit("cocktailWasUpdated", cocktail);
    },
    isActive(cocktail) {
      if (this.selectedCocktail == cocktail) {
        return true;
      } else return false;
    },
    nextPage() {
      this.currentPage++;
    },
    previousPage() {
      this.currentPage--;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../masterglass2/src/styles/app.scss";
.outerDiv {
  color: $lilac;
  display: flex;
  flex-direction: column;
}
:disabled {
  background-color: $lightYellow;
  color: grey;
}
input {
  @include button(245px, 40px, $lightYellow, 17px);
  text-align: left;
  padding-left: 14px;
  cursor: text;
  margin-left: 0px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: $darkNavy;
  text-transform: uppercase;
  outline-style: none;
  border-radius: 1px 7px 1px 1px;
  @include mobile {
    margin-left: 30px;
    margin-top: -10px;
    height: 30px;
    font-size: 15px;
  }
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  @include mobile {
    margin-left: 30px;
  }
}
li {
  @include h3;
  line-height: 49px;
  vertical-align: top;
  padding-left: 10px;
  @include mobile {
    line-height: 30px;
    font-size: 15px;
  }
}
.active {
  @include button(250px, 35px, $yellow, 19px);
  padding-bottom: 10px;
  padding-top: 0px;
  padding-left: 10px;
  margin-left: 0px;
  border-radius: 1px 1px 1px 1px;
  @include mobile {
    padding-bottom: 0px;
    font-size: 17px;
    height: 30px;
  }
}
button {
  @include button(260px, 40px, $yellow, 17px);
  margin-top: 10px;
  width: 130px;
  margin-bottom: 0px;
  @include mobile {
    height: 30px;
    font-size: 15px;
    margin-left: 30px;
    width: 130px;
  }
}
.previousNext {
  margin-left: 0px;
}
.prev {
  border-radius: 1px 0px 0px 7px;
}
.next {
  margin-left: -4px;
  border-radius: 0px 1px 1px 0px;
}
</style>


