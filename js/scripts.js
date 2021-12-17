function Pizza(toppings, size, price) {
  this.toppings = toppings;
  this.size = size;
  this.price = price;
}

let myPizza = new Pizza(["Soppressata", "Mama Lil's Peppers"], "16 inch", 22);

function pizzaPrice() { 
  let total = parseInt(pizzaSizeValue) + parseInt(firstToppingValue) + parseInt(secondToppingValue) + parseInt(thirdToppingValue)
  return total;
  }

$(document).ready(function() {
  $("#enter").click(function() {
    $("#pickup").show();
    $("#home").hide();
  });
  $("#carry-out, #delivery").click(function() {
    $("#order").show();
    $("#pickup").hide();
  })
  $("#addPizza").click(function() {
    $("#summary").show();
    $("#order").hide();
  })
    let pizzaSize = $("#size option:selected").text();
    let firstTopping = $("#toppingOne option:selected").text();
    let secondTopping = $("#toppingTwo option:selected").text();
    let thirdTopping = $("#toppingThree option:selected").text();
    let pizzaSizeValue = $("#size").val();
    let firstToppingValue = $("#toppingOne").val();
    let secondToppingValue = $("#toppingTwo").val();
    let thirdToppingValue = $("toppingThree").val();
  });

