<template>
    <div class="outerDiv">
        <div class="content">
            <div class="instructions">
                <h3>INSTRUCTIONS</h3>
                <ol v-for="(instruction, index) in selectedCocktail.instructions" :key="index">
                {{index + 1 }}. {{ instruction }}
                </ol>
            </div>
            <div class="ingredients">
                <h3>INGREDIENTS</h3>
                <table v-for="(ingredient, index) in selectedCocktail.ingredients" :key="index">
                    <tr>
                        <td class="col-1">{{ ingredient.name.toUpperCase() }}</td>
                        <td class="col-2">{{ convertOzToMl(ingredient.amount, ingredient.unit) }} {{ pluraliseUnit(ingredient.amount, ingredient.unit)}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="userInput">
            <input v-model="servings" placeholder="NUMBER OF SERVINGS" type="number">
            <button @click="addToShoppingList(shoppingList, selectedCocktail.name, selectedCocktail.ingredients)">
                ADD TO SHOPPING LIST
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../masterglass2/src/styles/app.scss";
.outerDiv {
  display: flex;
  flex-direction: column;
  color: $lilac;
  height: 500px;
  border-right: $darkNavy solid 1px;
  border-bottom: $darkNavy solid 1px;
  @include mobile {
    display: inline;
    border: none;
  }
}
.content {
  display: flex;
  height: 500px;
  @include mobile {
    display: inline;
  }
}
.instructions {
  flex: 1;
  ol {
    padding: 0px;
    margin: 0px 50px 15px 0px;
    line-height: 25px;
    @include mobile {
      font-size: 15px;
      margin-bottom: 7px;
    }
  }
  @include mobile {
    margin-left: 40px;
    margin-top: 10px;
    width: 260px;
  }
}
h3 {
  @include h3;
  line-height: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid $lilac;
  width: 133px;
}
.ingredients {
  flex: 1;
  @include mobile {
    margin-left: 40px;
    margin-bottom: 30px;
  }
}
table {
  table-layout: fixed;
  width: 100%;
}
tr {
  line-height: 25px;
  @include mobile {
    line-height: 23px;
  }
}
.userInput {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  @include mobile {
    display: inline;
    margin-left: 30px;
  }
}
input {
  @include button(248px, 50px, #fffdd3, 17px);
  text-align: center;
  cursor: text;
  color: $darkNavy;
  margin-right: -1px;
  border-radius: 1px 7px 0px 0px;
  @include mobile {
    height: 30px;
    font-size: 15px;
    width: 258px;
  }
}
input:focus,
text-area:focus {
  outline-style: none;
}
button {
  @include defaultButton;
  margin-right: -1px;
  margin-bottom: 0px;
  outline-style: none;
  border-radius: 0px 0px 1px 7px;
  @include mobile {
    margin-left: 30px;
    height: 30px;
    font-size: 15px;
    width: 260px;
    margin-bottom: 30px;
  }
}
</style>

<script>
export default {
  props: ["selectedCocktail", "shoppingList"],
  data: function() {
    return {
      servings: null
    };
  },
  methods: {
    addToShoppingList(shoppingList, cocktailName, ingredients) {
      if (shoppingList === null) {
        shoppingList = {};
      }
      ingredients.forEach(ingredient => {
        if (shoppingList.hasOwnProperty(ingredient.name)) {
          shoppingList[ingredient.name].amount +=
            this.servings * ingredient.amount;
        } else {
          shoppingList[ingredient.name] = {};
          shoppingList[ingredient.name].amount =
            this.servings * ingredient.amount;
          shoppingList[ingredient.name].unit = ingredient.unit;
        }
      });
      console.log("shoppingList: ", shoppingList);
      this.$emit("shoppingListWasUpdated", shoppingList);
    },
    pluraliseUnit(amount, unit) {
      if (unit == "dash") {
        if (amount == 1) {
          return "dash";
        } else return "dashes";
      } else if (unit == "twist") {
        if (amount == 1) {
          return "twist";
        } else return "twists";
      } else if (unit == "lime") {
        if (amount == 1) {
          return "lime";
        } else return "limes";
      } else if (unit == "tsp") {
        if (amount == 1) {
          return "tsp";
        } else return "tsps";
      } else if (unit == "cube") {
        if (amount == 1) {
          return "cube";
        } else return "cubes";
      } else if (unit == "cherry") {
        if (amount == 1) {
          return "cherry";
        } else return "cherries";
      } else if (unit == "lemon") {
        if (amount == 1) {
          return "lemon";
        } else return "lemons";
      } else if (unit == "slice") {
        if (amount == 1) {
          return "slice";
        } else return "slices";
      } else if (unit == "leaf") {
        if (amount == 1) {
          return "leaf";
        } else return "leaves";
      } else if (unit == "oz") {
        return "ml";
      } else if (unit == "drop") {
        if (amount == 1) {
          return "drop";
        } else return "drops";
      } else return unit;
    },
    convertOzToMl(amount, unit) {
      if (unit == "oz") {
        return amount * 30;
      } else return amount;
    }
  }
};
</script>

