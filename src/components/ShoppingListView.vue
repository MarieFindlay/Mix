<template>
<div class="outerDiv">
    <p v-if="shoppingList==null">Your shopping list is empty.<br>View cocktails to start adding ingredients.</p>
    <div v-else class="content">
        <h3>YOU NEED</h3>
        <div class="tableWrapper">
          <table
          v-for="(item, key, index) in shoppingList"
          :key="index">
            <tr>
              <td>{{ key.toUpperCase() }}</td>
              <td class="col-2">{{ Math.round(item.amount * 10)/10 }} {{ pluraliseUnit( item.amount , item.unit) }}</td>
            </tr>
          </table>
        </div>
    </div>
  <div class="button-col">
    <button @click="clearShoppingList">CLEAR SHOPPING LIST</button>
  </div>
</div>
</template>

<script>
export default {
  props: ["shoppingList"],
  data: function() {
    return {};
  },
  methods: {
    clearShoppingList() {
      this.shoppingList = null;
      this.$emit("shoppingListWasClear", null);
    },
    isExpanded() {
      if (this.shoppingList.length > 5) {
        return true;
      } else return false;
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
      } else return unit;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../masterglass2/src/styles/app.scss";

.outerDiv {
  color: $lilac;
  display: flex;
  margin-left: $margin;
  margin-right: $margin;
  margin-bottom: $margin;
  @include mobile {
    margin: 0px;
    display: inline;
  }
}
.content {
  flex: 2;
  border-left: 2px solid $darkNavy;
  border-bottom: 2px solid $darkNavy;
  padding-left: 50px;
  @include mobile {
    padding-left: 30px;
    border: none;
  }
}
p {
  @include h3;
  line-height: 50px;
  margin-bottom: 15px;
}
h3 {
  @include h3;
  line-height: 50px;
  margin-top: -15px;
  margin-bottom: 20px;
  border-bottom: 1px solid $lilac;
  width: 101px;
}
table {
  background-color: $lilac;
  td {
    background-color: $lilac;
    color: $darkestNavy;
  }
  @include table;
}
.tableWrapper {
  width: 40%;
  margin-top: 30px;
  padding: 25px;
  background-color: $lilac;
  border-radius: 1px 7px 1px 7px;
  margin-bottom: 50px;
  @include mobile {
    width: 260px;
  }
}
.button-col {
  flex: 1;
  height: 500px;
  display: flex;
  @include mobile {
    display: none;
  }
}
button {
  @include defaultButton;
  margin-bottom: 0px;
  margin-right: 0px;
  border-radius: 1px 7px 1px 7px;
}
</style>