function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

let myPizza = new Pizza(["Soppressata", "Mama Lil's Peppers"], "16 inch", 22);

// let price = priceSum() {
//   let sum = dropdownInput1 + dropdownInput2 + dropdownInput3 + dropdownInput4;
//   return "$" + sum;
// }

// use dropdown selectors to fill toppings, size, and value from selectors get added to priceSum();