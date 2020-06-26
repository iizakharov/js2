class Basket {
    constructor(container = '.basket') {
        this.container = container;
        this.goods = [];
        this.render();
        this.calcSum();
        this.calcQuantity();
    }
}