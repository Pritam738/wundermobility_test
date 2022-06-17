import { Checkout } from '../../src/checkout'
import { ProductDiscount, PercentDiscount } from "../../src/discount";
import { Product } from '../../src/product';

describe("Checkout Tests", () => {

    const product = new Product('001', 'Curry Sauce', 1.95);
    const product2 = new Product('002', 'Pizza', 5.99);
    const products = [product, product2];
    const tenPercentDiscount = new PercentDiscount(10, 30);
    const pizzaDiscount = new ProductDiscount(product2.code, 2, 33.38);
    const promotionalRules = [tenPercentDiscount, pizzaDiscount];
    const checkout = new Checkout(promotionalRules, products);

    test("should be defined", () => {
        expect(checkout).toBeDefined();
    });

    test("should return the total value of the cart", () => {
        checkout.scan(product2.code, 2)
        checkout.scan(product.code)
        expect(checkout.total()).toBe('€9.93');
        expect(checkout.cart.total({'001' : 2})).toBe(3.9);      
    });
});
