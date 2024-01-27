interface ICustomer{
    firstName:   string;
    lastName:    string;
    email:       string;
    phoneNumber: string;
}

interface ICustomerBuilder{
    setFirstName(FirstName: string):     ICustomerBuilder;
    setLastName(LastName: string):       ICustomerBuilder;
    setEmail(Email: string):             ICustomerBuilder;
    setPhoneNumber(PhoneNumber: string): ICustomerBuilder;

    build(): ICustomer;

}

class Customer implements ICustomer{
    constructor(
        public firstName:   string,
        public lastName:    string,
        public email:       string,
        public phoneNumber: string,
    ) {}
}

class CustomerBuilder implements ICustomerBuilder{

    private firstName:   string = '';
    private lastName:    string = '';
    private email:       string = '';
    private phoneNumber: string = '';

    public setFirstName(FirstName: string): ICustomerBuilder {
        this.firstName = FirstName;
        return this;
    }
    
    public setLastName(LastName: string): ICustomerBuilder {
        this.lastName = LastName;
        return this;
    }
    
    public setEmail(Email: string): ICustomerBuilder {
        this.email = Email;
        return this;
    }

    public setPhoneNumber(PhoneNumber: string): ICustomerBuilder {
        this.phoneNumber = PhoneNumber;
        return this;
    }

    public build(): ICustomer {
        return new Customer(
            this.firstName,
            this.lastName,
            this.email,
            this.phoneNumber
        )
    }
}

class CustomerDirector {
    constructor(private builder: ICustomerBuilder) {}

    public buildMinimalCustomer(
        firstName: string,
        lastName: string,
        email: string
    ) {
        return this.builder
            .setFirstName(firstName)
            .setLastName(lastName)
            .setEmail(email)
            .build()
    }

    public buildFullCustomer(
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string
    ) {
        return this.builder
            .setFirstName(firstName)
            .setLastName(lastName)
            .setEmail(email)
            .setPhoneNumber(phoneNumber)
            .build()
    }
}


// const customerBuilder: CustomerBuilder = new CustomerBuilder()
// const customerDirector: CustomerDirector = new CustomerDirector(customerBuilder)
const customerDirector: CustomerDirector = new CustomerDirector(new CustomerBuilder())

console.log('buildMinimalCustomer -->', customerDirector.buildMinimalCustomer('Taher', 'Ahmed', 'taher.js.stack@gmail.com'))

console.log('buildFullCustomer --->', customerDirector.buildFullCustomer(
    'Taher',
    'Ahmed',
    'taher.js.stack@gmail.com',
    '01155721425'));