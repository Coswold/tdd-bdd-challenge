const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function() {
    const area = utils.area(5, 6);
    expect(area).to.be.a("number");
    expect(area).to.equal(30);
});

it("should return the area of a circle of radius 6", function() {
    const area = utils.circleArea(6);
    expect(area).to.be.a("number");
    expect(area).to.equal(113.1);
});

it("should return the perimeter of a 5 by 6 rectangle", function() {
    const perimeter = utils.perimeter(5, 6);
    expect(perimeter).to.be.a("number");
    expect(perimeter).to.equal(22);
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price", function() {
    var item = {
        name: "apple",
        price: 1.00
    };
    expect(item).to.be.a("object");
    expect(item.name).to.equal("apple");
    expect(item.price).to.equal(1.00)
});

it("Should return an array containing all items in cart", function() {
    var cart = ["apple", "frog"]
    expect(cart).to.be.a("array");
    expect(cart[0]).to.equal("apple");
    expect(cart).with.lengthOf(2);
});

it("Should add a new item to the shopping cart", function() {
    var cart = ["apple", "frog"]
    expect(cart).to.be.a("array");
    expect(cart).with.lengthOf(2);
    cart.push("banana");
    expect(cart).with.lengthOf(3);
});

it("Should return the number of items in the cart", function() {
    var cart = ["apple", "frog"]
    expect(cart).to.be.a("array");
    cartSize = cart.length
    expect(cartSize).to.be.a("Number");
    expect(cartSize).to.equal(2);
});

it("Should remove items from cart", function() {
    var cart = ["apple", "frog"]
    expect(cart).to.be.a("array");
    expect(cart).with.lengthOf(2);
    cart.pop();
    expect(cart).with.lengthOf(1);
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart", function() {
    var cart = ["apple", "frog"]
    expect(cart).to.be.a("array");
    count = cart.length
    expect(count).to.equal(2);
});

it("Should validate that an empty cart has 0 items", function() {
    var cart = [];
    expect(cart).to.be.a("array");
    expect(cart.length).to.equal(0);
});

it("Should return the total cost of all items in the cart", function() {
    var item = {
        name: "apple",
        price: 1.00
    };
    var item2 = {
        name: "banana",
        price: 2.00
    };
    expect(item).to.be.a("object");
    var cart = [];
    cart.push(item);
    cart.push(item2)
    var total = cart[0].price + cart[1].price
    expect(total).to.be.a("Number");
    expect(total).to.equal(3.00)
});
