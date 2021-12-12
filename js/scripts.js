function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

let myPizza = new Pizza(["Soppressata", "Mama Lil's Peppers"], "16 inch", 22);

function priceSum() { 
  let total = pizzaSize + firstTopping + secondTopping + thirdTopping
  return total;
  }

$(document).ready(function() {
  $("#orderOnline").onClick(function(event) {
    event.preventDefault();
    $("#order").show();
    $("#home").hide();
    let pizzaSize = $("#size :selected").val();
    let firstTopping = $("#toppingOne :selected").val();
    let secondTopping = $("#toppingTwo :selected").val();
    let thirdTopping = $("#toppingThree :selected").val();
  })
});