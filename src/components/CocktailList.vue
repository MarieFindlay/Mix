<template>
    <div class="outerDiv">
        <ul
        v-for="(cocktail, index) in cocktails"
        style="cursor:pointer"
        @click="updateSelectedCocktail(cocktail)"
        :key="index"
        >
            <li :class="{active: isActive(cocktail)}">{{ cocktail.name.toUpperCase() }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ["selectedCocktail"],
  data: function() {
    return {
      cocktails: [
        {
          name: "Long Island Iced Tea",
          ingredients: [
            {
              name: "Vodka",
              amount: 0.5,
              unit: "oz"
            },
            {
              name: "Tequila",
              amount: 0.5,
              unit: "oz"
            },
            {
              name: "Light rum",
              amount: 0.5,
              unit: "oz"
            },
            {
              name: "Gin",
              amount: 0.5,
              unit: "oz"
            },
            {
              name: "Coca cola",
              amount: 1,
              unit: "dashes"
            },
            {
              name: "Lemon peel",
              amount: 1,
              unit: "twists"
            }
          ],
          instructions: ["Mix ingredients together"]
        },
        {
          name: "Daiquiri",
          ingredients: [
            {
              name: "Light rum",
              amount: 0.5,
              unit: "oz"
            },
            {
              name: "Lime juice",
              amount: 0.5,
              unit: "limes"
            },
            {
              name: "Powdered sugar",
              amount: 1,
              unit: "tsp"
            }
          ],
          instructions: [
            "Pour all ingredients into shaker with ice cubes",
            "Shake well",
            "Strain in chilled cocktail glass"
          ]
        },
        {
          name: "Espresso Martini",
          ingredients: [
            {
              name: "Vodka",
              amount: 1.75,
              unit: "oz"
            },
            {
              name: "Kahlua",
              amount: 0.35,
              unit: "oz"
            },
            {
              name: "Sugar syrup",
              amount: 1,
              unit: "dashes"
            }
          ]
        },
        {
          name: "Old Fashioned",
          ingredients: [
            {
              name: "Bourbon",
              amount: 45,
              unit: "ml"
            },
            {
              name: "Angostura bitters",
              amount: 2,
              unit: "dashes"
            },
            {
              name: "Sugar cube",
              amount: 1,
              unit: "cubes"
            },
            {
              name: "Water",
              amount: 1,
              unit: "dashes"
            },
            {
              name: "Orange peel",
              amount: 1,
              unit: "twists"
            },
            {
              name: "Cocktail cherry",
              amount: 1,
              unit: "cherries"
            }
          ],
          instructions: [
            "Place sugar cube in old fashioned glass and saturate with bitters",
            "Add a dash of plain water",
            "Muddle until dissolved",
            "Fill the glass with ice cubes and add whiskey",
            "Garnish with orange twist, and a cocktail cherry"
          ]
        },
        {
          name: "Negroni",
          ingredients: [
            {
              name: "Gin",
              amount: 1,
              unit: "oz"
            },
            {
              name: "Campari",
              amount: 1,
              unit: "oz"
            },
            {
              name: "Sweet vermouth",
              amount: 1,
              unit: "oz"
            }
          ],
          instructions: ["Stir into glass over ice, garnish and serve"]
        },
        {
          name: "Whiskey Sour",
          ingredients: [
            {
              name: "Blended bourbon",
              amount: 2,
              unit: "oz"
            },
            {
              name: "Lemon juice",
              amount: 0.5,
              unit: "lemons"
            },
            {
              name: "Powdered sugar",
              amount: 0.5,
              unit: "tsp"
            },
            {
              name: "Cocktail cherry",
              amount: 1,
              unit: "cherries"
            },
            {
              name: "Lemon slice",
              amount: 1,
              unit: "slice"
            }
          ],
          instructions: [
            "Shake with ice",
            "Strain into chilled glass, garnish and serve",
            "If served on the rocks, strain ingredients into old-fashioned glass filled with ice"
          ]
        },
        {
          name: "Margarita",
          ingredients: [
            {
              name: "Tequila",
              amount: 1.5,
              unit: "oz"
            },
            {
              name: "Triple sec",
              amount: 0.5,
              unit: "oz"
            },
            {
              name: "Lime juice",
              amount: 0.3,
              unit: "limes"
            },
            {
              name: "Salt",
              amount: 1,
              unit: "dashes"
            }
          ],
          instructions: [
            "Rub the rim of the glass with the lime slice to make the salt stick to it",
            "Take care to moisten only the outer rim and sprinkle the salt on it",
            "The salt should present to the lips of the imbiber and never mix into the cocktail",
            "Shake the other ingredients with ice, then carefully pour into the glass"
          ]
        },
        {
          name: "Manhattan",
          ingredients: [
            {
              name: "Sweet vermouth",
              amount: 0.75,
              unit: "oz"
            },
            {
              name: "Blended bourbon",
              amount: 2.5,
              unit: "oz"
            },
            {
              name: "Angostura bitters",
              amount: 1,
              unit: "dashes"
            },
            {
              name: "Ice",
              amount: 3,
              unit: "cubes"
            },
            {
              name: "Cocktail cherry",
              amount: 1,
              unit: "cherries"
            },
            {
              name: "Orange peel",
              amount: 1,
              unit: "twists"
            }
          ],
          instructions: [
            "Stir over ice",
            "Strained into a chilled glass",
            "Garnish and serve up"
          ]
        },
        {
          name: "Moscow Mule",
          ingredients: [
            {
              name: "Vodka",
              amount: 2,
              unit: "oz"
            },
            {
              name: "Lime juice",
              amount: 2,
              unit: "oz"
            },
            {
              name: "Ginger ale",
              amount: 8,
              unit: "oz"
            }
          ],
          instructions: [
            "Combine vodka and ginger beer in a highball glass filled with ice",
            "Add lime juice",
            "Stir gently",
            "Garnish"
          ]
        },
        {
          name: "Mojito",
          ingredients: [
            {
              name: "Light rum",
              amount: 3,
              unit: "oz"
            },
            {
              name: "Lime juice",
              amount: 1,
              unit: "limes"
            },
            {
              name: "Powdered sugar",
              amount: 2,
              unit: "tsp"
            },
            {
              name: "Mint",
              amount: 3,
              unit: "leaves"
            },
            {
              name: "Soda water",
              amount: 1,
              unit: "dashes"
            }
          ]
        }
      ]
    };
  },
  methods: {
    updateSelectedCocktail(cocktail) {
      this.$emit("cocktailWasUpdated", cocktail);
    },
    isActive(cocktail) {
      if (this.selectedCocktail == cocktail) {
        return true;
      } else return false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../masterglass2/src/styles/app.scss";

.outerDiv {
  color: $lilac;
}
.active {
  @include button(250px, 40px, $yellow, 20px);
  padding-bottom: 5px;
  padding-left: 10px;
  margin-left: 0px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  @include h3;
  line-height: 50px;
  vertical-align: top;
}
</style>


