import { ProductDiscount, PercentDiscount } from "../../src/discount";

describe("Percent Discount Tests", () => {
    const tenPercentDiscount = new PercentDiscount(15, 10);
    test("should be defined", () => {
        expect(tenPercentDiscount).toBeDefined();
    });
    test("should apply the percent discount on values over the minimum and returns the final price", () => {
        expect(tenPercentDiscount.apply(15)).toBe(12.75);
    });
    test("should apply no discount on values below the minimum and returns the original price", () => {
        expect(tenPercentDiscount.apply(3)).toBe(3);
    });
});

describe("Product Discount Tests", () => {
    const fiftyPercentDiscount = new ProductDiscount("A", 3, 50);
    test("should be defined", () => {
        expect(fiftyPercentDiscount).toBeDefined();
    })
    test("should apply the discount on orders which contains more than the number of products and returns the final discounted price", () => {
        expect(fiftyPercentDiscount.apply(20, { A: 4 }, { A: 5 })).toBe(10);
    });
    test("should apply no discount on orders which contains less than the number of products and returns the original price", () => {
        expect(fiftyPercentDiscount.apply(10, { A: 2 }, { A: 5 })).toBe(10);
    });
});