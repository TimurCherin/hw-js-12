// ex 1
const makePizza1 = () => "Your pizza is being prepared, please wait.";
  const result1 = makePizza1();
  const pointer = makePizza1;
  // ex 2
const deliverPizza = (pizzaName) => `Delivering ${pizzaName} pizza.`;
  
  const makePizza2 = (pizzaName) => `Pizza ${pizzaName} is being prepared, please wait...`;
  
  const makeMessage = (pizzaName, callback) => callback(pizzaName);
  console.log(makeMessage("Royal Grand", makePizza2));
  console.log(makeMessage("Paperoni", deliverPizza));
  // ex 3
  const makePizza = (pizzaName, callback) => {
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
  const showMessage = () => {
    alert("Hello World!");
  };
  button.addEventListener("click", showMessage);
  // ex 5
  let count = 0;
  const buttonCount = document.querySelector(".countbtn");
  const countClicks = () => {
    count += 1;
    console.log(`Клікнули по кнопці ${count} разів`);
  }
  buttonCount.addEventListener("click", countClicks);
  
  // ex 6
  const applyCallbackToEachElement = (arr, callback) => callback(arr);
  
  const arr = [1, 2, 3, 4, 5];
  
  const squareCallback = (arr) => {
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
  const calculateDiscountedPrice = (price, discount, callback) => callback(price, discount);
  
  const showDiscountedPrice = (price, discount) => {
    const discountedPrice = price - (price / 100) * discount;
    console.log(`Discounted price: ${discountedPrice}`);
  };
  
  calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90
                                                      // Дз з відео
                                                      // ex 1
console.log("Першим буде Коля");
                                                      // ex 2
console.log("Так");
                                                      // ex 3
console.log("Ні");
                                                      // ex 4
if (2 > 1){
  function showMessagE(){
    console.log("Сообщение")
  }
  showMessagE();
}