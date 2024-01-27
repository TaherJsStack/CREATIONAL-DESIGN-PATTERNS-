import { IBuilder } from "../interface/builder";

export class Director {
    
    private builder!: IBuilder;
    
    public setBuilder(builder: IBuilder):void {
        this.builder = builder;
    }

    public buildMinimumProduct(): void {
        this.builder.setPartA();
    }

    public buildFullProduct(): void {
        this.builder.setPartA();
        this.builder.setPartB();
        this.builder.setPartC();
    }
}
