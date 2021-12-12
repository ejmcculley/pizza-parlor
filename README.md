Test Specs:

Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["Soppressata", "Mama Lil's Peppers"], "16 inch");
Expected Output: Pizza {toppings: ["Soppressata", "Mama Lil's Peppers"], size: "16 inch" }

Test: "It should return a Pizza object with three properties for toppings, size, and price"
Code: const myPizza = new Pizza(["Soppressata", "Mama Lil's Peppers"], "16 inch", 22);
Expected Output: Pizza {toppings: ["Soppressata", "Mama Lil's Peppers"], "16 inch", 22 }

Test: "It should return a total for the property price"
Code: const myPizza = new Pizza(["Soppressata", "Mama Lil's Peppers"], "16 inch", priceSum())
Expected Output: Pizza {toppings: ["Soppressata", "Mama Lil's Peppers"], "16 inch", 22 }

Describe: priceSum()

Test: "It should take input values from size and toppings select menus and add them, and return the total"
Code: function priceSum() { 
  let total = inputValue#size + inputValue#toppingOne + inputValue#toppingTwo + inputValue#toppingThree
  return total;
  }
Expected Output: 22