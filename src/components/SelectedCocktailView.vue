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
                <tr><td class="col-1">{{ ingredient.name.toUpperCase() }}</td><td class="col-2">{{ ingredient.amount }} {{ingredient.unit}}</td></tr>
                </table>
            </div>
        </div>
        <div class="userInput">
            <input v-model="servings" placeholder="NUMBER OF SERVINGS" type="number">
            <button @click="addToShoppingList(shoppingList, selectedCocktail.name, selectedCocktail.ingredients)">ADD TO SHOPPING LIST</button>
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
}
.content {
  display: flex;
  height: 500px;
}
.instructions {
  flex: 1;
  ol {
    padding: 0px;
    margin: 0px 50px 15px 0px;
    line-height: 25px;
  }
}
.ingredients {
  flex: 1;
}
table {
  table-layout: fixed;
  width: 100%;
}

tr {
  line-height: 25px;
}
.userInput {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
}
input {
  @include button(248px, 50px, #fffdd3, 17px);
  text-align: center;
  cursor: text;
  color: $darkNavy;
  margin-right: -1px;
  margin-bottom: -1px;
}
input:focus,
text-area:focus {
  outline-width: 0px;
}
button {
  @include button(250px, 50px, $yellow, 17px);
  margin-right: -1px;
  margin-bottom: 0px;
}
h3 {
  @include h3;
  line-height: 50px;
  margin-bottom: 20px;
  border-bottom: 1px solid $lilac;
  width: 133px;
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
    }
  }
};
</script>

