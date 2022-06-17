class PercentDiscount {
    constructor(
        private percentDiscount: number,
        private threshold: number
    ) { }

    public apply(currentTotal: number): number {
        if (currentTotal > this.threshold) {
             return currentTotal - currentTotal * this.percentDiscount / 100 ;
        }
        return currentTotal;
    }
}

class ProductDiscount {
    constructor(
        private productCode: string,
        private minimumItems: number,
        private discount: number
    ) { }

    public apply(currentTotal: number, order: any, productPrices: any): number {
        if (order[this.productCode] >= this.minimumItems) {
            return currentTotal - productPrices[this.productCode] * this.discount / 100 * order[this.productCode];
        }
        return currentTotal;
    }
}

export { PercentDiscount, ProductDiscount };
