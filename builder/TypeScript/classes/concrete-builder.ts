import { IBuilder } from "../interface/builder";
import { Product } from "./product";

export class ConcreteBuilder implements IBuilder{
    private product!: Product;

    constructor() {
        this.reset();
    }

    public reset():void {
        this.product = new Product()
    };
    
    public setPartA(): void {
        this.product.add('set part A');
    }
    
    public setPartB(): void {
        this.product.add('set part B');
    }
    
    public setPartC(): void {
        this.product.add('set part C');
    }
    
    getProducts():Product {
        const result = this.product
        this.reset();
        return result;
    };
    
}
