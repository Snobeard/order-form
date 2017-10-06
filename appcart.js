'use strict';
var cart = [];
var quantity = [];

if (localStorage.cart) {
  cart = JSON.parse(localStorage.cart);
  quantity = JSON.parse(localStorage.quantity);
}
//get data from localStore
//TEST object! Remove later!
function Product(src, count) {
  this.source = src;
  this.count = count;
  Product.orderInfo.push(this);
};
Product.orderInfo = [];

for (var i = 0; i < cart.length; i++) {
  new Product(cart[i], quantity[i]);
}

//display data from localStore to the DOM
function makeCart(){
  var buildList = document.getElementById('cartList').innerHTML;
  for (var i = 0; i < Product.orderInfo.length; i++) {
    buildList = buildList.concat('<li id="test"> <img src="' + Product.orderInfo[i].source + '" /> Item Count: ' + Product.orderInfo[i].count + ' <button type="button" name="' + i + '" onClick="deleteString(this.name)">Delete yourself</button> </li>');
    console.log(buildList);
  }
  document.getElementById('cartList').innerHTML = buildList;
}
//erase an item localStore via button click

//call stuff, you dolt!
makeCart();
function deleteString(name){
  cart.splice(name, 1);
  localStorage.cart = JSON.stringify(cart);
  location.reload();
}
