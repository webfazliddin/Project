// Types of variables
// 1. String => строка (text formatdagilar) => "" yoki ''
// 2. Number => butun sonla 10, 20 30, 50, qoldiqli 10.5, 28.9

// Boshqa tilda
// butun sonla 10, 20 30, 50 => Integer
// qoldiqli 10.5, 28.9 => Float

// 3. Array => [] (Massiv), klyuch bilan (0 dan sanaladi)
// var cars = [ "Honda", "Toyota", "Nexia", "BMW" ];
// cars.forEach((car, key) => {
//   console.log((key + 1) + car);
// });
// var numbersList = [ 10, 20, 105.5, 1000 ]

// 4. Object => {} (Obyekt), props
// var user = {
//   name: "Nuriddin",
//   age: 26,
//   city: "Tyumen"
// }
let korzina = [];
let total = 0;

let allAction = document.querySelectorAll(".product__action");
allAction.forEach((actionButton) => {
  actionButton.addEventListener("click", (e) => {
    e.preventDefault();

    let product_title =
      e.target.parentNode.querySelector(".product__title").innerText;

    let product_price =
      e.target.parentNode.querySelector(".product__price").innerText;

    let product__price_number = product_price.split(" ");

    total = total + Number(product__price_number[0]);

    korzina.push({ title: product_title,price: product_price });

    console.log(total);
    console.log(korzina);
  });
});
