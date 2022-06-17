import { Product } from "./product";

class Cart {
    productPrices: any = {};
    constructor(
        private promotionalRules: any,
        private products: Product[]
    ) {
        this.productPrices = this.productsWithPrices(this.products);
    }

    public total(order: any) {
        return Number(this.applyDiscounts(this.sumWithoutDiscounts(order), order).toFixed(2));
    }

    private sumWithoutDiscounts(order: any) {
        return Object.keys(order).reduce((total, key: any) => {
            return total + this.productPrices[key] * order[key] ;
        }, 0);
    }

    private applyDiscounts(costBeforeDiscounts: number, order: any) {
        return this.promotionalRules.reduce((currentTotal: any, rule: any) => {
            return rule.apply(currentTotal, order, this.productPrices);
        }, costBeforeDiscounts);
    }


    private productsWithPrices(products: Product[]) {
        return products.reduce((productsWithPrices: any, product) => {
            productsWithPrices[product.code] = product.price;
            return productsWithPrices;
        }, {});
    }
}

export class Checkout {
    order: any = {};
    productsMap: Map<string, Product>;
    cart: Cart;
    constructor(
        private promotionalRules: any,
        private products: Product[]
    ) {
        this.productsMap = new Map(this.products.map(product => [product.code, product]));
        this.cart = new Cart(promotionalRules, products);
    }

    public scan(code: string, productCounts: number = 1) {
        if (this.productsMap.get(code) && productCounts > 0) {
            this.order[code] = this.order && this.order[code] ? this.order[code] + productCounts : productCounts;
        } 
    }

    public emptyCart() {
        this.order = {};
    }

    public total() {
        console.log('Total:', new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.cart.total(this.order)))
    }

}