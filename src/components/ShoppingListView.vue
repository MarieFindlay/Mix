<template>
<div class="outerDiv">
    <p v-if="shoppingList==null">Your shopping list is empty. </br>View cocktails to start adding ingredients.</p>
    <div v-else class="content">
        <h3>YOU NEED</h3>
        <div class="tableWrapper">
        <table
        v-for="(item, key, index) in shoppingList"
        :key="index">
        <tr><td>{{ key.toUpperCase() }}</td><td class="col-2">{{ item.amount }} {{ item.unit }}</td></tr>
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
}
.content {
  flex: 2;
  border-left: 2px solid $darkNavy;
  border-bottom: 2px solid $darkNavy;
  padding-left: 50px;
}
.button-col {
  flex: 1;
  height: 500px;
  display: flex;
}
button {
  @include button(250px, 40px, $yellow, 15px);
  margin-bottom: 0px;
  margin-right: 0px;
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
  border-radius: 2px;
}
</style>