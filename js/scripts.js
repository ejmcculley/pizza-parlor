function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.pizzaPrice = function() { 
  this.price = parseInt(pizzaSizeValue) + parseInt(firstToppingValue) + parseInt(secondToppingValue) + parseInt(thirdToppingValue);
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
  $("#addPizza").submit(function(event) {
    event.preventDefault();
    let pizzaSize = $("#size option:selected").text();
    let firstTopping = $("#toppingOne option:selected").text();
    let secondTopping = $("#toppingTwo option:selected").text();
    let thirdTopping = $("#toppingThree option:selected").text();
    let pizzaSizeValue = $("#size").val();
    let firstToppingValue = $("#toppingOne").val();
    let secondToppingValue = $("#toppingTwo").val();
    let thirdToppingValue = $("toppingThree").val();

    let myPizza = new Pizza(pizzaSize, [firstTopping, secondTopping, thirdTopping], price);

    $("myPizzaSummary").text(myPizza);
  })  
});

