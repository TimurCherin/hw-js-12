// ex 1
function makePizza1() {
    return "Your pizza is being prepared, please wait.";
  }
  const result1 = makePizza1();
  const pointer = makePizza1;
  // ex 2
  function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }
  
  function makePizza2(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }
  
  function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
  }
  console.log(makeMessage("Royal Grand", makePizza2));
  console.log(makeMessage("Paperoni", deliverPizza));
  // ex 3
  function makePizza(pizzaName, callback) {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  
    callback(pizzaName);
  }
  
  makePizza("Royal Grand", function deliverPizza(pizzaName) {
    console.log(`Delivering pizza ${pizzaName}.`);
  });
  
  makePizza("Ultracheese", function eatPizza(pizzaName) {
    console.log(`Eating pizza ${pizzaName}`);
  });
  // ex 4
  const button = document.querySelector(".jsbtn");
  button.addEventListener("click", showMessage);
  function showMessage() {
    alert("Hello World!");
  }
  // ex 5
  let count = 0;
  const buttonCount = document.querySelector(".countbtn");
  buttonCount.addEventListener("click", countClicks);
  function countClicks() {
    count += 1;
    console.log(`Клікнули по кнопці ${count} разів`);
  }
  
  // ex 6
  const applyCallbackToEachElement = function (arr, callback) {
    return callback(arr);
  };
  
  const arr = [1, 2, 3, 4, 5];
  
  const squareCallback = function (arr) {
    const newArr = [];
    for (let el of arr) {
      const newEl = el * el;
      newArr.push(newEl);
    }
    return newArr;
  };
  
  const result = applyCallbackToEachElement(arr, squareCallback);
  
  console.log(result); // [1, 4, 9, 16, 25]
  // ex 7
  const calculateDiscountedPrice = function (price, discount, callback) {
    return callback(price, discount);
  };
  
  const showDiscountedPrice = function (price, discount) {
    const discountedPrice = price - (price / 100) * discount;
    console.log(`Discounted price: ${discountedPrice}`);
  };
  
  calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90
  