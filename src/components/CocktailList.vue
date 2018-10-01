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
export default {
  props: ["selectedCocktail"],
  data: function() {
    return {
      search: null,
      currentPage: 0,
      size: 8,
      nextButtonActive: false,
      previousButtonActive: true,
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
              unit: "dash"
            },
            {
              name: "Lemon peel",
              amount: 1,
              unit: "twist"
            }
          ],
          instructions: [
            "Mix all contents in a highball glass and sitr gently",
            "Add dash of Coca-Cola for the coloring",
            "Garnish with lemon or lime twist"
          ]
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
              unit: "lime"
            },
            {
              name: "granulated sugar",
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
              unit: "dash"
            }
          ],
          instructions: [
            "Pour ingredients into shaker filled with ice",
            "Shake vigorously",
            "Strain into chilled martini glass"
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
              unit: "dash"
            },
            {
              name: "Sugar cube",
              amount: 1,
              unit: "cube"
            },
            {
              name: "Water",
              amount: 1,
              unit: "dash"
            },
            {
              name: "Orange peel",
              amount: 1,
              unit: "twist"
            },
            {
              name: "Cocktail cherry",
              amount: 1,
              unit: "cherry"
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
              unit: "lemon"
            },
            {
              name: "granulated sugar",
              amount: 0.5,
              unit: "tsp"
            },
            {
              name: "Cocktail cherry",
              amount: 1,
              unit: "cherry"
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
              unit: "lime"
            },
            {
              name: "Salt",
              amount: 1,
              unit: "dash"
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
              unit: "dash"
            },
            {
              name: "Ice",
              amount: 3,
              unit: "cube"
            },
            {
              name: "Cocktail cherry",
              amount: 1,
              unit: "cherry"
            },
            {
              name: "Orange peel",
              amount: 1,
              unit: "twist"
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
              unit: "lime"
            },
            {
              name: "granulated sugar",
              amount: 2,
              unit: "tsp"
            },
            {
              name: "Mint",
              amount: 3,
              unit: "leaf"
            },
            {
              name: "Soda water",
              amount: 1,
              unit: "dash"
            }
          ],
          instructions: [
            "Muddle mint leaves with sugar and lime juice",
            "Add a splash of soda water and fill the glass with cracked ice",
            "Pour the rum and top with soda water",
            "Garnish and serve with straw"
          ]
        },
        {
          name: "Boulevardier",
          ingredients: [
            {
              name: "Campari",
              amount: 1,
              unit: "oz"
            },
            {
              name: "Sweet vermouth",
              amount: 1,
              unit: "oz"
            },
            {
              name: "Rye whiskey",
              amount: 1.25,
              unit: "oz"
            },
            {
              name: "Orange peel",
              amount: 1,
              unit: "twist"
            }
          ],
          instructions: ["Stir with ice, strain, garnish and serve"]
        },
        {
          name: "Sazerac",
          ingredients: [
            {
              name: "Ricard",
              amount: 1,
              unit: "tsp"
            },
            {
              name: "granulated sugar",
              amount: 1,
              unit: "tsp"
            },
            {
              name: "Peychaud bitters",
              amount: 2,
              unit: "dash"
            },
            {
              name: "Water",
              amount: 2,
              unit: "oz"
            },
            {
              name: "Bourbon",
              amount: 2,
              unit: "oz"
            },
            {
              name: "Lemon peel",
              amount: 1,
              unit: "twist"
            }
          ],
          instructions: [
            "Rinse a chilled old-fashioned glass with the absinthe, add crushed ice, and set it aside",
            "Stir the remaining ingredients over ice and set it aside",
            "Discard the ice and any excess absinthe from the prepared glass, and strain the drink into the glass",
            "Add the lemon peel for garnish"
          ]
        },
        {
          name: "Bloody Mary",
          ingredients: [
            {
              name: "Vodka",
              amount: 1.5,
              unit: "oz"
            },
            {
              name: "Tomato juice",
              amount: 3,
              unit: "oz"
            },
            {
              name: "Lemon juice",
              amount: 1,
              unit: "dash"
            },
            {
              name: "Worcestershire sauce",
              amount: 0.5,
              unit: "tsp"
            },
            {
              name: "Tabasco sauce",
              amount: 3,
              unit: "drop"
            },
            {
              name: "Lime slice",
              amount: 1,
              unit: "slice"
            }
          ],
          instructions: [
            "Stirring gently, pour all ingredients into highball glass",
            "Garnish"
          ]
        },
        {
          name: "Penecillin",
          ingredients: [
            {
              name: "Blended scotch",
              amount: 2,
              unit: "oz"
            },
            {
              name: "Lemon juice",
              amount: 0.75,
              unit: "oz"
            },
            {
              name: "Honey syrup",
              amount: 2,
              unit: "tsp"
            },
            {
              name: "Ginger syrup",
              amount: 2,
              unit: "tsp"
            },
            {
              name: "Islay single malt scotch",
              amount: 0.25,
              unit: "oz"
            }
          ],
          instructions: [
            "Shake blended Scotch, lemon juice, honey syrup and ginger syrup with ice",
            "Strain over large ice in chilled rocks glass",
            "Float smoky Scotch on top (be sure to use a smoky Scotch such as an Islay single malt)",
            "Garnish with candied ginger"
          ]
        },
        {
          name: "Gin Fizz",
          ingredients: [
            {
              name: "Gin",
              amount: 2,
              unit: "oz"
            },
            {
              name: "Lemon juice",
              amount: 0.5,
              unit: "lemon"
            },
            {
              name: "granulated sugar",
              amount: 1,
              unit: "tsp"
            },
            {
              name: "Soda water",
              amount: 1,
              unit: "dash"
            }
          ],
          instructions: [
            "Shake all ingredients with ice cubes, except soda water",
            "Pour into glass",
            "Top with soda water"
          ]
        },
        {
          name: "Mai Tai",
          ingredients: [
            {
              name: "Light rum",
              amount: 1,
              unit: "oz"
            },
            {
              name: "Orgeat syrup",
              amount: 0.5,
              unit: "oz"
            },
            {
              name: "Triple sec",
              amount: 0.5,
              unit: "oz"
            },
            {
              name: "sweet and sour",
              amount: 1.5,
              unit: "oz"
            },
            {
              name: "cherry",
              amount: 1,
              unit: "cherry"
            }
          ],
          instructions: [
            "Shake all ingredients with ice",
            "Strain into glass",
            "Garnish and serve with straw"
          ]
        },
        {
          name: "Pisco Sour",
          ingredients: [
            {
              name: "Pisco",
              amount: 2,
              unit: "oz"
            },
            {
              name: "Lemon juice",
              amount: 1,
              unit: "oz"
            },
            {
              name: "Granulated sugar",
              amount: 6,
              unit: "tsp"
            }
          ],
          instructions: [
            "Vigorously shake and strain contents in a cocktail shaker with ice cubes",
            "Pour into glass and garnish with bitters"
          ]
        }
      ]
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


