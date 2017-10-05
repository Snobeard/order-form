'use strict';

//get data from localStore
//TEST object! Remove later!
function Product(src, count) {
  this.source = src;
  this.count = count;
  Product.orderInfo.push(this);
};
Product.orderInfo = [];

new Product('img/boots.jpg', 2, 'boots');
new Product('img/shark.jpg', 5, 'shark');

console.table(Product.orderInfo);
//display data from localStore to the DOM
function makeCart(){
  var buildList = document.getElementById('cartList').innerHTML;
  for (var i = 0; i < Product.orderInfo.length; i++) {
    buildList = buildList.concat('<li id="test"> <img src="' + Product.orderInfo[i].source + '" /> Item Count: ' + Product.orderInfo[i].count + ' <button type="button" name="deleteItem' + i + '">Delete yourself</button> </li>');
    console.log(buildList);
  }
  document.getElementById('cartList').innerHTML = buildList;
}
//erase an item from the cart AND DOM AND localStore via button click

//call stuff, you dolt!
makeCart();
