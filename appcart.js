'use strict';

//get data from localStore
//TEST object! Remove later!
function Product(src, count, name) {
  this.source = src;
  this.count = count;
  this.name = name;
  Product.orderInfo.push(this);
};
Product.orderInfo = [];

new Product('img/boots.jpg', 2, 'boots');
new Product('img/shark.jpg', 5, 'shark');

console.table(Product.orderInfo);
//display data from localStore to the DOM
function makeCart(){
  for (var i = 0; i < Product.orderInfo.length; i++) {
    console.log('in for loop');
    var buildList = '<li id="test"> <img src="' + Product.orderInfo[i].source + '" /> Item Count: ' + Product.orderInfo[i].count + ' <button type="button" name="deleteItem' + Product.orderInfo[i].name + '">Delete yourself</button> </li>';
    document.getElementById('cartList').innerHTML = buildList;
  }
}
//erase an item from the cart AND DOM AND localStore via button click

//call stuff, you dolt!
makeCart();
