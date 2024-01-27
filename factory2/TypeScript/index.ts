abstract class PaymentProcessorFactory {
    
    constructor(public type: string, public amount: number){}
    abstract createPaymentProcessor(): void;
}

class CreditCardProcessor extends PaymentProcessorFactory {
    public createPaymentProcessor(): void {
        console.log(`Credit Card Payment Processor type: ${ this.type } && amount: ${ this.amount }`)
    }
}

class PaypalProcessor extends PaymentProcessorFactory {
    public createPaymentProcessor(): void {
        console.log(`Paypal Payment Processor type: ${ this.type } && amount: ${ this.amount }`)
    }
}

class PaymentProcessor {
    public CreatePaymentProcessor(
            type: 'CreditCard' | 'Paypal', 
            amount: number
            ): PaymentProcessorFactory {
                switch (type) {
                    case 'CreditCard':
                        return new CreditCardProcessor(type, amount)
                
                    case 'Paypal':
                        return new PaypalProcessor(type, amount)
                
                    default:
                        throw new Error (`Invalid type: ${type}`);
                }
    }
}

console.log("----------------------------------------------------------------");


let paymentProcessor: PaymentProcessor = new PaymentProcessor();

let paypal = paymentProcessor.CreatePaymentProcessor('Paypal', 500)
paypal.createPaymentProcessor()

let creditCard = paymentProcessor.CreatePaymentProcessor('CreditCard', 100)
creditCard.createPaymentProcessor()
