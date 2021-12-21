function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.pizzaPrice = function(pizzaSizeValue, firstToppingValue, secondToppingValue, thirdToppingValue) { 
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
  $("#addPizza").click(function(event) {
    event.preventDefault();
    const pizzaSize = $("#size option:selected").text();
    const firstTopping = $("#toppingOne option:selected").text();
    const secondTopping = $("#toppingTwo option:selected").text();
    const thirdTopping = $("#toppingThree option:selected").text();
    const pizzaSizeValue = $("#size").val();
    const firstToppingValue = $("#toppingOne").val();
    const secondToppingValue = $("#toppingTwo").val();
    const thirdToppingValue = $("#toppingThree").val();

    let myPizza = new Pizza(pizzaSize, [firstTopping, secondTopping, thirdTopping]);
    myPizza.pizzaPrice(pizzaSizeValue, firstToppingValue, secondToppingValue, thirdToppingValue);
  
    $("span.myPizzaSummary").html(myPizza.price);
  })  
});

