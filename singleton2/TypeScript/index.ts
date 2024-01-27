class Logger {
    private static instance: Logger;
    private static _value: number;

    private constructor(){}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger()
        }
        return this.instance
    }

    public log(message: string):void {
        let time = new Date()
        console.log(`Logger Class Message: ${ message } [ ${  time.toLocaleString() } ]`)
    }

    set value(val: number) {
        Logger._value = val;
    }

    get value() {
        return Logger._value
    }

}

let loggerInstance = Logger.getInstance()

loggerInstance.value = 2024;

loggerInstance.log('wow it\'s works')
loggerInstance.log('wow it\'s works2')
loggerInstance.log('wow it\'s works3')
loggerInstance.log('wow it\'s works4')

class Application{
    constructor(private logger: Logger){
        this.run()
    }

    run(): void {
        this.logger.log('Application is running...')
    }
}

let logger  = Logger.getInstance();

let app = new Application(logger)

