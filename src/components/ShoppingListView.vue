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
              <td class="col-2">{{ roundConvertedAmount(item.amount, item.unit) }} {{ pluraliseUnit( item.amount, item.unit) }}</td>
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
import pluraliseUnit from "../functions/pluraliseUnit";
import convertAmountToMl from "../functions/convertAmount";

export default {
  props: ["shoppingList"],
  methods: {
    pluraliseUnit,
    roundConvertedAmount(amount, unit) {
      return Math.round(convertAmountToMl(amount, unit) * 10) / 10;
    },
    clearShoppingList() {
      this.shoppingList = null;
      this.$emit("shoppingListWasCleared", null);
    },
    isExpanded() {
      return this.shoppingList.length > 5;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../mix/src/styles/app.scss";

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