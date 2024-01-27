import { ConcreteBuilder } from "./classes/concrete-builder";
import { Director } from "./classes/director";

// ----------------------------

const builder: ConcreteBuilder = new ConcreteBuilder()
const director:Director        = new Director()

director.setBuilder(builder);

director.buildMinimumProduct();
let minProduct = builder.getProducts();
console.log('minProduct -->', minProduct)

director.buildFullProduct();
let fullProduct = builder.getProducts();
console.log('fullProduct -->', fullProduct)






