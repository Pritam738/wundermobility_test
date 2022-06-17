## Wunder Mobility Test: A Checkout System

The supermarket has a catalogue with different types of products (Curry Sauce, Pizza Men’s T-Shirt,...).
Each product has a price, and the total price of the shopping cart is the total of all the prices.

But the supermarket also runs special deals, for example:

- If you spend over €30, you get 10% off your purchase.
- If you buy 2 or more pizzas, the price for each drops to €3.99.

These are just examples: the actual special deals change each week, so need to be easily configurable.

### Goal

The goal of the exercise is to implement a `Checkout` that can handle the following scenarios (and more - use your imagination!):

- The checkout should be able to handle a shopping cart with no special deals
- The client should get a receipt with the list of purchases and the total price.
- The teller should be able to handle the following special deals:
  - Buy 2 get one free
  - Buy 4 get one free
  - If you spend over €30, you get 10% off your purchase.
  - If you buy 2 or more pizzas, the price for each drops to €3.99.
  - Fixed discounts (e.g. bag of 1kg of oranges costs £4 instead of £5).
- The system can be configured with multiple different special deals,
  so the teller should be able to correctly detect and apply all the special deals applicable to a given shopping cart.
  To keep things simple you can assume that there will be up to one deal per product category.

## Features

- Add Products
- Add Percentage Discounts
- Add Individual Product Discounts
- Scan Products
- Apply Promotions
- Print Final Bill
- Clear Cart

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/)

## Running Program

To run program, run the following command

```bash
  npm i;
  npm start;
```

## Running Tests

To run tests, run the following command

```bash
  npm test;
```
