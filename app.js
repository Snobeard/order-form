'use strict';

var info = document.getElementById('info');
var cart = [];
var amountPurchased = [];

info.addEventListener('submit', addToCart);

function addToCart(event) {
  event.preventDefault();

  var name = event.target.name.value;
  var street = event.target.street.value;
  var city = event.target.city.value;
  var zip = event.target.zip.value;
  var phone = event.target.phone.value;
  var card = event.target.card.value;
  var chosen = event.target.productz.value;
  var amount = event.target.quantity.value;


  console.log('name is: ' + amount);
  if (name !== '') {
    localStorage.name = name;
  }
  if (street !== '') {
    localStorage.street = street;
  }
  if (city !== '') {
    localStorage.city = city;
  }
  if (zip !== '') {
    localStorage.zip = zip;
  }
  if (phone !== '') {
    localStorage.phone = phone;
  }
  if (card !== '') {
    localStorage.creditCard = card;
  }
  if (chosen !== '') {
    cart.push(chosen);
    amountPurchased.push(amount);
    localStorage.cart = JSON.stringify(cart);
  }
}
