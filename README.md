# _pizza-parlor_

#### By _**Erin McCulley**_

#### _Beginners Web Development_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_
* _JQuery_
* _Markdown_
* _Git / Github_
* _Terminal_


## Description

_This is the object oriented javascript project for Epicodus. The purpose was to use javascript objects to creat a pizza parlor webiste that will allow you to build new pizza objects and calculate their total based on size and toppings selected_

## Setup/Installation Requirements

1. Click on the green "Code" button above this file list.
2. Copy the HTTPS link (this is the default option).
3. Open your local Terminal.
4. Navigate to the local directory where you want the cloned directory to go.
5. In your Terminal type "git clone" (without the quotes) then paste the URL you copied above. 
6. Press 'enter' and the cloned directory should be copied to your current working directory.
7. To view the HTML file (index.html), double click the file and the it will open in your web browser. 

## Specs

_Test Specs:_

_Describe: Pizza()_

_Test: "It should return a Pizza object with two properties for toppings and size"_
_Code: const myPizza = new Pizza(["Soppressata", "Mama Lil's Peppers"], "16 inch");_
_Expected Output: Pizza {toppings: ["Soppressata", "Mama Lil's Peppers"], size: "16 inch" }_

_Test: "It should return a Pizza object with three properties for toppings, size, and price"_
_Code: const myPizza = new Pizza(["Soppressata", "Mama Lil's Peppers"], "16 inch", 22);_
_Expected Output: Pizza {toppings: ["Soppressata", "Mama Lil's Peppers"], "16 inch", 22 }_

_Test: "It should return a total for the property price"_
_Code: const myPizza = new Pizza(["Soppressata", "Mama Lil's Peppers"], "16 inch", priceSum())_
_Expected Output: Pizza {toppings: ["Soppressata", "Mama Lil's Peppers"], "16 inch", 22 }_

_Describe: priceSum()_

_Test: "It should take input values from size and toppings select menus and add them, and return the total"_
_Code: function priceSum() {_ 
  _let total = inputValue#size + inputValue#toppingOne + inputValue#toppingTwo + inputValue#toppingThree_
  _return total;_
  _}_
_Expected Output: 22_

## Known Bugs

* Still a WIP, a lot of functionality to troubleshoot

## License
MIT License

Copyright (c) [2021] [Erin McCulley]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

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